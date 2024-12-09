// 导入router所需的方法
import { createRouter, createWebHashHistory } from "vue-router";

// 导入路由页面的配置
import routes from "./routes.js";

// 路由参数配置
const router = createRouter({
  // 使用hash(createWebHashHistory)模式，(createWebHistory是HTML5历史模式，支持SEO)
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  // const savedRoute = localStorage.getItem("savedRoute");
  // if (savedRoute != 1) {
  //   next(savedRoute);
  //   localStorage.setItem("savedRoute", 1);
  // } else {
  //   next();
  // }
  next();
});

router.afterEach((to) => {
  // localStorage.setItem("savedRoute", to.fullPath);
});

// 导出默认值
export default router;
