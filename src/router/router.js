import AboutUsPage from "@/page/AboutUsPage.vue";
import HomePage from "@/page/HomePage.vue";
import QuestsPage from "@/page/QuestsPage.vue";
import QuestPage from "@/page/QuestPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  { path: '/', name: 'Главная', component: HomePage },
  { path: '/About', name: 'О нас', component: AboutUsPage },
  { path: '/Quests', name: 'Квесты', component: QuestsPage }
];

export const idNavigate = [
  { path: '/Quest/:id', component: QuestPage }
];

const allRoutes = routes.concat(idNavigate);

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes
});

export default router;