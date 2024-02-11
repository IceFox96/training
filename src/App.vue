<script setup>

import {computed, ref} from 'vue' 
import {useVuelidate} from '@vuelidate/core'
import { required, email } from '@vuelidate/validators';


const errorPush = ref('');
const userName = ref('');
const userFamily = ref('');
const userEmail = ref('');
const userPass = ref('');
const users = ref([]);
const message = ref('');
const v$ = useVuelidate();

const error = computed(() => {
  switch ('') {
    case userName.value: 
    return 'Нет имени';
    case userFamily.value:
      return 'Нет фамилии';
    case userEmail.value:
      return 'Нет Email'
    case userPass.value:
      return 'Нет пароля'
    default: 
    return '';
  }
});

const ok = computed(() => (error.value == '' ? 'Успех' : '' ));

function validations() {
return {userName: { required },
  userFamily: { required },
  userPass: { required },
  userEmail: { required, email }
}}





function makeUser() {
v$.validate()
if (!v$.error.value) {
  alert('Успех')
} else {alert('Ошибка')}
}



   function showUser() {
      if (ok.value == '') {
        alert('Создайте пользователя');
        return
      }
      errorPush.value = '';
      users.value.push ({
        name: userName.value,
        family: userFamily.value,
        email: userEmail.value,
        pass: userPass.value
      })
    };

   function tester(data) {
      alert(data);
    }


</script>

<template>

  
  <div class="center">
    <h3>
  <i>Регистрация</i>
</h3>


<form @submit.prevent="makeUser()">

<input type="text" placeholder="Имя" className="block" v-model="userName">
<input type="text" placeholder="Фамилия" className="block" v-model="userFamily">
<input type="email" placeholder="Email" className="block" v-model="userEmail">
<input type="password" placeholder="Пароль" className="block" v-model="userPass">

<button>Создать аккаунт</button>
</form>

<p class="ok" v-if="message == ok">{{ message }}</p>
<p class="error" v-else >{{ message }}</p>

  </div>

  <button @click="showUser()">push</button>


  <div class= "userCenter">
    <div  v-for="(item, index) in users" :key='index'>
      <div class="userShow">
        <h3>{{ item.name }}</h3>
        <h4>{{ item.family }}</h4>
        <h4>{{ item.email }}: {{ item.pass }}</h4>
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
