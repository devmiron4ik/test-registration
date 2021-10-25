<template>
  <Registration/>
</template>

<script>
import Registration from '@components/Registration'

export default {
  name: 'App',
  components: {
    Registration
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap');

*, *::after, *::before {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  padding: 10px;
  background: #E5E5E5;
  font-family: 'IBM Plex Sans';
  font-size: 16px;
  line-height: 21px;
}

h1 {
  font-weight: 700;
  font-size: 34px;
  line-height: 44px;
  color: $gray1;
}

a {
  text-decoration: none;
  line-height: 22px;
  color: $primary;
}

.invalid {
  display: block;
  margin-top: 8px;

  font-size: 14px;
  line-height: 18px;
  color: $error;

  opacity: 0;
  visibility: hidden;

  transition: all .2s ease-in;

  &--show {
    opacity: 1;
    visibility: visible;
  }
}
</style>
