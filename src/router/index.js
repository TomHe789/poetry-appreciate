import VueRouter from "vue-router";

import Login from "@src/pages/login/login.vue";
import Home from "@src/pages/home/home.vue";
import Rate from "@src/pages/rate/rate.vue";
import Message from "@src/pages/message/message.vue";
import NotFound from "@src/pages/404/notFound.vue";

const routes = [
  { path: "/", name: "首页", redirect: "/home" },
  { path: "/login", name: "登录", component: Login },
  { path: "/home", name: "首页", component: Home },
  { path: "/rate", name: "排行榜", component: Rate },
  { path: "/message", name: "留言板", component: Message },
  { path: "*", name: "404 not found", component: NotFound },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
