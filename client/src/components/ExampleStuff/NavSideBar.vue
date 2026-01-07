<script lang="ts" setup>
import { RouterLink, useRoute } from "vue-router";
import Login from "../LoginButton.vue";

const route = useRoute();

function isActive(name: string) {
  if (name === "Home") return route.path === "/" || route.hash === "#/";
  return (
    route.path.toLowerCase().includes(name.toLowerCase()) ||
    route.hash.toLowerCase().includes(name.toLowerCase())
  );
}
</script>

<template>
  <!-- SECTION Nav Logo -->
  <div class="mt-2 d-inline-flex align-items-start">
    <RouterLink :to="{ name: 'Home' }">
      <button 
        title="Return to Dashboard"
        class="logo-btn mt-2"
      >
        <i class="mdi mdi-layers-triple text-white fs-4" />
      </button>
    </RouterLink>
    <div class="ms-3">
      <h1 class="h3 m-0 text-light">
        FullStack
      </h1>
      <h2 class="fs-6 text-secondary">
        Project Template
      </h2>
    </div>
  </div>
  <!-- !SECTION -->
  <!-- SECTION Nav Links -->
  <nav class="mt-3">
    <RouterLink :to="{ name: 'Home' }">
      <div
        class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded"
        :class="{ 'nav-link-active': isActive('Home') }"
      >
        <p class="h5 ms-1">
          <i class="mdi mdi-home" />
        </p>
        <p class="h5 ms-2">
          Dashboard
        </p>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'Docs' }">
      <div
        class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded"
        :class="{ 'nav-link-active': isActive('Documentation') }"
      >
        <p class="h5 ms-1">
          <i class="mdi mdi-notebook-multiple" />
        </p>
        <p class="h5 ms-2">
          Documentation
        </p>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'About' }">
      <div
        class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded"
        :class="{ 'nav-link-active': isActive('about') }"
      >
        <p class="h5 ms-1">
          <i class="mdi mdi-information" />
        </p>
        <p class="h5 ms-2">
          About
        </p>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'Example' }">
      <div
        class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded"
        :class="{ 'nav-link-active': isActive('api_explorer') }"
      >
        <p class="h5 ms-1">
          <i class="mdi mdi-flask" />
        </p>
        <p class="h5 ms-2">
          Test API
        </p>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'Faq' }">
      <div
        class="nav-link mb-2 d-inline-flex ps-2 pe-4 pt-2 rounded"
        :class="{ 'nav-link-active': isActive('FAQ') }"
      >
        <p class="h5 ms-1">
          <i class="mdi mdi-frequently-asked-questions" />
        </p>
        <p class="h5 ms-2">
          FAQ
        </p>
      </div>
    </RouterLink>
  </nav>
  <!-- !SECTION -->
  <div class="account-info border-top-blue">
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
  background: linear-gradient(
    172deg,
    rgba(47, 182, 194, 1) 0%,
    rgba(47, 103, 194, 1) 20%,
    rgba(77, 29, 222, 1) 46%,
    rgba(105, 35, 196, 1) 51%,
    rgba(77, 29, 222, 1) 56%,
    rgba(15, 93, 171, 1) 88%,
    rgba(47, 182, 194, 1) 100%
  );
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

.nav-link-active {
  width: 220px;
  color: var(--bs-light);
  background-color: var(--bs-info);
}

.account-info {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 250px;
  height: 80px;
  padding-top: 20px;
  padding-left: 15px;
}
</style>
