<template>
  <div class="controls">
    <div
      :class="`controls__item ${previousPage === null? 'disabled':''}`"
      @click="handleControlClicked('prev')"
    >
      &lt; Prev
    </div>

    <div
      :class="`controls__item ${nextPage === null? 'disabled':''}`"
      @click="handleControlClicked('next')"
    >
      Next &gt; 
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      currentView: "currentView",
      previousPage: "previousPage",
      nextPage: "nextPage"
    })
  },
  methods: {
    handleControlClicked(page) {
      if( page === 'prev' && this.previousPage === null) return
      if( page === 'next' && this.nextPage === null) return
      
      this.$store.dispatch('getNewData', {
        url: page === "prev"? this.previousPage: this.nextPage,
        type: this.currentView
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.controls {
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__item {
    box-sizing: border-box;
    height: 100%;
    width: 100px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $text_xl;
    color: $back_prim;
    background-color: $blue;
    cursor: pointer;
    border-radius: 17.5px;

    &.disabled {
     cursor: not-allowed; 
     opacity: 0.5;
    }
  }
}
</style>
