import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import PeoplePage from "@/views/People.vue";
import StarshipsPage from "@/views/Starships.vue";
import ErrorPage from "@/views/ErrorPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/error",
      name: "error",
      component: ErrorPage
    },
    {
      path: "/people",
      name: "people",
      component: PeoplePage
    },
    {
      path: "/starships",
      name: "starships",
      component: StarshipsPage
    }
  ]
});
