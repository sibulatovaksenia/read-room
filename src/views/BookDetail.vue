<template>
  <div class="book-detail">
    <div v-if="book" class="book-detail-container">
      <div class="book-image-container">
        <img :src="book.image" :alt="book.title" />
      </div>
      <div class="book-info">
        <h1>{{ book.title }}</h1>
        <p><strong>Автор:</strong> {{ book.author }}</p>
        <p><strong>Ціна:</strong> {{ book.price }} грн</p>
        <p><strong>Формат:</strong> {{ book.format }}</p>
        <p><strong>Опис:</strong></p>
        <p>{{ book.description }}</p>
        <button @click="addToCart(book)" class="add-to-cart-btn">
          Додати в кошик
        </button>
      </div>
    </div>
    <p v-else>Книга не знайдена.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BookDetail",
  computed: {
    ...mapState(["books"]),
    book() {
      const bookId = parseInt(this.$route.params.id);
      return this.books.find((book) => book.id === bookId);
    },
  },
  methods: {
    addToCart(book) {
      this.$store.dispatch("addToCart", book);
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped lang="scss">
.book-detail {
  padding: 30px;
  font-family: "Roboto", sans-serif;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
}

.book-detail-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;
}

.book-info {
  flex: 1;
  max-width: 55%;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  color: #333;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5em;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
  }

  p {
    font-size: 1.1em;
    color: #555;
    margin: 10px 0;
  }

  .add-to-cart-btn {
    background: linear-gradient(135deg, #ef97b4, #add5fa);
    color: white;
    padding: 12px 24px;
    font-size: 1.1em;
    border: none;
    cursor: pointer;
    border-radius: 30px;
    margin-top: 30px;
    transition: background-color 0.3s;
  }
}

.book-image-container {
  max-width: 35%;
  flex: 1;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
