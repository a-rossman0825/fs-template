import { defineStore } from "pinia";
import type { Example } from "@/models/Example";

export const useExampleStore = defineStore("example", {
  state: () => ({
    example: null as Example | null,
    examples: [] as Example[],

    selectedExampleId: null as number | null,
  }),
});
