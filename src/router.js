import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/',
          name: 'login',
          component: () => import('@/views/pages/login.vue'),
          meta: {
            guest: true
          }
        },
        {
          path: '/not-found',
          name: 'not-found',
          component: () => import('@/views/pages/Error404.vue')
        }
      ]
    },
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      // eslint-disable-next-line no-sparse-arrays
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('./views/Home.vue'),
          meta: {
            requireAuth: true,
            breadcrumb: [
              { title: 'Summary', active: true }
            ]
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.userdata == null) {
      next('/')
    }
  }
  if (to.matched.some(record => record.meta.guest)) {
    // this route check if user have logged in redirect to home page
    if (store.state.userdata != null) {
      next('/dashboard')
    }
  }
  next()
})
export default router
