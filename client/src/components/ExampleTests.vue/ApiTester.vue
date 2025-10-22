<script lang="ts" setup>
import { Example } from '@/models/Example.ts';
import { exampleService } from '@/services/ExampleService.ts';
import { useExampleStore } from '@/stores/ExampleStore.ts';
import { logger } from '@/utils/Logger.ts';

const exampleStore = useExampleStore();

let examples = exampleStore.examples;
async function getExample() {
  try { 
    await exampleService.getAllExamples();
  } catch (err: any) {
    logger.error('ErrorMessage', err);
  }
}

</script>


<template>
  <section class="container border-black">
    <div class="row justify-content-center text-center">
      <h1>Test Your API Connection</h1>
      <h2>Create an example </h2>
      <div class="row">
        <!-- SECTION CREATE EXAMPLE -->
        <div class="col-4">
          
        </div>
        <!-- !SECTION -->
         <!-- SECTION GET EXAMPLES -->
        <div class="col-4">
          <button @click="getExample()">Get Examples</button>
          <ul>
            <div v-for="ex in exampleStore.examples" :key="ex.id">{{ ex.exampleText }}</div>
          </ul>
        </div>
        <!-- !SECTION -->
         <!-- SECTION DELETE EXAMPLE -->
        <div class="col-4">

        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

</style>