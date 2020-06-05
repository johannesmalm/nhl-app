
<template>
  <div class="hello">
<h1>Database Page</h1>
<h2>Message from Graphql: {{ hello }}</h2>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "DatabasePage",
  props: {},
  data () {
  return {
    // Initialize your apollo data
    hello: '',
  }
},
  apollo: {
  // Simple query that will update the 'hello' vue property
  hello: gql`{hello}`,
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
