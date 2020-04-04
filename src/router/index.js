import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects'
import Team from '../views/Team'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    }
  ]
})
