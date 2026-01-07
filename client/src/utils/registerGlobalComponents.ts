
export async function registerGlobalComponents(root: any) {
  const components = import.meta.glob("../components/*.vue");
  for (const fileName in components) {
    const componentModule = (await components[fileName]!()) as { default: any };
    if (componentModule && componentModule.default) {
      const componentName = fileName
        .substring(fileName.lastIndexOf("/") + 1)
        .replace(/\.\w+$/, "");
      root.component(componentName, componentModule.default);
    }
  }
}