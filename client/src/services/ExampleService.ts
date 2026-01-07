import { logger } from "@/utils/Logger";
import { api } from "./AxiosService";
import { useExampleStore } from "@/stores/ExampleStore";
import { Example } from "@/models/Example";

const exampleStore = useExampleStore();

class ExampleService {
  async getAllExamples() {
    const res = await api.get("/example");
    logger.log("Got Examples!", res.data);
    exampleStore.examples = res.data.map((e: Example) => new Example(e));
  }

  async createExample(data: Partial<Example>) {
    const res = await api.post("/example", data);
    const example = new Example(res.data);
    exampleStore.examples.push(example);
  }

  async deleteExample(exampleId: number) {
    const res = await api.delete(`/example/${exampleId}`);
    logger.log("Deleted Example", res.data);
    const i = exampleStore.examples.findIndex((e) => e.id == exampleId);
    exampleStore.examples.splice(i, 1);
  }
}

export const exampleService = new ExampleService();
