<template>
  <div class="list">
    <div
      class="list__item"
      v-for="(item, k) in list"
      :key="`list_item_${k}`"
      @click="handleItemClicked(k)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: ()=>[]
    }
  },
  methods: {
    handleItemClicked(num) {
      this.$emit('listItemClicked', num)
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
