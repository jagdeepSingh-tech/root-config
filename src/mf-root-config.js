import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mf/auth-app",
  app: () => import("http://localhost:8080/mf-auth-app.js"),
  activeWhen: ["/"]
});
start();
