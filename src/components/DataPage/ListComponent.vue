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

.list {
  box-sizing: border-box;
  width: 100%;

  &__item {
    box-sizing: border-box;
    height: 25px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $text_l;
    font-weight: normal;
    color: $text_sec;
    cursor: pointer;
    border-bottom: 1px solid $back_sec;

    &:hover {
      color: $text_prim;
    }
  }
}
</style>
