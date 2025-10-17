import { logger } from "@/utils/Logger";
import { api } from "./AxiosService";
import { AppState } from "@/AppState";
import { Account } from "@/models/Account";


class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account');
      AppState.account = new Account(res.data);
    } catch (err: any) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err);
    }
  }
}

export const accountService = new AccountService();