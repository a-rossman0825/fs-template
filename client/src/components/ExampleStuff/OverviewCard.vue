<script lang="ts" setup>

</script>


<template>
  <section class="card p-2 bg-dark">
    <div class="card-body text-light p-4 pb-4">
      <h3>Project Overview</h3>
    </div>
    <div class="row ms-2 text-light">
      <!-- SECTION Architecture overview -->
      <div class="col-md-4">
        <p class="h5">
          Architecture
        </p>
        <p>Modern full-stack architecture with clear separation between frontend and backend, enabling scalable and maintainable applications.</p>
      </div>
      <!-- !SECTION -->
      <!-- SECTION Auth overview -->
      <div class="col-md-4">
        <p class="h5">
          Authentication
        </p>
        <p>Secure authentication and authorization using Auth0 with JWT tokens for seamless user management and security.</p>
      </div>
      <!-- !SECTION -->
      <!-- SECTION Database overview -->
      <div class="col-md-4">
        <p class="h5">
          Database
        </p>
        <p>Robust data persistence with Entity Framework ORM and MySQL Database, ensuring reliable data management and relationships.</p>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

.card {
  border-radius: 15px;
  border: 1px solid #192e5fd2;
}

</style>