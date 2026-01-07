<script lang="ts" setup>
import HeroCard from "@/components/ExampleStuff/HeroCard.vue";
import OverviewCard from "@/components/ExampleStuff/OverviewCard.vue";
import PageCard from "@/components/ExampleStuff/PageCard.vue";
import StackCard from "@/components/ExampleStuff/StackCard.vue";

const pages = [
  {
    name: "Documentation",
    description: "Complete Setup and Integration Guide and API Documentation",
    icon: "mdi-notebook-multiple",
    color: "info",
    domain: "Docs",
  },
  {
    name: "Test API",
    description: "Interactive API testing",
    icon: "mdi-flask",
    color: "success",
    domain: "Example",
  },
  {
    name: "About",
    description: "More About the Project Architecture",
    icon: "mdi-information",
    color: "purple",
    domain: "About",
  },
  {
    name: "FAQ",
    description: "Frequently Asked Questions",
    icon: "mdi-head-question",
    color: "danger",
    domain: "Faq",
  },
];

const frontTechs = [
  {
    name: "Vue.js",
    icon: "mdi-vuejs",
    color: "success",
    version: "v3.4.3",
    link: "https://vuejs.org/",
  },
  {
    name: "TypeScript",
    icon: "mdi-language-typescript",
    color: "info",
    version: "v5.1.0",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Pinia",
    icon: "mdi-fruit-pineapple",
    color: "warning",
    version: "v3.0.3",
    link: "https://pinia.vuejs.org/",
  },
  {
    name: "bootstrap",
    icon: "mdi-bootstrap",
    color: "purple",
    version: "v5.3.3",
    link: "https://getbootstrap.com/",
  },
  {
    name: "Auth0",
    icon: "mdi-shield-half-full",
    color: "danger",
    version: "Latest",
    link: "https://www.auth0.com",
  },
];

const backTechs = [
  {
    name: "C#/.NET",
    icon: "mdi-language-csharp",
    color: "purple",
    version: "v9.0.9",
    link: "https://dotnet.microsoft.com/en-us/languages/csharp",
  },
  {
    name: "Entity Framework",
    icon: "mdi-database",
    color: "info",
    version: "v8.0.0",
    link: "https://learn.microsoft.com/en-us/ef/core/",
  },
  {
    name: "MySQL",
    icon: "mdi-file-cabinet",
    color: "danger",
    version: "v8.0.4",
    link: "https://www.mysql.com/",
  },
  {
    name: "REST API",
    icon: "mdi-api",
    color: "success",
    version: "RESTful",
    link: "https://restfulapi.net/",
  },
];
</script>

<template>
  <!-- SECTION Hero Card-->
  <main class="container pt-3">
    <div class="pb-3 mb-2">
      <HeroCard />
    </div>
    <!-- !SECTION -->
    <!-- SECTION Page Cards -->
    <div class="row justify-content-center">
      <PageCard
        v-for="page in pages"
        :key="page.name"
        :page
        class="col-12 col-md-6 col-xl-3 d-flex justify-content-center mb-4"
      />
    </div>
    <!-- !SECTION -->
    <!-- SECTION Stack Cards -->
    <div class="row justify-content-center mb-4">
      <!-- NOTE Front End Card -->
      <section class="col-12 col-md-6">
        <div class="stack-card">
          <div class="card-body ps-4 py-3">
            <p class="h3 text-light">
              <span>
                <i class="mdi mdi-desktop-classic fs-3" />
              </span>
              Frontend Stack
            </p>
            <!-- NOTE STACK CARDS -->
            <StackCard
              v-for="tech in frontTechs"
              :key="`front-end-tech-name-${tech.name}`"
              :tech="tech"
            />
          </div>
        </div>
      </section>
      <!-- NOTE Back End Card -->
      <section class="col-12 col-md-6">
        <div class="stack-card">
          <div class="card-body ps-4 py-3">
            <p class="h3 text-light">
              <span>
                <i class="mdi mdi-desktop-classic fs-3" />
              </span> Backend Stack
            </p>
            <!-- NOTE STACK CARDS -->
            <StackCard
              v-for="tech in backTechs"
              :key="`back-end-tech-name-${tech.name}`"
              :tech="tech"
            />
          </div>
        </div>
      </section>
    </div>
    <!-- !SECTION -->
    <!-- SECTION Template Overview -->
    <div class="pb-3 mb-2">
      <OverviewCard />
    </div>
    <!-- !SECTION -->
  </main>
</template>

<style lang="scss" scoped>
.stack-card {
  background-color: var(--bs-dark);
  border-radius: 10px;
  border: 1px solid #192e5fd2;
  height: 450px;
}
</style>
