import Vue from 'vue'
import VueHttp from 'vue-resource'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')