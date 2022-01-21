const routes = [
    {
        path: "/",
        component: () => import("../components/todolistt.vue"),
        name: "todolist",
    },
    {
        path: "/sign",
        component: () => import("../components/sign.vue"),
        name: "sign",
    },
    {
        path: "/register",
        component: () => import("../components/register.vue"),
        name: "register",
    },
];
export default routes;
