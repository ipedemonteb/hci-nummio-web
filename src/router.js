import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import MovementsView from "./views/MovementsView.vue";
import TransferView from "./views/TransferView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/movimientos", component: MovementsView },
  { path: "/transferir", component: TransferView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
