<script setup>

import { computed, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators';

const rules = computed(() => {
  return {
    userName: {
      required: helpers.withMessage('Нет имени', required)
    },
    userFamily: {
      required: helpers.withMessage('Нет фамилии', required)
    },
    userPass: {
      required: helpers.withMessage('Нет пароля', required)
    },
    userEmail: {
      required: helpers.withMessage('Нет Email', required),
      email: helpers.withMessage('Email не действителен', email)
    }
  }
})

const errorPush = ref('');
const userName = ref('');
const userFamily = ref('');
const userEmail = ref('');
const userPass = ref('');
const users = ref([]);
const message = ref('');

const v$ = useVuelidate(rules, {
  userName,
  userFamily,
  userEmail,
  userPass
});





function makeUser() {
  v$.value.$touch();


  if (v$.value.$invalid) {
    console.log('Error')
    return
  }

  console.log('Успех')
  showUser()
}



 function showUser() {
    if (v$.value.$invalid) {
      alert('Создайте пользователя');
      return
    }

    users.value.push ({
      name: userName.value,
      family: userFamily.value,
      email: userEmail.value,
      pass: userPass.value
    })
   userName.value = '';
   userFamily.value = '';
   userEmail.value = '';
   userPass.value = '';

   v$.value.$reset();
 };


</script>

<template>


<div class="center">
  <h3>
    <i>Регистрация</i>
  </h3>


  <form @submit.prevent="makeUser()">

    <input type="text" placeholder="Имя" className="block" v-model="userName" @input="v$.userName.$reset" @blur="v$.userName.$touch" />
      <span>{{ v$.userName.$errors[0]?.$message }}</span>
    <input type="text" placeholder="Фамилия" className="block" v-model="userFamily" @input="v$.userFamily.$reset" @blur="v$.userFamily.$touch"/>
      <span>{{ v$.userFamily.$errors[0]?.$message }}</span>
    <input type="email" placeholder="Email" className="block" v-model="userEmail" @input="v$.userEmail.$reset" @blur="v$.userEmail.$touch"/>
      <span>{{ v$.userEmail.$errors[0]?.$message }}</span>
    <input type="password" placeholder="Пароль" className="block" v-model="userPass" @input="v$.userPass.$reset" @blur="v$.userPass.$touch"/>
      <span>{{ v$.userPass.$errors[0]?.$message }}</span>

    <button>Создать аккаунт</button>
  </form>

  <div class= "userCenter">
    <div  v-for="(item, index) in users" :key="index">
      <div class="userShow">
        <h3>{{ item.name }}</h3>
        <h4>{{ item.family }}</h4>
        <h4>{{ item.email }}: {{ item.pass }}</h4>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>

.block {
  display: block;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  margin-bottom: 10px;
  margin: 20px auto;
}

.center {
  text-align: center;
}

button {
  display: block;
  border: none;
  background-color: white;
  margin: 20px auto;
  font-size: 20px;
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: bold;
}

h3 {
  font-family: 'Open Sans';
  font-size: 30px;
}

.error {
  color: red;
  font-family: "Open Sans";
}

.ok {
  color: green;
  font-family: "Open Sans";
}
p {
  margin: 10px auto;
}

.userShow {
  border-radius: 20px;
  width: 400px;
  border: 2px dashed black;
  background-color: rgb(226, 226, 226);
  background-clip: padding-box;
  padding: 0px 20px;
  box-sizing: border-box;
  margin: 10px auto;
}
.blockCenter {
  text-align: center;
  margin: 10px auto;
}

.userCenter {
  margin: 10px auto;
}
</style>
