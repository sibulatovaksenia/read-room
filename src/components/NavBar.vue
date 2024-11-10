<template>
  <header class="navbar">
    <img :src="logoPath" alt="Logo" class="logo" />
    <ul class="nav-links">
      <li><router-link to="/">Головна</router-link></li>
      <li><router-link to="/catalog">Каталог</router-link></li>
      <li>
        <router-link to="/favorites">
          <span class="material-icons">favorite</span>
        </router-link>
      </li>
      <li><router-link to="/cart">Кошик</router-link></li>
      <li><router-link to="/contact">Зв'язок</router-link></li>
      <li><router-link to="/registration">Реєстрація</router-link></li>
      <li><router-link to="/account">Акаунт</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      logoPath: require("@/assets/READING.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 130px;
  padding: 5px 5px;
  height: auto;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links li {
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  letter-spacing: 3px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Anton", sans-serif;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ef97b4;
}

.material-icons {
  font-size: 24px;
  color: #333;
  vertical-align: middle;
  transition: color 0.3s ease;
}

.material-icons:hover {
  color: #ef97b4;
}
</style>
