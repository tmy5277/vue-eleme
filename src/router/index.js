import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Goods from 'components/goods/goods.vue'
import Ratings from 'components/ratings/ratings.vue'
import Seller from 'components/seller/seller.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/goods'
    },
    {
    	path:'/goods',
    	name: 'goods',
    	component:Goods
    },
    {
    	path:'/ratings',
    	name: 'ratings',
    	component:Ratings
    },
    {
    	path:'/seller',
    	name: 'seller',
    	component:Seller
    },
  ],
  linkActiveClass:'active',//路由激活时赋予一个'active'的class，用于改变激活路由时的样式
})
