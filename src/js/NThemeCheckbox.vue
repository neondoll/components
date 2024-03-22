<script>
import createUniqueID from "./func/createUniqueID";

export default {
  computed: {
    themeCheckboxId     : function () {
      return this.id || createUniqueID('theme-checkbox');
    },
    themeCheckboxInputId: function () {
      return this.inputId || (this.themeCheckboxId + '-input');
    }
  },
  name    : "NThemeCheckbox",
  props   : {
    id     : {default: null},
    inputId: {default: null},
    value  : false
  }
}
</script>

<template>
  <div class="n-theme-checkbox" :id="themeCheckboxId">
    <input class="n-theme-checkbox__input" :id="themeCheckboxInputId" type="checkbox" :checked="value">
    <label class="n-theme-checkbox__label" :for="themeCheckboxInputId">
      <svg class="n-theme-checkbox__icon">
        <use xlink:href="#svg-moon"/>
      </svg>
      <span class="n-theme-checkbox__ball"/>
      <svg class="n-theme-checkbox__icon">
        <use xlink:href="#svg-sun"/>
      </svg>
    </label>
  </div>
</template>

<style scoped>

</style>