<template lang="pug">
input.input(:is="tag", v-bind="$attrs", v-on="$listeners")
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'input'
    }
  }
}
</script>

<style lang="scss" scoped>
.input{
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 17px;
  padding: 14px 16px;
  &:focus-visible{
    outline: 1px solid blue;
  }
}
</style>
