<template>
  <div class="searchField flex flex-col items-center" @click="$emit('update:childInputPlayer',childInputPlayer);">
    <p>{{  }}</p>

    <input
      type="text"
      class="bg-gray-300 px-4 py-2"
      autocomplete="off"
      v-model="childInputPlayer"
      @keyup="$emit('update:childInputPlayer',childInputPlayer);"      
      @input="filterPlayers"
      @focus="modal = true"
      style="width: 300px"
    />

    <div v-if="filteredPlayers && modal">
      <ul style="list-style-type:none" class="w-48 bg-gray-800 text-white">
        <li
          v-for="filteredPlayer in filteredPlayers"
          :key="filteredPlayer.id"
          class="py-2 border-b cursor-pointer"
          @click="setPlayer(filteredPlayer)"
        >{{ filteredPlayer }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
//Source: https://www.youtube.com/watch?v=3pVif7iN8Lw
export default {
  name: "SearchField",
  props: 
  {
    playersOnlyName: Array,
  }
  ,
  data: function() {
    return {
      childInputPlayer: "",
      filteredPlayers: [],
      modal: false

    };
  },
  mounted() {

  },
  methods: {
    filterPlayers() {
      this.filteredPlayers = this.playersOnlyName.filter(player => {
        return player.toLowerCase().startsWith(this.childInputPlayer.toLowerCase());
      })
    },
    setPlayer(player) {
      this.childInputPlayer = player
      this.modal = false
    }
  }
};
</script>

<style>
</style>