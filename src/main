<template>
  <div id="app">
    <div v-if="flag">
      {{msg}}
    </div>
    <div v-else>
      {{msg1}}
    </div>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flag: true,
        msg: 'Hello',
        msg1: 'bye'
      }
    },
    methods: {
      change() {
        this.msg = 'hello 2'
      },
      toggle() {
        this.flag = !this.flag
      }
    }
  }
</script>

<style scoped>

</style>