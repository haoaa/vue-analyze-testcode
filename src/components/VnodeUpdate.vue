<template>
  <div class="v-node-update">
    <HelloWorld :toggle="toggle"></HelloWorld>
    <button @click="change">toggle</button>
  </div>    
</template>

<script>
import HelloWorld from './HelloWorld'
export default {
  name: 'VnodeUpdate',
  components: {HelloWorld},
  data () {
    return {
      toggle: false
    }
  },
  methods: {
    change() {
      this.toggle = !this.toggle
    }    
  }  
}
</script>

