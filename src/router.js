import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import MovementsView from "./views/MovementsView.vue";
import TransferView from "./views/TransferView.vue";
import WalletView from "./views/WalletView.vue";
import ContactView from "./views/ContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/movimientos", component: MovementsView }, 
  { path: "/transferir", component: TransferView },
  { path: "/billetera", component: WalletView},
  { path: "/contactos", component: ContactView},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
