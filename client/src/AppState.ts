import { reactive } from 'vue';
import { Identity } from '@bcwdev/auth0provider-client';
import { Account } from './models/Account';

export const AppState = reactive({
  identity: null as Identity | null,
  account: null as Account | null //user info from the database
});