<template>
  <div class="dropdown" :data-state="state">
    <span class="dropdown__label" @click="toggleMenu">{{ label }}</span>
    <div tabindex="0" class="dropdown__title" @click="toggleMenu" ref="title">{{ current }}</div>
    <div class="dropdown__content" ref="options">
      <label v-for="(item,key) in items" :class="[ 'dropdown__option', { 'dropdown__option--active': current === item } ]" @click="setCurrent(item)" :key="key">
        <input class="dropdown__input" type="radio">
        <span>{{ item }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    label: String,
    items: Array
  },
  data: () => ({
    state: '',
    current: ''
  }),
  mounted() {
    this.current = this.label

    window.addEventListener('click', this.handleClickWindow)
  },
  destroyed() {
    window.removeEventListener('click', this.handleClickWindow)
  },
  methods: {
    toggleMenu(e) {
      this.$refs.title.focus()
      this.state = this.state ? '' : 'active'
    },
    // Set current value when click to option and close the menu
    setCurrent(item) {
      this.current = item
      this.state = ''
    },
    // Close the menu when click to window
    handleClickWindow(e) {
      !this.$el.contains(e.target) && (this.state = '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {
    position: relative;
    width: 100%;
    margin-bottom: 31px;

    &[data-state="active"] {
      .dropdown__title {
        &::before {
          transform: translate(-3px, -50%) rotate(-45deg);
        }
        &::after {
          transform: translate(3px, -50%) rotate(45deg);
        }
      }
      .dropdown__content {
        display: flex;
      }
      .dropdown__option {
        height: 45px;
      }
    }

    &__label {
      display: block;
      font-weight: 500;
      color: $gray2;
      cursor: default;
    }
    &__title {
      position: relative;
      width: 100%;
      height: 52px;
      margin-top: 8px;
      padding: 16px;

      background: $white;
      border: 1px solid $whiteish1;
      box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
      border-radius: 6px;

      display: flex;
      align-items: center;

      cursor: pointer;

      &::before, &::after {
        position: absolute;
        top: 50%;
        right: 16px;
        content: '';

        display: block;
        width: 10px;
        height: 2px;

        background: $primary;
        transition: all .3s ease-out;
        transform: translate(-3px, -50%) rotate(45deg);
      }
      &::after {
        transform: translate(3px, -50%) rotate(-45deg);
      }

      &:focus {
        border: 2px solid $primary;
      }
    }
    &__content {
      display: none;
      flex-direction: column;

      position: absolute;
      top: 85px;

      width: 100%;
      padding: 12px 0;

      background: $white;
      border: 1px solid $whiteish1;
      box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04), 0px 20px 20px rgba(44, 39, 56, 0.04);
      border-radius: 6px;
    }
    &__option {
      display: flex;
      align-items: center;

      width: 100%;
      height: 0;
      padding: 0 15px;

      transition: all .2s ease-out;
      cursor: pointer;

      color: $gray2;

      &--active {
        background: $whiteish2;
      }
    }
    &__input {
      display: none;
    }
  }
</style>