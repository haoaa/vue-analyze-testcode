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
new Vue({
  el: '#app',
  template: `
  <ul :class="bindClass" class="list" v-if="isShow">
    <li v-for="(item, index) in data" @click="clickItem(index)">
      {{item}} - {{index}}
    </li>
  </ul>
  `,
  data() {
    return {
      bindClass: 'a',
      isShow: true,
      data: ['A', 'B', 'C', 'D']
    }
  },
  methods: {
    clickItem(i) {
      console.log(i)
    }
  },  
})

