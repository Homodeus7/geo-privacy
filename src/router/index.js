import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LocationView from "@/views/LocationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/location",
      name: "location",
      component: LocationView,
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
