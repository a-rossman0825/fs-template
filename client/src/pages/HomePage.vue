<script lang="ts" setup>
import NavSideBar from '@/components/ExampleTests.vue/NavSideBar.vue';

</script>


<template>
  <section class="container-fluid">
    <div class="sidebar-wrapper">
      <NavSideBar />
    </div>
    <header>

    </header>
    <main>
      
    </main>
  </section>
</template>


<style lang="scss" scoped>

  main {
    padding-left: 150px;
  }

  .sidebar-wrapper {
    position: fixed;
    top: -2px;
    left: 0;
    width: 250px;
    height: 102%;
    border: 1px solid black;
    padding: 15px;
    background-color: var(--bs-dark);
    border-right: thin solid rgb(43, 48, 92);
  }
</style>