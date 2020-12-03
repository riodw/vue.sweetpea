import Vue from "vue";
// router
import VueRouter from "vue-router";
// vue bootstrap
import { BootstrapVue } from "bootstrap-vue";

// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// lodash
import VueLodash from "vue-lodash";
// charts
import VueApexCharts from "vue-apexcharts";

// components
import App from "./App.vue";

import router from "./router";

Vue.config.productionTip = false;

// middle
// Vue.use(require("vue-moment"));
// Vue.use(VueAxios, axios);
Vue.use(VueLodash);
Vue.use(VueRouter);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

// components
// Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
Vue.component("apexchart", VueApexCharts);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
