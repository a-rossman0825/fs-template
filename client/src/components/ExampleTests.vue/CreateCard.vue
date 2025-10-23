<script lang="ts" setup>
import { exampleService } from '@/services/ExampleService.ts';

import { logger } from '@/utils/Logger.ts';
import { ref } from 'vue';


const exampleData = ref({
  exampleText: '',
})

async function getExamples() {
  try { 
    await exampleService.getAllExamples();
  } catch (err: any) {
    logger.error('ErrorMessage', err);
  }
}

async function createExample(){
  try { 
    await exampleService.createExample(exampleData.value);
    exampleData.value = {
      exampleText: '',
    };
  } catch (err: any) {
    logger.error('ErrorMessage', err);
  }
}


</script>


<template>
  <div class="card">
    <div class="card-header">
      <div class="row text-center h2 pt-3">
        <h1><i class="mdi mdi-pencil-outline"></i></h1>
      </div>
    </div>
    <div class="card-body text-start justify-content-center">
      <p class="h4">Create an Example</p>
      
      <form @submit.prevent="createExample()">
        <div class="form-floating mb-1">
          <input 
            type="text"
            class="form-control fs-5"
            name="exampleText"
            id="exampleText"
            placeholder="example text..."
            v-model="exampleData.exampleText"
            minlength="1"
            maxlength="25"
            required
          />
          <label for="exampleText" >Example text...</label>
        </div>
        <div class="d-flex justify-content-center">
          <button role="submit" class="mt-2 btn btn-primary">Create Example</button>
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