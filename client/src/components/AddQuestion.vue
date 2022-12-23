<script setup lang="ts">
import { ref } from "vue";
import { AxiosKey } from './services/symbols'
import { injectStrict } from './utils/injectTyped'
import { mount } from "@vue/test-utils";

const http = injectStrict(AxiosKey)

mount(async () => {  
  const resp = await http.get('/api/quizz/typeOfQuestion')  
  console.log(resp);
})

</script>

<template>
  <div>
   TODO
  </div>
</template>

<style scoped></style>
