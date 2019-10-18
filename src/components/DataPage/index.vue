<template>
  <div class="people">
    <page-header />
    
    <list-component 
      :list="dataList"
      @listItemClicked="handleListItemClicked" 
    />

    <page-controls />

    <details-component 
      v-if="isDetailsVisible"
      :itemData="currentItem"
      :dataConfig="{}"
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
    }
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
