// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Reactivity from './components/Reactivity'
import MergeOptions from './components/MergeOptions'
import Computed from './components/Computed'
import ComputedWatcher from './components/ComputedWatcher'
import WatcherOption from './components/WatcherOption'
import VnodeUpdate from './components/VnodeUpdate'
import UpdateChildren from './components/UpdateChildren'

Vue.config.productionTip = false


// Vue.component('App', UpdateChildren)
/* eslint-disable no-new */
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

