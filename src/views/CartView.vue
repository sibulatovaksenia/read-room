<template>
  <div class="cart">
    <h1>Ваш Кошик</h1>
    <div v-if="cart.length === 0" class="empty-cart">
      <p>Ваш кошик порожній.</p>
      <router-link to="/catalog" class="link-button"
        >Перейти в каталог</router-link
      >
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.title" class="cart-item-image" />
        <div class="cart-item-details">
          <h3>{{ item.title }}</h3>
          <p>Автор: {{ item.author }}</p>
          <p>Ціна: {{ item.price }} грн</p>
        </div>
        <button @click="removeFromCart(item)" class="remove-button">
          Видалити
        </button>
      </div>
      <div class="cart-summary">
        <p><strong>Загальна сума:</strong> {{ totalPrice }} грн</p>
        <router-link to="/checkout">
          <button class="checkout-button">Оформити замовлення</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
  },
};
</script>

<style scoped lang="scss">
.cart {
  padding: 30px;
  background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 42px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #ffff;
  }

  .empty-cart {
    color: #ffff;
    font-size: 18px;
    margin-top: 20px;
    p {
      margin-bottom: 15px;
    }

    .link-button {
      background-color: #a6c1ee;
      color: white;
      padding: 12px 24px;
      border-radius: 50px;
      text-decoration: none;
      font-size: 16px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #fbc2eb;
      }
    }
  }

  .cart-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    background: #ffffff;
    color: #333;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    }

    .cart-item-image {
      width: 80px;
      height: 120px;
      border-radius: 8px;
      object-fit: cover;
      margin-right: 20px;
    }

    .cart-item-details {
      flex: 1;
      text-align: left;
      margin-right: 20px;
    }

    h3 {
      font-size: 20px;
      font-weight: bold;
    }

    p {
      margin: 5px 0;
    }

    .remove-button {
      background-color: #a6c1ee;
      color: white;
      border: none;
      padding: 8px 16px;
      font-size: 14px;
      border-radius: 25px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #fbc2eb;
      }
    }
  }

  .cart-summary {
    background-color: #ffffff;
    color: #333;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    margin-top: 30px;

    p {
      font-size: 20px;
      font-weight: 500;
    }

    .checkout-button {
      background-color: #a6c1ee;
      color: white;
      padding: 12px 24px;
      font-size: 16px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      margin-top: 20px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #fbc2eb;
      }
    }
  }
}
</style>
