<template>
    <div id="additem" class="">
        <h3 class="text-center pt-3">Todo List</h3>
        <div class="input-group">
            <input
                class="form-control m-3"
                type="text"
                name="name"
                v-model="item.name"
                placeholder="Start writing your first todo 😃"
                required
            />
            <button class="m-3" type="submit" @click="addItem()">
                <i class="fas fa-plus-square"></i>
            </button>
        </div>
    </div>
</template>

<script>
import axiosAuth from "../../axiosAuth";
export default {
    name: "addItem",
    data() {
        return {
            item: {
                name: "",
                user_id: "",
            },
        };
    },
    methods: {
        addItem() {
            if (this.item.name == "") return;
            //pppp
            this.$set(this.item, "user_id", this.$store.getters.getuserid);
            axios
                .post(
                    "/api/items",
                    {
                        item: this.item,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "Access-Control-Allow-Origin": "*",
                            Accept: "application/json",
                        },
                    }
                )
                .then((res) => {
                    if (res.status == 201) {
                        this.item.name = "";
                        this.item.user_id = "";
                        this.$emit("itemadded");
                    }
                })
                .catch((error) => {
                    console.log(error.response.data);
                });
        },
    },
};
</script>

<style lang="scss">
#additem {
    /*background: linear-gradient(to top, black, red);*/
    button {
        appearance: none;
        background: none;
        outline: none;
        border: none;
        margin-left: 0 !important;
        i {
            font-size: 30px;
            margin-right: 0 !important;
        }
    }
}
</style>
