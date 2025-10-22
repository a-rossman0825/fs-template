<script lang="ts" setup>
import { AuthService } from '@/services/AuthService.ts';
import { useAuthStore } from '@/stores/AuthStore.ts';


const authStore = useAuthStore();


function login() {
  AuthService.loginWithRedirect();
}

function logout() {
  AuthService.logout();
}

</script>


<template>
  <span>
    <button class="btn text-green" @click="login" v-if="!authStore.identity">
      Login
    </button>
    <div v-else>
      <div v-if="authStore.account?.picture || authStore.identity?.picture">
        <img role="button" :src="authStore.account?.picture || authStore.identity?.picture" :alt="authStore.account?.name || 'account photo'" height="40" class="user-img" @click="logout"/>
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