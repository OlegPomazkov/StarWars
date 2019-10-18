<template>
  <div class="people">
    <data-page 
      :dataList="people" 
    />
  </div>  
</template>

<script>
import DataPage from "@/components/DataPage";

import { mapGetters } from "vuex";

export default {
  name: "people",
  components: {
    DataPage
  },
  computed: {
    ...mapGetters({
      people: "people",
    })
  },
  async created() {
    await this.$store.dispatch('getPeople')
  }
};
</script>
