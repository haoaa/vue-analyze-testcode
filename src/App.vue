<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld :toggle="toggle"/>
    <button @click="toggle = !toggle">toggle it</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data() {
    return {
      toggle: false
    }
  },
  components: {
    HelloWorld
  },
  beforeMount() {
    console.log('app', ' beforeMount');
  },
  mounted() {
    console.log('app', ' mounted');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
