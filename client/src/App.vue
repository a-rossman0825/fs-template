<script setup>
import { RouterView } from "vue-router";
import NavSideBar from "./components/ExampleStuff/NavSideBar.vue";
import NavTopBar from "./components/ExampleStuff/NavTopBar.vue";
</script>

<template>
  <div class="sidebar-wrapper border-right-blue">
    <!--NOTE Remove NavSideBar tag & "main" scss selector to remove padding-left -->
    <NavSideBar />
  </div>
  <div class="topbar-wrapper border-bottom-blue">
    <!-- NOTE Remove "padding left" in ".topbar-wrapper" scss selector after you delete the sidebar tag -->
    <NavTopBar />
  </div>
  <main class="body-bg">
    <RouterView />
  </main>
</template>

<style lang="scss">
//Adds padding to app so content is not hidden by NavSideBar
main {
  padding-left: 250px;
}

.sidebar-wrapper {
  position: fixed;
  top: -2px;
  left: 0;
  width: 250px;
  height: 102%;
  padding: 15px;
  background-color: var(--bs-dark);
}

.topbar-wrapper {
  padding-left: 250px;
  background-color: var(--bs-dark);
}
</style>
