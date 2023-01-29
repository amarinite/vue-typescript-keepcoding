import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    // Eager loading: carga todo al inicio
    component: HomeView,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import(/*webpackChunkName: detail*/ "../views/DetailView.vue"),
    props: (route) => {
      const id = Number(route.params.id);

      return isNaN(id) ? { id: null } : { id };
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: import(/*webpackChunkName: notFound*/ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
