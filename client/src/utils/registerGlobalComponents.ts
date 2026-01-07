import type { App } from "vue";
import type { Component } from "vue";
export async function registerGlobalComponents(root: App) {
  const components = import.meta.glob("../components/*.vue");
  for (const fileName in components) {
    const componentModule = (await components[fileName]!()) as {
      default: Component;
    };
    if (componentModule && componentModule.default) {
      const componentName = fileName
        .substring(fileName.lastIndexOf("/") + 1)
        .replace(/\.\w+$/, "");
      root.component(componentName, componentModule.default);
    }
  }
}
