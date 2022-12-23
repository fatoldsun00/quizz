<script setup lang="ts">
import ListQuizz from "../components/ListQuizz.vue";
</script>

<template>
  <header>
    <title>Bienvenue</title>
    <RouterLink to="/create_quizz" class="button">Créer un quizz</RouterLink>
  </header>
  <main>
    <div>Choisis ton quizz</div>
    <ListQuizz />
  </main>
</template>

<style scoped>
header {
  flex: 1;
}
</style>
