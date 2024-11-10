<template>
  <div class="registration">
    <h1>Реєстрація</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="name">Ім'я</label>
        <input type="text" id="username" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="lastname">Прізвище</label>
        <input type="text" id="lastname" v-model="form.lastname" required />
      </div>
      <div class="form-group">
        <label for="login">Логін користувача</label>
        <input type="text" id="userlogin" v-model="form.login" required />
      </div>
      <div class="form-group">
        <label for="email">Електронна пошта</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="phone">Номер телефону</label>
        <input type="tel" id="phone" v-model="form.phone" required />
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="form.password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Підтвердження пароля</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="form.confirmPassword"
          required
        />
      </div>
      <button type="submit">Зареєструватися</button>
    </form>
    <p>Вже маєте акаунт? <router-link to="/login">Увійти</router-link></p>
  </div>
</template>

<script>
export default {
  name: "RegistrationView",
  data() {
    return {
      form: {
        name: "",
        lastname: "",
        login: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    registerUser() {
      const user = {
        name: this.form.name,
        lastname: this.form.lastname,
        login: this.form.login,
        email: this.form.email,
        phone: this.form.phone,
        password: this.form.password,
      };

      let users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((u) => u.email === this.form.email);

      if (existingUser) {
        alert("Користувач з такою поштою вже існує");
        return;
      }

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Реєстрація успішна");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
.registration {
  padding: 40px;
  max-width: 500px;
  margin: 0 auto;
  background: linear-gradient(135deg, #ef97b4, #add5fa);
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: center;

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1em;
    margin-top: 20px;
    color: #fff;
  }
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
  color: #333;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #ffff;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
}

button {
  background-color: #ef97b4;
  color: white;
  padding: 10px 20px;
  font-size: 1.1em;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s, transform 0.2s;
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #add5fa;
  transform: scale(1.05);
}
</style>
