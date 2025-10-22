<script lang="ts" setup>

import CreateCard from './CreateCard.vue';
import DeleteCard from './DeleteCard.vue';
import GetCard from './GetCard.vue';



</script>


<template>
  <section class="container border-black">
    <div class="row justify-content-center text-center">
      <h1>Test Your API Connection</h1>
      <h2>Create an example </h2>
      <div class="row">
        <!-- SECTION GET EXAMPLE -->
        <div class="col-4">
          <GetCard />
        </div>
        <!-- !SECTION -->
         <!-- SECTION CREATE EXAMPLE -->
        <div class="col-4">
          <CreateCard />
        </div>
        <!-- !SECTION -->
         <!-- SECTION DELETE EXAMPLE -->
        <div class="col-4">
          <DeleteCard />
        </div>
        <!-- !SECTION -->
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

</style>