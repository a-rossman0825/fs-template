<script lang="ts" setup>
import { AuthService } from '@/services/AuthService.ts';
import { useAuthStore } from '@/stores/AuthStore';
import { Pop } from '@/utils/Pop.ts';
import { computed } from 'vue';


const authStore = useAuthStore();

const displayName = computed(() => {
  const name = authStore.account?.name;
    if (name) return name.includes('@') ? name.split('@')[0] : name;
    return "";
})


function login() {
  AuthService.loginWithRedirect();
}

async function logout() {
  const confirmed = await Pop.confirm('Log Out?', '', 'Log Me Out!', 'No Thanks!');
  if (!confirmed){
    return;
  } else {
    AuthService.logout();
  }
  
}

</script>


<template>
  <span>
    <button 
      v-if="!authStore.identity"
      class="btn text-green" 
      @click="login" 
    >
      Login
    </button>
    <div v-else>
      <div 
        v-if="authStore.account?.picture || authStore.identity?.picture" 
        class="d-flex justify-content-between"
      >
        <div class="d-inline-flex">
          <img 
            :src="authStore.account?.picture || authStore.identity?.picture" 
            :alt="authStore.account?.name || 'account photo'" 
            height="40" 
            class="user-img"
          >
          <p class="text-light mt-2 ms-2">
            {{ displayName }}
          </p>
        </div>
        <div>
          <button 
            role="button"
            class="account-btn me-2 fs-4" 
            @click="logout"
          >
            <i class="mdi mdi-chevron-up" />
          </button>
        </div>
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

  .account-btn {
    background-color: transparent;
    color: var(--bs-secondary);
    border: none;

    &:hover {
      color: var(--bs-light);
    }
  }
</style>