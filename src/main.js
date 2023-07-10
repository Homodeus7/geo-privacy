/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import "@/assets/index.css";
import App from "./App.vue";
import VueApexCharts from "vue3-apexcharts";
// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
app.use(VueApexCharts);
