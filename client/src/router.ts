import { createRouter, createWebHashHistory } from "vue-router";


function loadPage(page: any) {
  return () => import(`./pages/${page}.vue`);
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: loadPage('HomePage')
  }
];

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

//NOTE to self: finish all necessary file set up, then finish Pinia setup/stores