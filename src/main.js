import "./assets/main.css";

import { createPinia } from 'pinia'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(router);
app.use(pinia)

app.mount("#app");
