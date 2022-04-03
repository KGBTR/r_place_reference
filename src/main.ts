import { createApp } from "vue";
import App from "@/App.vue";

import "@/assets/main.css";

import { Tooltip } from "@/plugins";

createApp(App).use(Tooltip).mount("[data-v-app]");
