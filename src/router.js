import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import MovementsView from "./views/MovementsView.vue";
import TransferView from "./views/TransferView.vue";
import WalletView from "./views/WalletView.vue";
import ContactView from "./views/ContactView.vue";
import InvestView from "./views/InvestView.vue";
import HelpView from "./views/HelpView.vue";
import PaymentView from "./views/PaymentView.vue";
import ServiceView from "./views/ServiceView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/movimientos", component: MovementsView }, 
  { path: "/transferir", component: TransferView },
  { path: "/billetera", component: WalletView},
  { path: "/contactos", component: ContactView},
  { path: "/inversiones", component: InvestView},
  { path: "/ayuda", component: HelpView},
  { path: "/cobros", component: PaymentView},
  { path: "/servicios", component: ServiceView},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
