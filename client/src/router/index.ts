import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateQuizzView from "../views/CreateQuizzView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create_quizz",
      name: "create",
      component: CreateQuizzView,
    },
  ],
});

export default router;
