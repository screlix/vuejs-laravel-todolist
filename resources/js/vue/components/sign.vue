<template>
    <div class="p-4 sign">
        <h2 class="text-center">Sign in</h2>
        <div class="bg-light p-4 rounded">
            <div class="form-group mb-3">
                <label for="" class="mb-2">Email Adress </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    v-model="email"
                />
            </div>
            <div class="form-group mb-3">
                <label for="" class="mb-2">Password </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    v-model="password"
                />
            </div>
            <button
                @click="login()"
                type="submit"
                class="btn btn-primary form-control mb-2"
            >
                Login
            </button>
            <div class="col-12 text-center">
                <label
                    >Don't have an account?
                    <router-link to="/register"
                        >Register Now!</router-link
                    ></label
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "sign",
    data() {
        return {
            email: "",
            password: "",
            token: "",
            userid: "",
        };
    },
    methods: {
        login() {
            axios
                .post("/api/login", {
                    email: this.email,
                    password: this.password,
                })
                .then((data) => {
                    this.token = data.data.token;
                    //using presisted vuex :
                    this.$store.commit("setToken", this.token);
                    window.location.href = "/";
                    this.userid = data.data.user.id;
                    this.$store.commit("setuserid", this.userid);
                })
                .catch((res) => {
                    console.log(res);
                });
        },
    },
};
</script>

<style></style>
