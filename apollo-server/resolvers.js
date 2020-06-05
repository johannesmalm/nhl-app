import GraphQLJSON from 'graphql-type-json'
import fetch from 'node-fetch'


export default {
  JSON: GraphQLJSON,



  Query: {
    hello: (root, { name }) => {
      return fetch('https://statsapi.web.nhl.com/api/v1/teams')
      .then(res => res.json())
      .then(data => data.teams[0].name)
    }

  },

  Mutation: {
    myMutation: (root, args, context) => {
      const message = 'My mutation completed!'
      context.pubsub.publish('hey', { mySub: message })
      return message
    },

  },

  Subscription: {
    mySub: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('hey'),
    },

  },
}
