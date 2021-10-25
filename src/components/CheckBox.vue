<template>
  <label class="checkbox">
    <input class="checkbox__input" type="checkbox">
    <span class="checkbox__custom"></span>
    <span class="checkbox__label"><slot/></span>
  </label>
</template>

<script>
export default {
  name: 'CheckBox'
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: inline-block;
  margin-bottom: 36px;
  cursor: pointer;

  &__input {
    display: none;

    &:checked + span {
      background: url('../assets/check.svg') no-repeat center;
      border: 2px solid $primary;
    }
  }
  &__custom {
    display: inline-block;
    vertical-align: middle;

    width: 28px;
    height: 28px;

    border: 1px solid $whiteish1;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 4px;

    transition: all .2s ease-out;
  }
  &__label {
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;

    font-weight: 500;
    color: $gray2;
  }
}
</style>