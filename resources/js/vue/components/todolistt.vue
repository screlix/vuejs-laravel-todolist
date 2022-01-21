<template>
    <div>
        <add-item v-on:itemadded="getList()"></add-item>
        <list-items :itemslist="items"></list-items>
    </div>
</template>

<script>
import addItem from "./addItem.vue";
import listitems from "./listItems.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
    name: "todolist",
    data() {
        return {
            items: [],
        };
    },
    components: {
        "add-item": addItem,
        "list-items": listitems,
    },
    computed: {
        itemch() {
            return this.itemc;
        },
        ...mapState({
            itemc: (state) => state.itemchanged,
        }),
    },
    watch: {
        itemc: function () {
            this.getList();
            // alert("hey");
        },
    },
    methods: {
        getList() {
            axios.get("/api/items").then((res) => {
                res.data.forEach((el) => {
                    this.items.push(el);
                });
                this.items = res.data;
            });
        },
    },
    created() {
        this.getList();
    },
};
</script>

<style lang="scss"></style>
