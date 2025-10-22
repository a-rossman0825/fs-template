import { logger } from "@/utils/Logger";
import { api } from "./AxiosService";
import { useExampleStore } from "@/stores/ExampleStore";
import { Example } from "@/models/Example";

const exampleStore = useExampleStore();

class ExampleService {
  
  async getAllExamples() {
    try { 
      const res = await api.get('/example');
      logger.log('Got Examples!', res.data);
      exampleStore.examples = res.data.map((e: Example) => new Example(e));
      
    } catch (err: any) {
      logger.error('ErrorMessage', err);
    }
  }
}

export const exampleService = new ExampleService();