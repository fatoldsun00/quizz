<script setup lang="ts">
import { ref } from "vue";
import AddQuestions from "@/components/AddQuestion.vue";

const isShowAddQuestions = ref<boolean>(false);
</script>

<template>
  <header>
    <title>Créer votre quizz</title>
  </header>
  <main>
    <button>Ajouter une image</button>
    <button @click="isShowAddQuestions=true">Ajouter les question</button>
    <AddQuestion v-if="isShowAddQuestions" />
  </main>
</template>

<style scoped>
header {
  flex: 1;
}
</style>
