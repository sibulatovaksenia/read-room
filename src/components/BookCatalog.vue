<template>
  <div class="book-item">
    <div class="book-image">
      <img :src="book.image" :alt="book.title" />
      <div v-if="book.novelty" class="novelty-label">Новинка</div>
    </div>
    <div class="book-details">
      <span class="format">{{ book.format }}</span>
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <p class="price">{{ book.price }} грн</p>
      <div class="book-actions">
        <button @click="addToFavorites" class="favorite-btn">
          <span v-if="isFavorite" class="heart-filled">♥</span>
          <span v-else class="heart-empty">♡</span>
        </button>
        <button class="add-to-cart" @click="addToCart(book)">
          Додати в кошик
        </button>

        <button class="view-details" @click="viewDetails(book)">Деталі</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCatalog",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isFavorite() {
      return this.$store.state.favorites.some((fav) => fav.id === this.book.id);
    },
  },
  methods: {
    addToFavorites() {
      this.$store.dispatch("toggleFavorite", this.book);
    },

    addToCart(book) {
      this.$emit("add-to-cart", book);
      alert("Додано в кошик.");
    },

    viewDetails(book) {
      this.$emit("view-details", book);
    },
  },
};
</script>

<style scoped lang="scss">
.book-item {
  width: 220px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  }

  .book-image {
    position: relative;

    img {
      width: 100%;
      height: auto;
    }

    .novelty-label {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #add5fa;
      color: #fff;
      border-radius: 50%;
      padding: 5px 10px;
      font-size: 12px;
    }
  }

  .book-details {
    padding: 20px;

    .format {
      display: block;
      background-color: #e0e0d1;
      border-radius: 5px;
      padding: 3px 5px;
      margin-bottom: 5px;
    }

    h3 {
      margin: 10px 0;
      font-size: 1.2em;
      color: #333;
      font-weight: 600;
    }

    p {
      margin: 5px 0;
      color: #555;
    }

    .price {
      font-weight: bold;
      color: #222;
    }

    .book-actions {
      margin-top: 20px;

      button {
        background: linear-gradient(135deg, #ef97b4, #add5fa);
        color: white;
        padding: 8px 16px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        margin-right: 5px;
        font-size: 0.9em;
        transition: background-color 0.3s;

        &:hover {
          background-color: #add5fa;
        }
      }

      .favorite-btn {
        padding: 8px;
        margin-right: 10px;

        .heart-filled {
          color: red;
        }

        .heart-empty {
          color: gray;
        }
      }
    }
  }
}
</style>
