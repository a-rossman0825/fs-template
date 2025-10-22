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
    <div class="py-5 card-body text-center justify-content-center">
      <h1>Test Your API</h1>
      <button @click="getExamples()" class="btn btn-success mt-2">Test</button>
      <div v-if="(exampleStore.examples.length >= 1) && testing == true">
        <ul v-for="example in exampleStore.examples" :key="`get-examples-id-${example.id}`">
          <li>id: {{ example.id }} text: {{ example.exampleText }}</li>
        </ul>
      </div>
      <div v-else-if="testing == true">
        <h5>Create an example to test!</h5>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>