import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { worker } from "./mocks/browser";
import { store } from "./store";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const app = createApp(App);
app.config.globalProperties.$store = store;
app.use(router).use(store).mount("#app");
