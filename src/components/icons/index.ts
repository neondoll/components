import {App, Plugin} from "vue";
import IconMoon from "./icon-moon.vue";
import IconSun from "./icon-sun.vue";

export default {
    install: function (Vue: App) {
        Vue.component('NDIconMoon', IconMoon);
        Vue.component('NDIconSun', IconSun);
    }
} as Plugin;

export {IconMoon as NDIconMoon, IconSun as NDIconSun};