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

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.home {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $back_prim;
  border-radius: 10px;

  &__title {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: $title;
    font-weight: bold;
    color: $black;
  }

  &__link {
    box-sizing: border-box;
    width: 200px;
    height: 50px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: title_s;
    text-transform: capitalize;
    color: $back_prim;
    background: $blue;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
