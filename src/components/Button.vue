<template>
  <button class="button" :type="type" :disabled="disabled">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 56px;

  background: $primary;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;

  font-family: 'IBM Plex Sans';
  font-weight: 500;
  font-size: 16px;
  color: $whiteish2;

  transition: box-shadow .2s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16);
  }
  &:active, &:focus {
    border: 2px solid rgba(44, 39, 56, 0.86);
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001), 0px 4px 8px rgba(44, 39, 56, 0.08);
  }
  &[disabled] {
    background: $whiteish1;
    border: 0;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
    color: $gray1;
    opacity: .5;
    cursor: default;
  }
}
</style>