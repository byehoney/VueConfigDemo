import Router from 'vue-router'
import Vue from 'vue'
const NotFound = ()=> import ('@/components/NotFound')
import controller from './controller'
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
      ...controller,
    // 404页面 必须放在最后，添加其他路由需放在其上面
    {
      path: "*",
      name: "NotFound",
      component: NotFound,
      meta: {
        title: "聚有钱-页面丢失"
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "聚有钱";
  }
  next();
});
export default router;
