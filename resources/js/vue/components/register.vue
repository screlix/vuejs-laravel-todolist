<template>
    <div class="p-4 bg-white rounded register">
        <h2 class="text-center">Register</h2>
        <div class="bg-light p-3">
            <div class="form-group mb-3">
                <label for="" class="mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                    v-model="name"
                    class="form-control"
                />
            </div>
            <div class="form-group mb-3">
                <label for="" class="mb-2">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    v-model="email"
                    placeholder="Enter Email"
                    class="form-control"
                />
            </div>
            <div class="form-group mb-3">
                <label for="" class="mb-2">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    placeholder="Enter Password"
                    class="form-control"
                />
            </div>
            <div class="form-group mb-3">
                <label for="" class="mb-2">Confirm Password</label>
                <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="Enter Password"
                    class="form-control"
                    v-model="password_confirmation"
                />
            </div>
            <button
                @click="register()"
                type="button"
                class="btn btn-primary form-control mb-2"
            >
                Register
            </button>
            <div class="col-12 text-center mb-3">
                <label
                    >Already have an account?
                    <router-link to="/sign">Login Now!</router-link></label
                >
            </div>
            <ul v-if="errorsLi" class="bg-danger rounded ErrUl">
                <li v-if="errorsLi.email">{{ errorsLi.email }} <br /></li>
                <li v-if="errorsLi.password">{{ errorsLi.password }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            token: "",
            user_id: "",
            errors: null,
        };
    },
    computed: {
        errorsLi() {
            return this.errors;
        },
    },
    methods: {
        setErr(err) {
            var fr = {
                email: null,
                password: null,
            };
            err.email ? (fr.email = err.email[0]) : (fr.email = null);
            err.password
                ? (fr.password = err.password[0])
                : (fr.password = null);
            this.errors = fr;
        },
        register() {
            axios
                .post("/api/register", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                .then((data) => {
                    this.token = data.data.token;
                    this.user_id = data.data.user.id;
                    this.$store.commit("setToken", this.token);
                    this.$store.commit("setuserid", this.user_id);
                    window.location.href = "/";
                })
                .catch((error) => {
                    this.setErr(error.response.data.errors);
                });
        },
    },
};
</script>

<style lang="scss"></style>
