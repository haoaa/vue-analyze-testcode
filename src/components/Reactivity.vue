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
        this.msg = new Date()
      },
      toggle() {
        this.flag = false
      }
    },
    watch: {
      msg(v, b) {
        console.debug(v, b);
      }
    }
  }
</script>

<style scoped>

</style>