import { Module, ActionContext } from "vuex";
import { rootState } from "../index";

export interface countModuleState {
  count: number;
}

export const countModule: Module<countModuleState, rootState> = {
  namespaced: true,
  state: () => ({
    count: 0,
  }),
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  getters: {
    doubleCount(state, getters, rootState) {
      // 다른 store state 추론 가능
      console.log(rootState);
      return state.count * 2;
    },
  },
  actions: {
    incrementIfOddOnRootSum({ state, commit, rootState }) {
      if (state.count % 2 === 1) {
        commit("increment");
      }
    },
  },
};
