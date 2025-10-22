import { logger } from "@/utils/Logger";
import { api } from "./AxiosService";


class ExampleService {
  
  async getAllExamples() {
    try { 
      const res = await api.get('./examples');
      
    } catch (err: any) {
      logger.error('ErrorMessage', err);
    }
  }
}