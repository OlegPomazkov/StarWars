<template>
  <div class="starships">
    <data-page 
      :dataList="starships"
      :dataConfig="config" 
    />
  </div>  
</template>

<script>
import DataPage from "@/components/DataPage";
import DataConfig from "@/configs/starshipsData";

import { mapGetters } from "vuex";

export default {
  name: "starships",
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
      starships: "starships"
    })
  },
  async created() {
    this.$store.dispatch('setCurrentView', 'starships')
    await this.$store.dispatch('getStarships')
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.starships {
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
