<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul v-if="toggle">
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div v-else>Lorem ipsum dolor sit amet.</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['toggle'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeMount() {
    console.log('hello', ' beforeMount');
  },
  mounted() {
    console.log('hello', ' mounted');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
