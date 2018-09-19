// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MergeOptions from './components/MergeOptions'

Vue.config.productionTip = false

Vue.mixin({
  created() {
    console.log('parent created')
  }
})

Vue.component('App', App)
/* eslint-disable no-new */
new Vue({
  beforeCreate() {
    console.log('new Vue beforeCreate');
  },
  el: '#app',
  // components: { App },
  template: '<App/>'
  // render: c => c(MergeOptions)
})
