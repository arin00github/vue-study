<template>
  <div>
    <h1>Register View Page</h1>
    <RegisterSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterSection from "@/components/RegisterSection.vue";
export default defineComponent({
  name: "RegisterView",
  components: { RegisterSection },
});
</script>
