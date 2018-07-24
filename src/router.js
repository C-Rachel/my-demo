import Vue from 'vue'
import Router from 'vue-router'
import Index from './view/index.vue'
import About from './view/about.vue'
import Contact from './view/contact.vue'

Vue.use(Router);

export default new Router({
    mode: process.env.NODE_ENV == 'production' ? "history" : "hash",
    routes: [{
            path: '/',
            name: 'index',
            component: Index
       },{
            path: '/about',
            name: 'about',
            component: About
       },{
            path: '/contact',
            name: 'contact',
            component: Contact
       }
    ]
})