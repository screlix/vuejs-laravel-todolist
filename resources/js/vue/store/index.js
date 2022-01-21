import vue from "vue";
import vuex from "vuex";
//import currentU from "./modules/firstm";
import createPersistedState from "vuex-persistedstate";
vue.use(vuex);
const PresiToken = createPersistedState({
    paths: ["token", "userid"],
});
export default new vuex.Store({
    state: {
        itemchanged: 0,
        sd: "hello",
        token: "",
        userid: "",
    },
    getters: {
        getitemv(state) {
            return state.sd;
        },
        getToken(state) {
            return state.token;
        },
        getLogg(state) {
            return state.loggedIn;
        },
        getuserid(state) {
            return state.userid;
        },
    },
    mutations: {
        setuserid(state, usi) {
            state.userid = usi;
        },
        increitem(state) {
            state.itemchanged = state.itemchanged + 1;
        },
        setToken(state, Token) {
            state.token = Token;
        },
    },
    actions: {},
    plugins: [createPersistedState(), PresiToken],
});
