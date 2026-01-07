import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";
import "@mdi/font/css/materialdesignicons.css";
import "@/assets/scss/style.scss";
import "bootstrap";
import { registerGlobalComponents } from "./utils/registerGlobalComponents";

const root = createApp(App);
const pinia = createPinia();

async function init() {
  await registerGlobalComponents(root);

  root.use(pinia).use(router);

  root.mount("#app");
}

init();
