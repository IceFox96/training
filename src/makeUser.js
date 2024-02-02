import { userFamily, error, ok, userEmail, userPass } from './App.vue';

export function makeUser() {
if (this.userName == '') {
this.error = 'Нет Имени';
this.ok = '';
return;
} else if (userFamily == '') {
error = 'Нет Фамилии';
ok = '';
return;
} else if (userEmail == '') {
error = 'Нет Email';
ok = '';
return;
} else if (userPass == '') {
error = 'Нет пароля';
ok = '';
return;
}
error = '';
ok = 'Успех';
}
