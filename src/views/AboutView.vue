<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <el-button>element button</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { ElButton } from "element-plus";
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutView",
  components: {
    ElButton,
  },
});
</script>
