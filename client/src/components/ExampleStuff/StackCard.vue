<script lang="ts" setup>

defineProps<{ tech: {
  name: string;
  icon: string;
  color: string;
  version: string;
  link: string;
  }
}>();

</script>


<template>
  <div class="card pe-4 mb-3">
    <a 
      :href="tech.link" 
      target="_blank" 
      rel="noopener" 
      class="card-body p-0 px-2 d-flex align-items-center justify-content-between" 
      :class="`hover-${ tech.color }`"
    >
      <div class="d-flex align-items-center justify-content-start gap-3">
        <div 
          class="badge text-center rounded" 
          :class="`bg-${ tech.color }`"
        >
          <i 
            class="mdi text-light fs-4" 
            :class="tech.icon" 
          /> 
        </div>
        <p class="text-light pt-3">
          {{ tech.name }}
        </p>
      </div>
      <div>
        <p 
          class="pt-3 pe-1" 
          :class="`text-${ tech.color }`"
        >
          {{ tech.version }}
        </p>
      </div>
    </a>
  </div>
</template>


<style lang="scss" scoped>

a {
  text-decoration: none;
}

.card {
  
  background-color: var(--bs-dark);
}
.card-body {
  border: 1px solid transparent;
  background-color: #162038;
  border-radius: 5px;
  transition: all .4s ease-in-out;

  &:hover {
    cursor: pointer;
  }
}

.badge {
  width: 35px;
  height: 35px;
  transition: transform 0.3s ease-in-out;
}

//hover effect for Stack Cards
.hover-info:hover {
    border-color: var(--bs-info);
}
.hover-success:hover {
    border-color: var(--bs-success);
}
.hover-purple:hover {
    border-color: var(--bs-purple);
}
.hover-danger:hover {
    border-color: var(--bs-danger);
}
.hover-warning:hover {
      border-color: var(--bs-warning);
}

</style>