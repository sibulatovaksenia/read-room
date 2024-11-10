<template>
  <div class="favorites-view">
    <h1>Мої Уподобання</h1>
    <div class="favorites-grid">
      <BookCatalog v-for="book in favorites" :key="book.id" :book="book" />
      <p v-if="favorites.length === 0">У вас немає уподобаних книг.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BookCatalog from "@/components/BookCatalog.vue";

export default {
  name: "FavoritesView",
  components: {
    BookCatalog,
  },
  computed: {
    ...mapGetters(["favorites"]),
  },
};
</script>

<style scoped lang="scss">
.favorites-view {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: linear-gradient(135deg, #ef97b4, #add5fa);
  color: white;

  h1 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .favorites-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  p {
    text-align: center;
    font-size: 18px;
    color: #ffff;
  }
}

.book-card {
  background: linear-gradient(135deg, #ef97b4, #add5fa);
  color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.book-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.book-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.book-card p {
  font-size: 16px;
}
</style>
