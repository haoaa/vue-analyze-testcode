<template>
  <div id="app">
    {{message}}
    <button @click="change">change</button>
    <button @click="countPlus">count</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        subject: 'Hello',
        predicate: 'bill',
        count: 0
      }
    },
    computed: {
      message() {
        if (this.count === 0 ) {
          return 'waiting'
        } else {          
          return `${this.subject} ${this.predicate}`
        }
      }
    },
    methods: {
      change() {
        this.predicate =  'jim'
      },
      countPlus() {
        this.count++
      }
    },
  }
</script>

<style scoped>

</style>