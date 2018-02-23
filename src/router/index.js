import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: resolve => require(['@/components/pages/Login.vue'], resolve),
    },{
      path: '/Homepage',
      component: resolve => require(['@/components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['@/components/pages/Homepage.vue'], resolve)
        },{
          path: '/Pageone',
          component: resolve => require(['@/components/pages/Pageone.vue'], resolve)
        },{
          path: '/Pagetwo',
          component: resolve => require(['@/components/pages/Pagetwo.vue'], resolve)
        },{
          path: '/Contentone',
          component: resolve => require(['@/components/pages/Contentone.vue'], resolve)
        },{
          path: '/Contenttwo',
          component: resolve => require(['@/components/pages/Contenttwo.vue'], resolve)
        },{
          path: '/Pagetable',
          component: resolve => require(['@/components/pages/Pagetable.vue'], resolve)
        }
      ]
    },{
      path: '/Login',
      component: resolve => require(['@/components/pages/Login.vue'], resolve),
    }
  ],
  mode: 'history'
})
