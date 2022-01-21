<template>
    <div id="list-items">
        <ul>
            <li
                class="input-group p-2"
                v-for="(item, index) in itemslist"
                :key="index"
            >
                <input
                    id="checkb"
                    type="checkbox"
                    v-model="item.done"
                    @change="updateItem(item)"
                />
                <span
                    id="contentInp"
                    :class="[
                        item.done ? 'doneclass' : 'notdone',
                        'form-control',
                        'shadow-none',
                    ]"
                    readonly
                >
                    {{ item.name }}
                </span>
                <button class="" @click="deleteItem(item.id)">
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        </ul>
        <div v-show="gettoken" class="text-center">
            Your Todo List is Empty Please Sign in ^-^
        </div>
    </div>
</template>

<script>
export default {
    name: "listitems",
    props: ["itemslist"],
    data() {
        return {
            az: true,
        };
    },
    computed: {
        gettoken() {
            return this.$store.state.token ? false : true;
        },
    },
    methods: {
        deleteItem(id) {
            axios
                .delete("api/items/" + id)
                .then((res) => {
                    this.$store.commit("increitem");
                })
                .catch((err) => {});
        },
        updateItem(itemm) {
            axios
                .put("api/items/" + itemm.id, {
                    item: itemm,
                })
                .then((res) => {
                    this.$emit("itemchanged");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {},
};
</script>

<style lang="scss">
#list-items {
    margin: auto;
    width: 95%;
    height: 40vh;
    overflow-y: scroll;

    ul {
        padding: 0;
        li {
            margin: 0.5rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(241, 241, 241);
            list-style-type: none;
        }
    }
    #contentInp {
        border: none;
        outline: none;
        background-color: rgb(241, 241, 241);
    }
    #checkb {
        margin: 0 1rem;
        transform: scale(1.5);
        cursor: pointer;
    }
    button {
        margin: 0 1rem;
        appearance: none;
        background: none;
        outline: none;
        border: none;
        i {
            color: red;
            font-size: 24px !important;
        }
    }
    .doneclass {
        text-decoration: line-through;
    }
    .notdone {
        text-decoration: none;
    }
}
</style>
