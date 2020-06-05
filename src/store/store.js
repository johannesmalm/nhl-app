import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        swedishPlayers: [
            {id: 8480012, name: "Elias Pettersson"},
            {id: 8480147, name: "Oscar Fantenberg"},
            {id: 8471303, name: "Alexander Edler"},
            {id: 8474578, name: "Erik Karlsson"},
            {id: 8473563, name: "Nicklas Backstrom"},
            {id: 8476483, name: "Richard Rakell"},
            {id: 8476459, name: "Mika Zibanejad"},
            {id: 8475171, name: "Oliver-Ekman Larsson"},

        ]
    },
    mutations: {
        addNewPlayer(state, payLoad){
            return state.swedishPlayers.unshift({id: payLoad, name:""})
        }
    },
    actions: {
        addNewPlayer(context, payLoad){
            context.commit('addNewPlayer', payLoad)
        }
    }
})