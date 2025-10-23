<script lang="ts" setup>
import { useExampleStore } from '@/stores/ExampleStore.ts';


const exampleStore = useExampleStore();

</script>


<template>
  <div class="container border">
    <div class="d-flex justify-content-around p-3 flex-wrap">
      <div v-for="e in exampleStore.examples" :key="`example-badge-id-${e.id}`" class="badge" @click="exampleStore.selectedExampleId = e.id">Id: {{ e.id }} Text: {{ e.exampleText }}</div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

  .container {
    height: auto;
    border-radius: 5px;
  }

  .badge {
    border: 1px solid blue;
    padding: 5px;
    border-radius: 100px;
    background-color: lightblue;
    color: black;
    box-shadow: 2px 2px 5px rgba(128, 128, 128, 0.795);
    transition: all .3s ease-in-out;

    &:hover {
      cursor: pointer;
      box-shadow: 3px 3px 7px gray;
    }
  }

</style>