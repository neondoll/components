import {App, Plugin} from "vue";
import ThemeCheckbox from "./theme-checkbox.vue";

export default {
    install: function (Vue: App) {
        Vue.component('NDThemeCheckbox', ThemeCheckbox);
    }
} as Plugin;

export {ThemeCheckbox as NDThemeCheckbox};