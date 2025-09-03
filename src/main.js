import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import WanLing from "wanling";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(WanLing);
app.mount("#app");
