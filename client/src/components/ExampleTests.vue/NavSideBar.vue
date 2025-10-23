<script lang="ts" setup>
import Login from '../Login.vue';


</script>


<template>
    <!-- SECTION Nav Logo -->
    <div class="mt-2 d-inline-flex align-items-start">
      <button class="logo-btn mt-2"><i class="mdi mdi-layers-triple text-white fs-4"></i></button>
      <div class="ms-3">
        <h1 class="h3 m-0 text-light">FullStack</h1>
        <p class="text-secondary fw-light">Project Template</p>
      </div>
    </div>
    <!-- !SECTION -->
    <!-- SECTION Nav Links -->
    <div class="mt-3">
      <div class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded">
        <p class="h5 ms-1"><i class="mdi mdi-home"></i></p>
        <p class="h5 ms-2">Dashboard</p>
      </div>
      <div class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded">
        <p class="h5 ms-1"><i class="mdi mdi-notebook-multiple"></i></p>
        <p class="h5 ms-2">Documentation</p>
      </div>
      <div class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded">
        <p class="h5 ms-1"><i class="mdi mdi-information"></i></p>
        <p class="h5 ms-2">About</p>
      </div>
      <div class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded">
        <p class="h5 ms-1"><i class="mdi mdi-flask"></i></p>
        <p class="h5 ms-2">Test API</p>
      </div>
      <div class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded">
        <p class="h5 ms-1"><i class="mdi mdi-head-question"></i></p>
        <p class="h5 ms-2">FAQ</p>
      </div>
    </div>
    <!-- !SECTION -->
    <div class="account-info">
      <Login />
    </div>
</template>


<style lang="scss" scoped>
  .logo-btn {
    border-radius: 20%;
    border: none;
    width: 40px;
    height: 40px;
    background: #2fb6c2;
    background: linear-gradient(172deg,rgba(47, 182, 194, 1) 0%, rgba(47, 103, 194, 1) 20%, rgba(77, 29, 222, 1) 46%, rgba(105, 35, 196, 1) 51%, rgba(77, 29, 222, 1) 56%, rgba(15, 93, 171, 1) 88%, rgba(47, 182, 194, 1) 100%);
    padding: 3px;
  }

  .nav-link {
    width: 220px;
    color: var(--bs-secondary);

    &:hover {
      background-color: var(--bs-primary);
      color: var(--bs-light);
      cursor: pointer;
    }
  }

  .account-info {
    position: fixed;
    bottom: 0px;
    left: 0px;
    border: 1px solid black;
    width: 250px;
    height: 80px;
    padding-top: 20px;
    padding-left: 15px;
  }

</style>