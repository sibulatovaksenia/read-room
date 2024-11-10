<template>
  <div class="catalog-view">
    <section class="hero-section">
      <h1 class="hero-title">Каталог Книжок</h1>
      <p class="hero-description">
        Оберіть свою наступну книгу з нашого чудового асортименту.
      </p>
    </section>

    <div class="filters">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Пошук за назвою книги"
        class="search-input"
      />
      <input
        type="number"
        v-model.number="minPrice"
        placeholder="Мін. ціна"
        class="filter-input"
      />
      <input
        type="number"
        v-model.number="maxPrice"
        placeholder="Макс. ціна"
        class="filter-input"
      />
      <button @click="resetFilters" class="reset-button">
        Скинути фільтри
      </button>
    </div>

    <div class="book-catalog-grid">
      <BookCatalog
        v-for="book in filteredBooks"
        :key="book.id"
        :book="book"
        @add-to-cart="addToCart(book)"
        @view-details="viewDetails(book)"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookCatalog from "@/components/BookCatalog.vue";

export default {
  name: "CatalogView",
  components: {
    BookCatalog,
  },
  data() {
    return {
      searchQuery: "",
      minPrice: null,
      maxPrice: null,
    };
  },
  computed: {
    ...mapState(["books"]),

    filteredBooks() {
      return this.books.filter((book) => {
        const matchesSearch = book.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        const matchesPrice =
          (!this.minPrice || book.price >= this.minPrice) &&
          (!this.maxPrice || book.price <= this.maxPrice);

        return matchesSearch && matchesPrice;
      });
    },
  },
  methods: {
    addToCart(book) {
      this.$store.dispatch("addToCart", book);
    },
    viewDetails(book) {
      this.$router.push({ name: "BookDetail", params: { id: book.id } });
    },
    resetFilters() {
      this.searchQuery = "";
      this.minPrice = null;
      this.maxPrice = null;
    },
  },
};
</script>

<style scoped lang="scss">
.catalog-view {
  font-family: Arial, sans-serif;

  .hero-section {
    text-align: center;
    padding: 80px 20px;
    background: linear-gradient(135deg, #ef97b4, #add5fa);
    color: white;
  }

  .hero-title {
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .hero-description {
    font-size: 20px;
    max-width: 600px;
    margin: 0 auto 30px;
  }

  .filters {
    display: flex;
    gap: 10px;
    padding: 20px 70px;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    animation: fadeIn 1s ease-in-out;
  }

  .search-input,
  .filter-input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    width: 150px;
    transition: transform 0.3s, box-shadow 0.3s;

    &:focus {
      transform: scale(1.05);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
  }

  .reset-button {
    background-color: #ef97b4;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #e76a91;
      transform: scale(1.1);
    }
  }

  .book-catalog-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-items: center;
    padding: 20px 70px;
  }

  .book-item {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 15px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
