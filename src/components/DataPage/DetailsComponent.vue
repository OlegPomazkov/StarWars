<template>
  <div class="details">
    <div class="details__title">
      {{ itemData? itemData.name: ''}}
    </div>

    <div class="details__params">
      <div 
        class="details__params__item"
        v-for="(item, k) in dataConfig"
        :key="`detail_item_${k}`"
      >
        <div class="details__params__item__name">
          {{ item.label }}
        </div>

        <div class="details__params__item__value">
          {{ normalizedData[k] }}
        </div>
      </div>
    </div>

    <div  class="details__films">
      <div  class="details__films__title">
        FILMS
      </div>

      <list-component
        class="details__films__list" 
        :list="filmsToSee" 
        :key="films.length"
      />
    </div>

    <div  
      class="details__control"
      @click="handleCloseDetailsClicked"
    >
      Close
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
      type: Array,
      required: true
    }
  },
  data() {
    return {
      normalizedData: []
    }
  },
  computed: {
    ...mapGetters({
      films: "films",
      homeWorld: "planet"
    }),
    filmsToSee() {
      return this.films.map( i => {
        return {name: i}
      })
    }
  },
  async created() {
    await this.setNormalizedData()
    await this.$store.dispatch('getFilms', this.itemData.films)
  },
  methods: {
    async setNormalizedData() {
      for(let i=0; i < this.dataConfig.length; i++) {
        if(this.dataConfig[i].type === 'url') {
          await this.$store.dispatch('setHomeWorldName', this.itemData[this.dataConfig[i].name])
          this.normalizedData.push(this.homeWorld)
        } else {
          this.normalizedData.push(this.itemData[this.dataConfig[i].name])
        }
      }
    },
    handleCloseDetailsClicked() {
      this.$emit('closeDetails')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.details {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-ndex: 100;
  background: $back_prim;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__title {
    box-sizing: border-box;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: $title_s;
    font-weight: bold;
    color: $text_prim;
  }

  &__params {
    width: 300px;

    &__item {
      box-sizing: border-box;
      width: 100%;
      padding-top: 3px;
      padding-bottom: 3px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid $back_sec;

      &__name {
        width: 50%;
        font-size: $text;
        color: $text_prim;
      }

      &__value {
        width: 50%;
        font-size: $text_l;
        color: $text_sec;
      }
    }
  }

  &__films {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &__title {
      font-size: $text_xl;
      font-weight: bold;
      color: $text_prim;
    }

    &__list .list__item {
      cursor: default;

      &:hover {
        color: $text_sec;
      }
    }
  }

  &__control {
    box-sizing: border-box;
    width: 100px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $text_xl;
    color: $back_prim;
    background: $blue;
    border-radius: 17.5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
