<template>
  <div class="registration">
    <h1 class="registration__title">Регистрация</h1>
    <p class="registration__login">
      Уже есть аккаунт?
      <a href="#">Войти</a>
    </p>

    <form class="registration__form" @submit.prevent>
      <TextField label="Имя" type="text" placeholder="Введите Ваше имя" />
      <TextField label="Email" type="text" placeholder="Введите Ваш email" />
      <TextField label="Номер телефона" type="text" placeholder="Введите номер телефона" />
      <DropDown label="Язык" :items="[ 'Русский', 'English' ]" />
      <CheckBox>
        Принимаю
        <a href="#">условия</a>
        использования
      </CheckBox>
      <Btn disabled>Зарегистрироваться</Btn>
    </form>
  </div>
</template>

<script>
import TextField from '@components/TextField'
import DropDown from '@components/DropDown'
import CheckBox from '@components/CheckBox'
import Btn from '@components/Button'

export default {
  name: 'Registration',
  components: {
    TextField,
    DropDown,
    CheckBox,
    Btn
  }
}
</script>

<style lang="scss" scoped>
.registration {
  padding: 40px 30px;
  background: $white;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;

  &__login {
    margin-top: 8px;
    line-height: 22px;
    color: $gray1;
  }
  &__form {
    margin-top: 56px;
  }
}
</style>