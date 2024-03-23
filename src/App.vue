<script setup lang="ts">
import {NDThemeCheckbox} from "./components";
import {ref} from "vue";

const themeCheckbox = ref(true);
</script>

<template>
  <div class="app-container">
    <h1>@neondoll/vue-components</h1>
    <div class="app-component">
      <h2>NDThemeCheckBox:</h2>
      <NDThemeCheckbox v-model="themeCheckbox"/>
      <div>value: {{ themeCheckbox }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 100vh;
}

.app-component {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
</style>