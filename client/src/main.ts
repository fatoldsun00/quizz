import { createApp } from "vue";
import { createPinia } from "pinia";
import http from './services/http'
import { AxiosKey } from './services/symbols'

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/animations.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide(AxiosKey, http)

app.mount("#app");
