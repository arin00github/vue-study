import { createStore } from "vuex";
import { todoModule, todoModuleState } from "./modules/todoModule";
import { countModuleState, countModule } from "./modules/countModule";

export interface rootState {
  todoModule: todoModuleState;
  countModule: countModuleState;
}

export const store = createStore({
  modules: { todoModule, countModule },
});
