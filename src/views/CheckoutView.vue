<template>
  <div class="checkout">
    <h1>Оформлення замовлення</h1>

    <div v-if="cart.length > 0">
      <div class="cart-items">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title" class="cart-item-image" />
          <div class="cart-item-details">
            <h3>{{ item.title }}</h3>
            <p>Автор: {{ item.author }}</p>
            <p>Ціна: {{ item.price }} грн</p>
            <p>Кількість: {{ item.quantity }}</p>
          </div>
        </div>
      </div>

      <div class="total">
        <p><strong>Загальна сума:</strong> {{ totalPrice }} грн</p>
      </div>

      <button @click="completePurchase" class="complete-purchase-btn">
        Підтвердити покупку
      </button>
    </div>

    <div v-else>
      <p>
        Ваш кошик порожній.
        <router-link to="/catalog" class="link-to-catalog"
          >Перейти до каталогу</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutView",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || null,
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    completePurchase() {
      this.$store.dispatch("clearCart");
      alert("Ваша покупка успішно оформлена!");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.checkout {
  padding: 20px;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #ef97b4, #add5fa);
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
}

h2 {
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 20px;
}

.cart-items {
  margin-top: 20px;
}

.cart-item {
  display: flex;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  align-items: center;
  transition: transform 0.3s;
}

.cart-item:hover {
  transform: translateY(-5px);
}

.cart-item-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
  border-radius: 8px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-details h3 {
  margin: 0;
  font-size: 1.3em;
  color: #333;
}

.cart-item-details p {
  margin: 5px 0;
  color: #666;
}

.total {
  margin-top: 20px;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}

.complete-purchase-btn {
  background-color: #ef97b4;
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 30px;
  font-size: 1.2em;
  transition: background-color 0.3s;
  display: block;
  width: 100%;
  text-align: center;
}

.complete-purchase-btn:hover {
  background-color: #add5fa;
}

.link-to-catalog {
  color: #ef97b4;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.link-to-catalog:hover {
  color: #add5fa;
}
</style>
