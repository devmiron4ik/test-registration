<template>
  <label class="textfield">
    <span class="textfield__label">{{ label }}</span>
    <input class="textfield__input" :type="type" :placeholder="placeholder">
  </label>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
.textfield {
  display: block;
  margin-bottom: 33px;

  &__label {
    display: block;
    font-weight: 500;
    color: $gray2;
  }
  &__input {
    width: 100%;
    height: 52px;

    margin-top: 8px;
    padding: 0 16px;

    background: $white;
    border: 1px solid $whiteish1;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;

    font-size: 16px;
    color: $gray1;

    transition: .2s;

    @include placeholder {
      font-family: 'IBM Plex Sans';
      font-size: 16px;
      line-height: 21px;
      color: $accent;
    }

    &:focus {
      border: 2px solid $primary;
    }
  }
}
</style>