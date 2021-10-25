<template>
  <div class="registration">
    <h1 class="registration__title">Регистрация</h1>
    <p class="registration__login">
      Уже есть аккаунт?
      <a href="#">Войти</a>
    </p>

    <form class="registration__form" @submit.prevent>
      <TextField
        label="Имя"
        type="text"
        placeholder="Введите Ваше имя"
        v-model="form.name.value"
        :field="form.name" />
      <TextField
        label="Email"
        type="email"
        placeholder="Введите Ваш email"
        v-model="form.email.value"
        :field="form.email" />
      <TextField
        label="Номер телефона"
        type="tel"
        placeholder="Введите номер телефона"
        v-model="form.phone.value"
        :field="form.phone" />
      <DropDown
        label="Язык"
        :items="[ 'Русский', 'Английский', 'Китайский', 'Испанский' ]"
        v-model="form.language.value"
        :field="form.language" />
      <CheckBox v-model="form.agree.value">
        Принимаю <a href="#">условия</a> использования
      </CheckBox>
      <Btn type="submit" :disabled="!form.valid">Зарегистрироваться</Btn>
    </form>
  </div>
</template>

<script>
import TextField from '@components/TextField'
import DropDown from '@components/DropDown'
import CheckBox from '@components/CheckBox'
import Btn from '@components/Button'

import useForm from '@use/form'

const required = val => !!val
const pattern = pattern => val => pattern.test(val)

export default {
  name: 'Registration',
  setup() {
    const form = useForm({
      name: {
        value: '',
        validators: {
          required,
          pattern: pattern(/^[а-яА-ЯЁё\s-]+$/u)
        }
      },
      email: {
        value: '',
        validators: {
          required,
          pattern: pattern(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
        }
      },
      phone: {
        value: '',
        validators: {
          required,
          pattern: pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
        }
      },
      language: {
        value: '',
        validators: {
          required
        }
      },
      agree: {
        value: false,
        validators: {
          required
        }
      }
    })

    function submit() {
      //
    }

    return {
      form,
      submit
    }
  },
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