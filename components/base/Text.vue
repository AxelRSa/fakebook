<template lang="pug">
.text(:is="tag", v-bind="$attrs", v-on="$listeners")
  slot
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p'
    }
  }
}
</script>

<style lang="scss" scoped>
.center{
  text-align: center;
}

.bold{
  font-weight: bold;
}

.fs-48{
  font-size: 48px;
}

.fs-24{
  font-size: 24px;
}

.fs-14{
  font-size: 14px;
}

.blue{
  color: var(--brand-blue);
}

.link{
  cursor: pointer;

  &:hover{
    text-decoration: underline;
  }
}
</style>
