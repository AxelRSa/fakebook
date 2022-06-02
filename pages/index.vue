<template lang="pug">
  BaseContainer.index.fluid
    BaseContainer.index__container
      .index__text-container
        BaseText(tag="h1").index__text-highlight.fs-48.blue.center.bold fakebook
        BaseText.fs-24.center Connect with fake friends and the world around you on Fakebook.
      .index__form-container
        BaseCard.index__card
          BaseInput(placeholder="Email or phone number")
          PageIndexPasswordInput
          BaseButton(tag="input" type="submit" value="Log In")
          BaseText(tag="a" href="#").index__forgot-text.blue.center.fs-14.link Forgot password?
          BaseSeparator
          BaseButton.fs-17.green Create a new account
        BaseText.index__text-recomendation.fs-14.center #[BaseText.bold.link(tag="a" href="#") Createa Page] for a fake celebrity, brand or business.
</template>

<style lang="scss" scoped>
.index{
  background-color: var(--background-blue);

  &__container{
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 40px 10px;
  }

  &__text-container{
    @media (min-width: $responsive-lg) {
      padding-right: 30px;
    }
  }

  &__text-highlight{
    padding-bottom: 20px;
  }

  &__form-container{
    padding-top: 50px;
    margin: 0 auto;
  }

  &__card{
    gap: 12px;
    max-width: 396px;
    width: 100%;
    padding: 15px 15px 24px ;
  }

  &__forgot-text{
    margin: 5px 0;
  }

  &__text-recomendation{
    padding: 28px 0;
  }
}
</style>
