<template lang="pug">
button.button(:is="tag", v-bind="$attrs", v-on="$listeners")
  slot
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: var(--brand-blue);
  color: var(--white);
  font-weight: bold;
  font-size: 20px;
  transition: background-color .3s;
  cursor: pointer;

  &:hover{
    background-color: var(--brand-blue-52);
  }
}

.fs-17{
  font-size: 17px;
}

.green{
  background-color: var(--brand-green);
  &:hover{
    background-color: var(--brand-green-38);
  }
}
</style>
