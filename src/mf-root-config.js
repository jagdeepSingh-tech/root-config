import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mf/canvas-ui",
  app: () => import("//localhost:8081/mf-canvas-ui.js"),
  activeWhen: (location) => true
});

registerApplication({
  name: "@mf/form-builder",
  app: () => import("//localhost:8082/mf-form-builder.js"),
  activeWhen: ["/form-builder"]
});

registerApplication({
  name: "@mf/form-viewer",
  app: () => import("//localhost:8083/mf-form-viewer.js"),
  activeWhen: ["/form-viewer"]
});

start();
