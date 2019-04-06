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


Vue.component('App', UpdateChildren)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>'
  // render: c => c(MergeOptions)
})

