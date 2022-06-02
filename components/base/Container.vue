<template lang="pug">
.container(:is="tag", v-bind="$attrs", v-on="$listeners")
  slot
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;

  @media (min-width: $responsive-sm) {
    max-width: 526px;
  }

  @media (min-width: $responsive-md) {
    max-width: 718px;
  }

  @media (min-width: $responsive-lg) {
    max-width: 942px;
  }

  @media (min-width: $responsive-xl) {
    max-width: 1150px;
  }

  @media (min-width: $responsive-xxl) {
    max-width: 1550px;
  }
}

.fluid {
  max-width: initial;
}
</style>
