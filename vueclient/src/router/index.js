import Vue from 'vue'
import Router from 'vue-router'
import Todo from '../todo/todo.vue'
import Login from '../todo/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      redirect: '/login'
    },
    {
      path : '/app',
      component: Todo
    },{
      path : '/login',
      component: Login
    }
  ],
  mode: 'history'
})
