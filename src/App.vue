<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";
export default {
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => route.meta.layout),
    };
  },
  components: {
    MainLayout,
    LoginLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Inter", sans-serif;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
}
</style>
