import { createApp } from "vue";
import App from "./App.vue";

import "./styles/index.css";

import store from './stores/index';






/* add icons to the library */
// library.add(faUserSecret)

import router from "./router";




const app = createApp(App);


app.use(router);
app.use(store);
app.mount("#app");
