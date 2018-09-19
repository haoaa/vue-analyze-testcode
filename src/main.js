// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Reactivity from './components/Reactivity'

import MergeOptions from './components/MergeOptions'

Vue.config.productionTip = false


Vue.component('App', Reactivity)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  template: '<App/>'
  // render: c => c(MergeOptions)
})
