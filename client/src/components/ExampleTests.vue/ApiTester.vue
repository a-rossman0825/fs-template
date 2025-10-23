<script lang="ts" setup>
import CreateCard from './CreateCard.vue';
import DeleteCard from './DeleteCard.vue';
import GetCard from './GetCard.vue';
import ListCard from './ListCard.vue';
import { useExampleStore } from '@/stores/ExampleStore.ts';

const exampleStore = useExampleStore();

</script>


<template>
  <section class="container border-black">
    <div class="row justify-content-center text-center">
      <h1>Test Your API Connection</h1>
      <div class="row mb-3">
        <!-- SECTION GET EXAMPLE -->
        <div class="col-12 col-md-4 mb-3 mb-md-0">
          <GetCard />
        </div>
        <!-- !SECTION -->
         <!-- SECTION CREATE EXAMPLE -->
        <div class="col-12 col-md-4 mb-3 mb-md-0">
          <CreateCard />
        </div>
        <!-- !SECTION -->
         <!-- SECTION DELETE EXAMPLE -->
        <div class="col-12 col-md-4">
          <DeleteCard />
        </div>
        <!-- !SECTION -->
      </div>
      <div v-if="exampleStore.examples.length >= 1" class="row">
        <ListCard />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

</style>