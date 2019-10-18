<template>
  <div class="home">
    <div class="home__title">
      STAR WARS 
    </div>

    <div
      class="home__link"
      v-for="(item, k) in allViews"
      :key="`home_link_${k}`"
      @click="handleViewClicked(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters({
      allViews: "allViews",
    })
  },
  async created() {
    this.$store.dispatch('setCurrentView', null)
  },
  methods: {
    handleViewClicked(view) {
      this.$store.dispatch('setCurrentView', view)
      this.$router.push({name: view})
    }
  }
};
</script>
