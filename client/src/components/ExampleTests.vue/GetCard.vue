<script lang="ts" setup>
import { exampleService } from '@/services/ExampleService.ts';
import { useExampleStore } from '@/stores/ExampleStore.ts';
import { logger } from '@/utils/Logger.ts';
import { ref } from 'vue';

const exampleStore = useExampleStore();

async function getExamples(){
  try { 
    await exampleService.getAllExamples();
    testing.value = true;
  } catch (err: any) {
    logger.error('ErrorMessage', err);
  }
}

let testing = ref(false);

</script>


<template>
  <div class="card">
    <div class="card-header pt-4">
      <h1 class="mb-3"><i class="mdi mdi-rocket-launch"></i></h1>
    </div>
    <div class="py-5 card-body text-center justify-content-center">
      <p class="h4">Test Your API</p>
      <button @click="getExamples()" class="btn btn-success mt-2">Test</button>
      <div v-if="(exampleStore.examples.length < 1) && testing == true">
        <h5>Create an example to test!</h5>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

  .card {
    height: 300px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.411);

    transition: all .4s ease-in-out;

    &:hover {
      box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.596);
    }
  }

</style>