import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CatalogView from "@/views/CatalogView.vue";
import ContactView from "@/views/ContactView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import BookDetail from "@/views/BookDetail.vue";
import FavoritesList from "@/views/FavoritesList.vue";
import CartView from "@/views/CartView.vue";
import AccountView from "@/views/AccountView.vue";
import LoginView from "@/views/LoginView.vue";
import CheckoutView from "@/views/CheckoutView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: CatalogView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/registration",
    name: "RegistrationView",
    component: RegistrationView,
  },
  { path: "/book/:id", name: "BookDetail", component: BookDetail, props: true },
  {
    path: "/favorites",
    name: "Favorites",
    component: FavoritesList,
  },
  {
    path: "/cart",
    name: "CartView",
    component: CartView,
  },
  {
    path: "/account",
    name: "AccountView",
    component: AccountView,
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (user) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/checkout",
    name: "CheckoutView",
    component: CheckoutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
