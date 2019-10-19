<template>
  <div class="header">
    <div
      :class="`header__item ${item === currentView? 'active': ''}`"
      v-for="(item, k) in allViews"
      :key="`link_${k}`"
      @click="handleViewClicked(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      allViews: "allViews",
      currentView: "currentView"
    })
  },
  methods: {
    handleViewClicked(view) {
      this.$store.dispatch('setCurrentView', view)
      this.$router.push({name: view})
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.header {
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: $back_sec;

  &__item {
    box-sizing: border-box;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $title_s;
    text-transform: capitalize;
    color: $text_prim;
    cursor: pointer;
    border: 1px solid $back_prim;

    &.active {
      background-color: $back_prim;
    }
  }
}
</style>
