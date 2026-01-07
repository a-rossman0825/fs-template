<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const page = ref({
  name: route.name ? String(route.name) : "Dashboard",
  description: "",
});

watch(
  () => route.name,
  (newName) => {
    switch (newName) {
      case "Home":
        page.value.name = "Dashboard";
        page.value.description = "Project Template Overview";
        break;
      case "Docs":
        page.value.name = "Documentation";
        page.value.description = "Setup and Integration Guide";
        break;
      case "Example":
        page.value.name = "API Explorer";
        page.value.description = "Test Backend Connection";
        break;
      case "Faq":
        page.value.name = "Frequently Asked Questions";
        page.value.description = "Common Issues & Solutions";
        break;
      default:
        page.value.name = newName ? String(newName) : "Dashboard";
        page.value.description = "Stack and Project Purpose";
    }
  }
);
</script>

<template>
  <div class="container-fluid text-light pt-3">
    <div class="d-flex justify-content-between ms-3 align-items-center pb-3">
      <div class="">
        <h3 class="h3 mb-0">
          {{ page.name }}
        </h3>
        <h4 class="h5 text-secondary">
          {{ page.description }}
        </h4>
      </div>
      <div class="d-flex justify-content-around px-2">
        <button 
          class="settings-btn" 
          title="Notifications"
        >
          <i class="mdi mdi-bell fs-5 me-3" />
        </button>
        <button 
          class="settings-btn" 
          title="Settings"
        >
          <i class="mdi mdi-cog fs-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings-btn {
  border: none;
  background-color: transparent;
  color: var(--bs-secondary);
}
</style>
