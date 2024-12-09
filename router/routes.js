const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/pages/Layout.vue"), //.vue不能省略
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        title: "首页",
        component: () => import("@/pages/views/home.vue"), //.vue不能省略
      },
      {
        path: "/shop",
        name: "shop",
        title: "饰品",
        component: () => import("@/pages/views/shop.vue"), //.vue不能省略
      },
      {
        path: "/design",
        name: "design",
        title: "定制",
        component: () => import("@/pages/views/design.vue"), //.vue不能省略
      },
      {
        path: "/mine",
        name: "mine",
        title: "我的",
        component: () => import("@/pages/views/mine.vue"), //.vue不能省略
      },
      {
        path: "/about",
        name: "about",
        title: "关于",
        component: () => import("@/pages/views/about.vue"), //.vue不能省略
      },
    ],
  },
];
export default routes;
