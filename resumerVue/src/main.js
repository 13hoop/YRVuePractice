// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import VuexTest from './components/VuexTest'
import router from './router'

Vue.config.productionTip = false

// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment(state) {
//       state.count++
//     }
//   }
// })

// store.commit('increment')
// console.log('commit: ' + store.state.count) // -> 1

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
  // template: '<VuexTest/>',
  // components: { VuexTest }
})
