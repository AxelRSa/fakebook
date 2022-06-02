<template lang="pug">
.password-input
  BaseInput.password-input__input(placeholder="Password" ref="passwordInput" @input="assignNewInputValueToHaveText()" :type="isPassword ? 'password' : 'text'")
  .password-input__icon-container(v-if="haveText > 0")
    i.password-input__icon.fa-solid.fa-eye(@click="togglePasswordVisibility()" v-if="isPassword")
    i.password-input__icon.fa-solid.fa-eye-slash(@click="togglePasswordVisibility()" v-else)
</template>

<script>
export default {
  data () {
    return {
      isPassword: true,
      haveText: 0
    }
  },
  mounted () {
    this.assignNewInputValueToHaveText()
  },
  methods: {
    togglePasswordVisibility () {
      this.isPassword = !this.isPassword
    },

    assignNewInputValueToHaveText () {
      this.haveText = this.$refs.passwordInput.$el.value.length
    }
  }
}
</script>

<style lang="scss" scoped>
.password-input{
  position: relative;

  &__input{
    width: 100%;
    padding-right: 35px;
  }

  &__icon-container{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
