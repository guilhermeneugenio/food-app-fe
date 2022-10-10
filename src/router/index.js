import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RecipeView from "@/views/RecipeView.vue";
import ResultsView from "@/views/ResultsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },    
    {
      path: "/results",
      name: "results",
      component: ResultsView,
    },
    {
      path: "/recipe",
      name: "recipe",
      component: RecipeView,
    },
  ],
});

export default router;
