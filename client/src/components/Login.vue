<script lang="ts" setup>
import { AuthService } from '@/services/AuthService.ts';
import { useAuthStore } from '@/stores/AuthStore.ts';
import { ref } from 'vue';


const authStore = useAuthStore();
const account = ref(authStore.account);
const identity = ref(authStore.identity);

function login() {
  AuthService.loginWithRedirect();
}

function logout() {
  AuthService.logout();
}

</script>


<template>
  <span>
    <button class="btn text-green" @click="login" v-if="!identity">
      Login
    </button>
    <div v-else>
      <div v-if="account?.picture || identity?.picture">
        <img role="button" :src="account?.picture || identity?.picture" :alt="account?.name || 'account photo'" height="40" class="user-img" @click="logout"/>
      </div>
    </div>
  </span>
</template>


<style lang="scss" scoped>
  
  .user-img {
    height: 40px;
    width: 40px;
    border-radius: 100px;
    object-fit: cover;
    object-position: center;
  }
</style>