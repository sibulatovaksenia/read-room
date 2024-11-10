<template>
  <div class="home">
    <header class="hero-section">
      <h1 class="hero-title">ReadRoom</h1>
      <p class="hero-description">
        Знайдіть однодумців, діліться думками про книги та обирайте найкраще
        разом!
      </p>
    </header>

    <div id="random-book" class="book-card">
      <h3>Книга дня</h3>
      <div class="book-details">
        <img :src="randomBook.image" alt="book cover" class="book-image" />
        <div class="book-info">
          <p class="book-title">{{ randomBook.title }}</p>
          <p class="book-author">{{ randomBook.author }}</p>
          <router-link :to="'/book/' + randomBook.id" class="view-details"
            >Переглянути деталі</router-link
          >
        </div>
      </div>
    </div>

    <section class="services">
      <h2 class="section-title">Наші послуги</h2>
      <div class="services-container">
        <div class="service-card">
          <h3>
            Наш сайт пропонує широкий асортимент книг для будь-якого смаку — від
            класики до новинок. Ви можете легко знайти та придбати книги онлайн.
          </h3>
        </div>
        <div class="service-card">
          <h3>
            Додавайте улюблені книги до списку та зберігайте їх на майбутнє. Ви
            завжди зможете повернутися до свого списку, щоб не забути про цікаві
            новинки.
          </h3>
        </div>
        <div class="service-card">
          <h3>
            Швидка доставка, безпечна оплата та зручний інтерфейс зроблять ваш
            процес покупки простим і приємним.
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  setup() {
    const store = useStore();
    const books = computed(() => store.getters.books);

    const randomBook = computed(() => {
      const randomIndex = Math.floor(Math.random() * books.value.length);
      return books.value[randomIndex];
    });

    return { randomBook };
  },
};
</script>

<style lang="scss" scoped>
.home {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.hero-section {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #ef97b4, #add5fa);
  color: white;
  border-bottom: 4px solid #f9f9f9;
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

.book-card {
  padding: 30px;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: center;
}

.book-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.book-image {
  width: 150px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.book-info {
  text-align: left;
}

.book-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.book-author {
  font-size: 1.2rem;
  color: #555;
}

.view-details {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #ef97b4;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.3s;
}

.view-details:hover {
  background-color: #f99ab0;
  transform: scale(1.05);
}

.services {
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.section-title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
}

.services-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.service-card {
  background: linear-gradient(135deg, #ef97b4, #add5fa);
  color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}
</style>
