// import { ComponentCustomProperties } from "vue";
// import { Store } from "vuex";
// import { rootState } from "./store";

/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.json";
