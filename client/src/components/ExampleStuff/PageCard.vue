<script lang="ts" setup>
import { RouterLink } from 'vue-router';


defineProps<{ page: {
  name: string;
  description: string;
  icon: string;
  color: string;
  domain: string;
  }
}>();

</script>


<template>
  <RouterLink :to="{ name: `${ page.domain }`}">
    <div 
      class="card bg-dark" 
      :class="`hover-${ page.color }`"
    >
      <div class="card-body ps-4 ms-2">
        <div 
          :class="`bg-${ page.color }`" 
          class="badge text-center pt-1 rounded"
        >
          <i 
            class="mdi text-light fs-2" 
            :class="page.icon" 
          />
        </div>
        <p class="text-light h4 mt-3">
          {{ page.name }}
        </p>
        <p class="text-secondary fw-bold">
          {{ page.description }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped>

a {
  text-decoration: none;
}

.card {
  width: 100%;
  max-width: 330px;
  min-height: 220px;
  border-color: #192e5fd2;
  transition: all .4s ease-in-out;
  border-radius: 15px;

  &:hover {

    // transform: scale(1.06);

      .badge {
        transform: scale(1.10);
        
      }
  }
}

.badge {
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease-in-out;
}

//hover effects for PageCard and StackCard Components
.hover-info {
    &:hover {
      border-color: var(--bs-info);
    }
}
.hover-success {
    &:hover {
      border-color: var(--bs-success);
    }
}
.hover-purple {
    &:hover {
      border-color: var(--bs-purple);
    }
}
.hover-danger {
    &:hover {
      border-color: var(--bs-danger);
    }
}


</style>