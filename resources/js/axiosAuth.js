import store from "../js/vue/store/index";

var access_token = store.state.token;
axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
