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
let A = {
  template: '<div class="a">' +
  '<p>A Comp</p>' +
  '</div>',
  name: 'A',
  mounted() {
   console.log('a mounted');
  },
  activated() {
    console.log('a activated');
  },
  deactivated() {
    console.log('a deactivated');
  }
}

let B = {
  template: '<div class="b">' +
  '<p>B Comp</p>' +
  '</div>',
  name: 'B',
  mounted() {
    console.log('b mounted');
  },
  activated() {
    console.log('b activated');
  },
  deactivated() {
    console.log('b deactivated');
  }
}

let vm = new Vue({
  el: '#app',
  template: '<div id="demo">' +
  '<button v-on:click="show = !show">' +
  'Toggle' +
  '</button>' +
  '<transition :appear="true" name="fade">' +
  '<p v-if="show">hello</p>' +
  '</transition>' +
  '</div>',
  data() {
    return {
      show: true
    }
  }
})