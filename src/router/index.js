import VueRouter from "vue-router";

import Login from "@src/pages/login/login.vue";
import Home from "@src/pages/home/home.vue";
import Detail from "@src/pages/detail/detail.vue";
import Rate from "@src/pages/rate/rate.vue";
import Message from "@src/pages/message/message.vue";
import NotFound from "@src/pages/404/notFound.vue";

const routes = [
  { path: "/", name: "home", redirect: "/home" },
  { path: "/login", name: "login", component: Login },
  { path: "/home", name: "home", component: Home },
  { path: "/detail", name: "detail", component: Detail },
  { path: "/rate", name: "rate", component: Rate },
  { path: "/message", name: "message", component: Message },
  { path: "*", name: "404 not found", component: NotFound },
];

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
