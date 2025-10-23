<script lang="ts" setup>
import { exampleService } from '@/services/ExampleService.ts';
import { useExampleStore } from '@/stores/ExampleStore.ts';
import { logger } from '@/utils/Logger.ts';
import { ref, watch } from 'vue';

const exampleStore = useExampleStore();
let exToDelete = ref(exampleStore.selectedExampleId ?? 0);

watch(() => exampleStore.selectedExampleId, (newId) => {
  exToDelete.value = newId ?? 0;
}) 

async function deleteExample(){
  
  try { 
    const exId = exToDelete.value;
    await exampleService.deleteExample(exId);
  } catch (err: any) {
    logger.error('ErrorMessage', err);
  }
}

</script>


<template>
  <div class="card">
    <div class="card-header pt-4">
      <h1 class="mb-3"><i class="mdi mdi-delete"></i></h1>
    </div>
    <div class="card-body text-start">
      <p class="h4">Delete Example</p>
      <form @submit.prevent="deleteExample()" class="">
        <div class="form-floating mb-3">
          <input v-model="exToDelete" type="number" name="exampleId" id="exampleId" class="form-control"></input>
          <label for="exampleId" min="1" max="100">example ID</label>
        </div>
        <div class="text-center">
          <button role="submit" class="mt-2 btn btn-danger">Delete</button>
        </div>
      </form>
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