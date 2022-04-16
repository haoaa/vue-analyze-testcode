// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Reactivity from "./components/Reactivity";
import MergeOptions from "./components/MergeOptions";
import Computed from "./components/Computed";
import ComputedWatcher from "./components/ComputedWatcher";
import WatcherOption from "./components/WatcherOption";
import VnodeUpdate from "./components/VnodeUpdate";
import UpdateChildren from "./components/UpdateChildren";

Vue.config.productionTip = false;

let vm = new Vue({
  el: "#app",
  template: `
<div id="list-demo">
  <button v-on:click="add">Add</button>
  <button v-on:click="remove">Remove</button>
  <transition-group name="list" tag="p">
    <span v-for="item in items" v-bind:key="item" class="list-item">
      {{ item }}
    </span>
  </transition-group>
</div>`,
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    }
  }
});
// let vm = new Vue({
//   el: '#app',
//   template: '<div id="demo">' +
//   '<button v-on:click="show = !show">' +
//   'Toggle' +
//   '</button>' +
//   '<transition :appear="true" name="fade">' +
//   '<p v-if="show">hello</p>' +
//   '</transition>' +
//   '</div>',
//   data() {
//     return {
//       show: true
//     }
//   }
// })

// keep-alive
// let A = {
//   template: '<div class="a">' +
//   '<p>A Comp</p>' +
//   '</div>',
//   name: 'A',
//   mounted() {
//    console.log('a mounted');
//   },
//   activated() {
//     console.log('a activated');
//   },
//   deactivated() {
//     console.log('a deactivated');
//   }
// }

// let B = {
//   template: '<div class="b">' +
//   '<p>B Comp</p>' +
//   '</div>',
//   name: 'B',
//   mounted() {
//     console.log('b mounted');
//   },
//   activated() {
//     console.log('b activated');
//   },
//   deactivated() {
//     console.log('b deactivated');
//   }
// }
// let vm = new Vue({
//   el: '#app',
//   template: '<main>' +
//   '<keep-alive>' +
//   '<component :is="currentComp">' +
//   '</component>' +
//   '</keep-alive>' +
//   '<button @click="change">switch</button>' +
//   '</main>',
//   data: {
//     currentComp: 'A'
//   },
//   methods: {
//     change() {
//       this.currentComp = this.currentComp === 'A' ? 'B' : 'A'
//     }
//   },
//   components: {
//     A,
//     B
//   }
// })
