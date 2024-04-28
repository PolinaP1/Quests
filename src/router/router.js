import AboutUsPage from "@/page/AboutUsPage.vue";
import HomePage from "@/page/HomePage.vue";
import QuestsPage from "@/page/QuestsPage.vue";
// import QuestPage from "@/page/QuestPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
export const routes = [
    {path: '/', name:'Главная', component:HomePage, private: true},
    {path:'/About', name:'О нас', component:AboutUsPage, private: true},
    {path:'/Quests', name:'Квесты', component:QuestsPage, private: true},
    // {path:'/Quest/:name', name:'QuestPage', component:QuestPage, private: false}
]
const router = new createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;