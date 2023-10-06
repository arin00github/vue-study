<template>
  <div class="shop-page">
    <ShopSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShopSection from "@/components/ShopSection.vue";
export default defineComponent({
  name: "ShopView",
  components: { ShopSection },
});
</script>

<style>
.shop-page {
  width: 100%;
}
</style>
