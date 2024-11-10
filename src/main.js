import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BookCatalog from "./components/BookCatalog.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

createApp(App)
  .use(store)
  .use(router)
  .component("BookCatalog", BookCatalog)
  .mount("#app");
