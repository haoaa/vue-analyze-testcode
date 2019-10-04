// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex, {mapState,mapActions,mapGetters, mapMutations} from "vuex";
import App from './App'
import Reactivity from './components/Reactivity'
import MergeOptions from './components/MergeOptions'
import Computed from './components/Computed'
import ComputedWatcher from './components/ComputedWatcher'
import WatcherOption from './components/WatcherOption'
import VnodeUpdate from './components/VnodeUpdate'
import UpdateChildren from './components/UpdateChildren'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  modules: {
    order: {
      namespaced: true,
      state: {
        money: 3.23
      },
      getters: {
        total (localState, localGetters, state, getters) {
          // 可访问全局 state 和 getters，以及如果是在 modules 下面，可以访问到局部 state 和 局部 getters
          return state.money + ' ' + localState.b
        },
        more(localState) {
          return localState.money + 'more'
        }
      }
    }
  }
})
Vue.config.productionTip = false

new Vue({
  // state
  el:'#app',
  data () {
    return {}
  },
  store,
  computed: {
    ...mapState('order', {
      moneyMe: 'money'
    }),
    ...mapGetters('order', {
      more: 'more'
    }),
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
  
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',
  
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    })
  },
  // view
  template: `
    <div>
    {{ count }} {{moneyMe}} {{more}}
    <h3></h3>
    <button @click="increment">increment</button>
    </div>
  `,
  // actions
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
})