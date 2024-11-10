<template>
  <div class="account">
    <div v-if="user">
      <h1>Мій акаунт</h1>

      <!-- Редагування акаунта  -->
      <div class="account-details">
        <h2>Редагування профілю</h2>
        <form @submit.prevent="updateAccount">
          <div class="form-group">
            <label for="username">Ім'я користувача</label>
            <input type="text" v-model="user.username" required />
          </div>
          <div class="form-group">
            <label for="email">Електронна пошта</label>
            <input type="email" v-model="user.email" required />
          </div>
          <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" v-model="user.password" required />
          </div>
          <button type="submit">Зберегти зміни</button>
        </form>
      </div>

      <!-- Історія покупок -->
      <div class="purchase-history">
        <h2>Історія покупок</h2>
        <ul>
          <li v-for="(purchase, index) in purchaseHistory" :key="index">
            <span
              >{{ purchase.date }}: {{ purchase.title }} -
              {{ purchase.price }} грн</span
            >
          </li>
        </ul>
        <p v-if="purchaseHistory.length === 0">У вас ще немає покупок.</p>
      </div>
      <button @click="logout" class="logout-button">Вийти</button>
    </div>
    <div v-else>
      <p>
        Ви не увійшли в свій акаунт.
        <router-link to="/registration">Вхід</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountView",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || {
        username: "",
        email: "",
        password: "",
      },
      purchaseHistory:
        JSON.parse(localStorage.getItem("purchaseHistory")) || [],
    };
  },
  methods: {
    updateAccount() {
      localStorage.setItem("user", JSON.stringify(this.user));
      alert("Дані успішно оновлені");
    },
    addPurchase(purchase) {
      this.purchaseHistory.push(purchase);
      localStorage.setItem(
        "purchaseHistory",
        JSON.stringify(this.purchaseHistory)
      );
    },
    logout() {
      localStorage.removeItem("loggedInUser");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
.account {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, #ef97b4, #add5fa);
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.account-details,
.purchase-history {
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  color: #333;
  text-align: left;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1em;
  }
}

button {
  background-color: #add5fa;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s;
  margin-top: 20px;
}

button:hover {
  background-color: #ef97b4;
}

.logout-button {
  background-color: #add5fa;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  border-radius: 20px;
  transition: background-color 0.3s;
}

.purchase-history ul {
  list-style-type: none;
  padding: 0;
}

.purchase-history li {
  margin: 10px 0;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
  color: #333;
}
</style>
