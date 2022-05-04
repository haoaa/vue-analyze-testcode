let Child = {
  template: '<button @click="clickHandler($event)">' +
  'click me' +
  '</button>',
  methods: {
    clickHandler(e) {
      console.log('Button clicked!', e)
      this.$emit('select')
    }
  }
}

let vm = new Vue({
  el: '#app',
  template: '<div>' +
  '<child @select="selectHandler" @click.native.prevent="clickHandler"></child>' +
  '</div>',
  methods: {
    clickHandler() {
      console.log('Child clicked!')
    },
    selectHandler() {
      console.log('Child select!')
    }
  },
  components: {
    Child
  }
})