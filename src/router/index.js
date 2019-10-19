import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import PeoplePage from "@/views/People.vue";
import StarshipsPage from "@/views/Starships.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
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

export default router