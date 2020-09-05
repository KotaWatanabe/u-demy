<template>
  <div>
    <b-nav tabs>
      <b-nav-item class="logo">
        <b @click="reset">Fancy Quiz App</b>
      </b-nav-item>
      <b-nav-item disabled>Score: {{numCorrect}}/{{numTotal}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal", "reset"],
  methods: {
    backHome() {
      this.reset();
    }
  }
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  border: 0;
}
</style>
