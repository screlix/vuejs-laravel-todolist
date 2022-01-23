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
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", CLIENT_ORIGIN);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }
    next();
});
