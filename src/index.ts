import Demo from "./Demo/index.vue";

const components = [Demo];

const install = (Vue: any) => {
  if ((install as any).installed) return;
  (install as any).installed = true;
  components.forEach((component: any) => {
    Vue.component(component.extendOptions.name, component);
  });
};

if (typeof window !== "undefined" && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  install,
};
