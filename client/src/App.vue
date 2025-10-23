<script setup>
import { RouterView } from 'vue-router';
import NavSideBar from './components/ExampleStuff/NavSideBar.vue';
import NavTopBar from './components/ExampleStuff/NavTopBar.vue';

</script>

<template>
<div class="sidebar-wrapper border-right-blue">
  <NavSideBar />
</div>
<div class="topbar-wrapper border-bottom-blue">
  <NavTopBar />
</div>
<main class="body-bg">
  <RouterView />
</main>

</template>

<style lang="scss">
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