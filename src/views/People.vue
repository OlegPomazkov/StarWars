<template>
  <div class="home">
    PEOPLE
  </div>
</template>

<script>
// import Header from "@/components/Landing/Header";
// import Landing from "@/components/Landing";
// import Footer from "@/components/Footer";

// import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
  },
  data() {
    return {    };
  },
  computed: {
  },
  created() {
    this.$store.dispatch('getPeople')
  },
  methods: {
  }
};
</script>
