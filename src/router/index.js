import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/location",
    name: "location",
    component: () => import("@/views/LocationView.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      layout: "login",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
