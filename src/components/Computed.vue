<template>
  <div id="app">
    {{message}}
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello',
        name: 'bill'
      }
    },
    computed: {
      message() {
        return `${this.msg} ${this.name}`
      }
    },
    methods: {
      change() {
        //this.msg = new Date()
        this.name =  'jim'
      },
      toggle() {
        this.flag = false
      }
    },
  }
</script>

<style scoped>

</style>