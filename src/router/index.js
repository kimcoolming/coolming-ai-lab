import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import AILab from "@/pages/AILab.vue";
import AILabDetail from "@/pages/AILabDetail.vue";
import Templates from "@/pages/Templates.vue";
import Services from "@/pages/Services.vue";
import Contact from "@/pages/Contact.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/ai-lab", component: AILab },
    { path: "/ai-lab/:id", component: AILabDetail },
    { path: "/templates", component: Templates },
    { path: "/services", component: Services },
    { path: "/contact", component: Contact },
  ],
  scrollBehavior: () => ({ top: 0 }),
});
