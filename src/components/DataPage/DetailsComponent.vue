<template>
  <div class="details">
    <div class="details__inner">
      <div class="details__inner__title">
        {{ itemData? itemData.name: ''}}
      </div>

      <div class="details__inner__params">
        <div 
          class="details__inner__params__item"
          v-for="(item, k) in dataConfig"
          :key="`detail_item_${k}`"
        >
          <div class="details__inner__params__item__name">
            {{ item }}
          </div>

          <div class="details__inner__params__item__value">
            {{ normalizedDataItem[k] }}
          </div>
        </div>
      </div>

      <div  class="details__inner__films">
        <div  class="details__inner__films__title">
        </div>

        <list-component :list="films" />
      </div>

      <div  
        class="details__inner__control"
        @click="handleCloseDetailsClicked"
      >
        Close
      </div>
    </div>
  </div>
</template>

<script>
import ListComponent from "./ListComponent";

import { mapGetters } from "vuex";

export default {
  components: {
    ListComponent
  },
  props: {
    itemData: {
      required: true
    },
    dataConfig: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      films: [],
      normalizedDataItem: []
    }
  },
  methods: {
    handleCloseDetailsClicked() {
      this.$emit('closeDetails')
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
    background-color: pink;
    cursor: pointer;
    border-radius: 17.5px;

    &.disabled {
     cursor: crosshair; 
     opacity: 0.8;
    }
  }
}
</style>
