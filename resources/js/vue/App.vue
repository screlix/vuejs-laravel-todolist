<template>
    <div class="">
        <header>
            <ul>
                <li id="log">
                    <router-link to="/">Todo List</router-link>
                </li>
                <nav>
                    <li>
                        <router-link class="" to="/sign"> Sign in </router-link>
                    </li>
                    <li>
                        <button class="" @click="logout()">Logout</button>
                    </li>
                </nav>
            </ul>
        </header>
        <div id="itemConte" class="">
            <router-view />
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: "app",
    data() {
        return {
            token: "",
        };
    },
    computed: {
        ...mapGetters({
            tokenn: "getToken",
        }),
    },
    methods: {
        logout() {
            axios
                .post("./api/logout")
                .then((res) => {
                    this.$store.commit("setToken", "");
                    this.$store.commit("setuserid", "");
                    window.location.href = "/";
                })
                .catch((res) => {
                    console.log(res);
                });
        },
    },
    watch: {
        "this.tokenn": function () {
            this.$store.commit("setLogg");
        },
    },
};
</script>

<style lang="scss">
body {
    margin: 0px !important;
    background-color: rgb(255, 255, 255) !important;
    height: 100vh;
    box-sizing: border-box;
}
#app {
    padding: 0px !important;
    max-width: 100vw;
    background-color: rgb(255, 255, 255) !important;
}
#itemConte {
    margin: auto;
    transform: translateY(-150px);
    border-radius: 6.6px;
    width: 40%;
    background: rgb(255, 255, 255);
}
header {
    margin: 0 !important;

    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        li#log {
            flex: 0.8;
            a {
                font-weight: bold;
            }
        }
        nav {
            li {
                outline: solid 1px white;
                button {
                    appearance: none;
                    background: transparent;
                    outline: none;
                    border: none;
                    color: rgb(255, 255, 255);
                    font-size: 20px;
                }
            }
        }
        li {
            padding: 0.4rem 1rem;
            display: inline-block;
            margin: 0.5rem 1rem;
            list-style-type: none;

            a {
                &:hover {
                    color: white;
                    cursor: pointer;
                    pointer-events: auto;
                }
                text-decoration: none;
                color: white;
                font-size: 20px;
            }
        }
    }
    background: url("../../../public/images/3076836.jpeg");
    margin: 0px !important;
    /*background: linear-gradient(to top, black, red);*/
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 350px;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
