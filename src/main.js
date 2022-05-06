import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import VueScrollReveal from 'vue-scroll-reveal'
Vue.use(VueScrollReveal,{
  reset: false,
  class: 'v-scroll-reveal', 
  delay: 300,
  distance: "50px",
  duration: 800,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 350,
  
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
