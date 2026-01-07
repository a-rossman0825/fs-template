import { logger } from "@/utils/Logger";
import { api } from "./AxiosService";
import { Account } from "@/models/Account";
import { useAuthStore } from "@/stores/AuthStore";

class AccountService {
  async getAccount() {
    const authStore = useAuthStore();
    try {
      const res = await api.get("/account");
      authStore.account = new Account(res.data);
    } catch (err: unknown) {
      logger.error("HAVE YOU STARTED YOUR SERVER YET???", err);
    }
  }
}

export const accountService = new AccountService();
