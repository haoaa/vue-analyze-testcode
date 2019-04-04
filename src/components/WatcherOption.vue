<template>
  <div id="app">
    {{count}}
    <button @click="changeName">changeName</button>
    <button @click="countPlus">countPlus</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: {
          first: 'Hello',
          last: 'Franklin'
        },
        count: 0
      }
    },
    watch: {
      count: {
        handler: function(n, o) {
          console.log(n, ' ', o);
        },
        sync: true
      },
      name: {
        handler: function(n, o) {
          console.log(n, ' ', o);
        },
        immediate: true,
      }
    },
    methods: {
      changeName() {
        this.name.first =  'jim'
      },
      countPlus() {
        this.count++
      }
    },
  }
</script>

<style scoped>

</style>