import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import { worker } from "./mocks/browser";
import { store } from "./store";

import "element-plus/dist/index.css";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const app = createApp(App);
app.config.globalProperties.$store = store;
app.use(router).use(store).use(ElementPlus).mount("#app");
