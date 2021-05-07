// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "amfe-flexible";
// Vue.config.productionTip = false
import {
  createApp
} from "vue";

const app = createApp(App)


// Vue.mixin({
//   created: function () {
//     var myOption = this.$options.myOption
//     if (myOption) {
//       console.log("myOption", myOption)
//     }
//   },
//   methods: {
//     mixinMethods() {
//       console.log("这是一个mixin 混入的methods")
//     }
//   }
// })


// new Vue({
//   myOption: 'hello!',
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

app.mixin({
  created: function () {
    const myOption = this.$options.myOption
    if (myOption) {
      console.log("myOption", myOption)
    }
  },
  methods: {
    mixinMethods() {
      console.log("这是一个mixin 混入的methods")
    }
  }
})
app.use(router).use(store).mount("#app");