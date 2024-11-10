<template>
  <div class="review-page">
    <h1>Залишити відгук</h1>
    <textarea
      v-model="reviewText"
      placeholder="Ваш відгук..."
      class="review-textarea"
    ></textarea>
    <button @click="submitReview" class="submit-button">
      Відправити відгук
    </button>

    <div v-if="isSubmitted" class="success-message">Ваш відгук надіслано!</div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      reviewText: "",
      isSubmitted: false,
    };
  },
  methods: {
    submitReview() {
      if (this.reviewText.trim()) {
        this.isSubmitted = true;
        this.reviewText = "";
      } else {
        alert("Будь ласка, введіть текст відгуку.");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.review-page {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;

  h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #ffff;
  }

  .review-textarea {
    width: 100%;
    height: 180px;
    padding: 15px;
    font-size: 1.1em;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 12px;
    box-sizing: border-box;
    outline: none;
    resize: none;
    transition: border 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: #fbc2eb;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    &::placeholder {
      color: #888;
      font-style: italic;
    }
  }

  .submit-button {
    background-color: #fbc2eb;
    color: white;
    padding: 12px 24px;
    font-size: 1em;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #a6c1ee;
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .success-message {
    margin-top: 20px;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.2em;
  }
}
</style>
