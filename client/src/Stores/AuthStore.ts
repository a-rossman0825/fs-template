import type { Account } from "@/models/Account";
import type { Identity } from "@bcwdev/auth0provider-client";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    identity: null as Identity | null,
    account: null as Account | null,
  }),
});
