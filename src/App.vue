<script>
export default {
  data () {
    return {
      ok: '',
      error: '',
      errorPush: '',
      userName: '',
      userFamily: '',
      userEmail: '',
      userPass: '',
      users: []
    }
  },

  methods: {
    makeUser() {
      if (this.userName == '') {
        this.error = 'Нет Имени';
     this.ok = '';   
        return
      } else if (this.userFamily == '') {
        this.error = 'Нет Фамилии';
        this.ok = '';
        return
      } else if (this.userEmail == '') {
        this.error = 'Нет Email';
        this.ok = '';
        return
      } else  if(this.userPass == '') {
        this.error = 'Нет пароля';
        this.ok = '';
        return
      } 
      this.error = '';
      this.ok = 'Успех';
    },

    showUser() {
      if (this.ok == '') {
        alert('Создайте пользователя');
        return
      }
      this.errorPush = '';
      this.users.push ({
        name: this.userName,
        family: this.userFamily,
        email: this.userEmail,
        pass: this.userPass
      })
    }
  }
}
</script>

<template>
  <div class="center">
    <h3>
  <i>Регистрация</i>
</h3>
<input type="text" placeholder="Имя" className="block" v-model="userName">
<input type="text" placeholder="Фамилия" className="block" v-model="userFamily">
<input type="email" placeholder="Email" className="block" v-model="userEmail">
<input type="password" placeholder="Пароль" className="block" v-model="userPass">
<button @click="makeUser()">Создать аккаунт</button>
<p className="error">{{ error }}</p>
<p className="ok">{{ ok }}</p>  
  </div>
  <button type="button" @click="showUser()">push</button>

  <div class="blockCenter">
    <div class="blockCenter" v-for="(item, index) in users" :key='index'>
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
</style>
