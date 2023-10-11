<template>
  <h4>{{ title }}</h4>
</template>

<script lang="ts">
//defineProps(["title"]);
import { defineComponent } from "vue";
export default defineComponent({
  props: ["title"],
  //   setup(props) {
  //     console.log("props");
  //   },
});
</script>
