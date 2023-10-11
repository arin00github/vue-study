import { Module } from "vuex";
import { rootState } from "..";

export interface todo {
  uid: string;
  title: string;
  done: boolean;
}

export interface todoModuleState {
  todos: todo[];
}

export const todoModule: Module<todoModuleState, rootState> = {
  namespaced: true,
  state: () => ({
    todos: [
      { uid: "todo_193", title: "buy books", done: true },
      { uid: "todo_12", title: "cook banchan", done: true },
      { uid: "todo_14", title: "clean whole room", done: false },
    ],
  }),
  mutations: {
    addNewTodo(state, payload) {
      state.todos.concat([...payload]);
    },
    checkDone(state, payload) {
      state.todos = state.todos.map((todo) => {
        return todo.uid === payload ? { ...todo, done: !todo.done } : todo;
      });
    },
  },
  getters: {
    getAllTodos(state) {
      return state.todos;
    },
  },
};
