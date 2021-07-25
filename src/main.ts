import { createApp } from "vue";
import App from "./App.vue";
import { elementUI } from "@/plugins/elementUI";
import router from "@/router";
import myStore from "@/store";
const app = createApp(App);

app.use(router);
app.use(myStore);
elementUI(app);
app.mount("#app");
