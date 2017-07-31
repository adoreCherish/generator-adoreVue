import Vue from 'vue';
import Router from 'vue-router';
import navitem from '../components/navitem.vue';
import cdheroitems from '../components/cdheroitems.vue';
import gitbranch from '../components/gitbranch.vue';
Vue.use(Router);

export default new Router({
  routes: [
  {
      path: '/',
      // component: mains
      components:{
        navitem: navitem,
        cdheroitems: cdheroitems
      }
    },
    {
      path: '/gitbranch/:id',
      name: 'gitbranch',
      components: {
        gitbranch:gitbranch
      }
    }
  ]
})
