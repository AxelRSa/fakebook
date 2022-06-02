<template lang="pug">
.card
  slot
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'article'
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  border-radius: 8px;
}
</style>
