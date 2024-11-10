<template>
  <div class="login">
    <h1>Увійти</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Електронна пошта</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Увійти</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login() {
      if (this.email === "test@example.com" && this.password === "password") {
        const user = { email: this.email, name: "Test User" };
        localStorage.setItem("user", JSON.stringify(user));
        const redirectTo = this.$route.query.redirect || "/checkout";
        this.$router.push(redirectTo);
      } else {
        this.error = "Невірні дані для входу!";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  padding: 40px;
  max-width: 500px;
  margin: 0 auto;
  background: linear-gradient(135deg, #ef97b4, #add5fa);
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;

  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

.error-message {
  color: #ff0000;
  font-weight: bold;
  margin-top: 15px;
}
</style>
