<template>
  <div class="people">
    <data-page 
      :dataList="people"
      :dataConfig="config" 
    />
  </div>  
</template>

<script>
import DataPage from "@/components/DataPage";
import DataConfig from "@/configs/peopleData";

import { mapGetters } from "vuex";

export default {
  name: "people",
  beforeRouteLeave (to, from, next) {
    if( to.name === null ) {
      next(false)
    } else {
      next()
    }
  },
  components: {
    DataPage
  },
  data() {
    return {
      config: DataConfig
    }
  },
  computed: {
    ...mapGetters({
      people: "people"
    })
  },
  async created() {
    this.$store.dispatch('setCurrentView', 'people')
    await this.$store.dispatch('getPeople')
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.people {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: $back_prim;
  border-radius: 10px;
  overflow: auto;
}
</style>
