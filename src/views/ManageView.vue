<template>
  <div>
    <h1>Manage View Page</h1>
    <div class="todo-list">
      <div class="todo" v-for="todo in todoList" key="todo.uid">
        <h4>{{ todo.title }}</h4>
        <button v-bind:class="{ done: todo.done }" @click="checkDone(todo.uid)">
          {{ todo.done ? "O" : "X" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { todo } from "@/store/modules/todoModule";

export default defineComponent({
  name: "ManageView",
  data() {
    return {
      todos: [] as todo[],
    };
  },
  computed: {
    todoList() {
      return this.$store.getters["todoModule/getAllTodos"];
    },
  },
  methods: {
    checkDone(selectedUid: string) {
      this.$store.commit("todoModule/checkDone", selectedUid);
    },
  },
});
</script>

<style>
.todo-list {
  width: 280px;
}
.todo {
  display: flex;
  justify-content: space-between;
  height: 28px;
  line-height: 28px;
}
.todo button {
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  text-align: center;
  color: red;
}
.todo button:hover {
  background: rgb(201, 201, 201);
}
.todo button.done {
  color: green;
}
</style>
