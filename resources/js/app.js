require("./bootstrap");

import "bootstrap";
import Vue from "vue";
import VueRouter from "vue-router";

import router from "./vue/router/index";
import store from "./vue/store/index";
import App from "./vue/app.vue";
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    store,
    router,
    components: { App },
});
