<template>
  <div class="data_page">
    <page-header  class="data_page__header" />
    
    <list-component 
       class="data_page__list"
      :list="dataList"
      @listItemClicked="handleListItemClicked" 
    />

    <page-controls  class="data_page__controls" />

    <details-component 
      v-if="isDetailsVisible"
      class="data_page__details"
      :itemData="currentItem"
      :dataConfig="dataConfig"
      @closeDetails="handleCloseDetails"
    />
  </div>
</template>

<script>
import PageHeader from "./PageHeader";
import PageControls from "./PageControls";
import ListComponent from "./ListComponent";
import DetailsComponent from "./DetailsComponent";

export default {
  components: {
    PageHeader,
    PageControls,
    ListComponent,
    DetailsComponent
  },
  props: {
    dataList: {
      type: Array,
      required: true,
      default: ()=>[]
    },
    dataConfig: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      isDetailsVisible: false,
      currentItem: null
    };
  },
  methods: {
    handleListItemClicked(num) {
      this.currentItem = this.dataList[num]
      this.isDetailsVisible = true
    },
    handleCloseDetails() {
      this.currentItem = null
      this.isDetailsVisible = false
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.data_page {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: $back_prim;
  overflow: auto;
}
</style>
