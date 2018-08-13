import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import router from "@/router";
import "@/mock/mock";
import store from "@/store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.BASE_URL = "/api";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
