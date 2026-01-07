<script lang="ts" setup></script>

<template>
  <div class="card p-2">
    <div class="card-body text-light p-4">
      <h4 class="h1 pb-2">
        Full Stack Project Template
      </h4>
      <p class="h5 fw-light pb-4">
        A comprehensive, production-ready template combining modern frontend and
        backend technologies for rapid application development.
      </p>
      <div class="justify-content-start d-flex gap-3">
        <button class="start-btn">
          Get Started
        </button>
        <button class="github-btn">
          View on GitHub
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
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
  border-radius: 15px;
  border: transparent;
}

.card-body {
  text-shadow: 1px 1px 3px var(--bs-dark);
}

button {
  width: 150px;
  height: 50px;
  border: transparent;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}

.start-btn {
  color: #4f1edd;
  background-color: var(--bs-light);

  transition: all 0.4s ease-in-out;

  &:hover {
    color: #2fb6c2;
    background-color: var(--bs-dark);
  }
}

.github-btn {
  background-color: transparent;
  border: 1px solid var(--bs-light);
  color: var(--bs-light);

  &:hover {
    color: var(--bs-dark);
    background-color: var(--bs-light);
  }
}
</style>
