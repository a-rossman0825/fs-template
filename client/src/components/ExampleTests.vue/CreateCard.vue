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
    <div class="card-body text-center justify-content-center">
      <h1>Create an Example</h1>
      
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
          <label for="exampleText" class="form-label">Example text...</label>
        </div>
        <button role="submit" class="btn btn-primary">Create Example</button>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>