import { createRouter, createWebHashHistory } from "vue-router";

function loadPage(page: string) {
  return () => import(`./pages/${page}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadPage("HomePage"),
  },
  {
    path: "/about",
    name: "About",
    component: loadPage("AboutPage"),
  },
  {
    path: "/documentation",
    name: "Docs",
    component: loadPage("DocPage"),
  },
  {
    path: "/api_explorer",
    name: "Example",
    component: loadPage("ExamplePage"),
  },
  {
    path: "/FAQ",
    name: "Faq",
    component: loadPage("FaqPage"),
  },
];

export const router = createRouter({
  linkActiveClass: "router-link-active",
  linkExactActiveClass: "router-link-exact-active",
  history: createWebHashHistory(),
  routes,
});
