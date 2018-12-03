<template>
  <div class="hello">
    <h1>{{ massage }}</h1>
    <h2>Essential Links</h2>
    <button @click="add">click</button>
    <ul v-if="toggle">
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
    </ul>
    <div v-else>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quis.
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['toggle'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cnt: 0
    }
  },
  beforeMount() {
    console.log('hello', ' beforeMount');
  },
  mounted() {
    console.log('hello', ' mounted');
  },
  methods: {
    add() {
      this.cnt++
    }
  },
  computed: {
    massage() {
      return this.cnt > 1 ? this.msg : this.msg + this.cnt
    }
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
