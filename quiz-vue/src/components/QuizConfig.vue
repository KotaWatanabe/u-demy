<template>
  <div class="quiz-config-container">
    <b-form-select v-model="category" :options="categories"></b-form-select>
    <b-form-select v-model="difficulty" :options="difficulties" class="mt-3"></b-form-select>

    <b-button class="btn" variant="primary" @click="submitConfig">Start Quiz!</b-button>
  </div>
</template>

<script>
export default {
  name: "QuizConfig",
  props: {
    fetchQuestions: Function
  },
  data() {
    return {
      category: null,
      difficulty: null,
      categories: [
        { value: null, text: "Please select an Category" },
        { value: "22", text: "Geography" },
        { value: "23", text: "History" },
        { value: "27", text: "Animal" }
      ],
      difficulties: [
        { value: null, text: "Please select an Difficulty" },
        { value: "easy", text: "Easy" },
        { value: "medium", text: "Medium" },
        { value: "hard", text: "Hard" }
      ]
    };
  },
  methods: {
    submitConfig() {
      this.fetchQuestions(this.category, this.difficulty);
    }
  }
};
</script>

<style scoped>
.quiz-config-container {
  margin-top: 15px;
}
.btn {
  margin-top: 10px;
}
</style>
