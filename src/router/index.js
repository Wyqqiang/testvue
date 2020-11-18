import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home/Home'
import Cat from 'views/cat/Cat'
import Me from 'views/me/Me'
import Shop from 'views/shop/Shop'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/cat',
      component: Cat
    }
  ]
})
