<script setup lang="ts">
import {computed, ref, useAttrs, watch} from "vue";
import {NDIconMoon, NDIconSun} from "../icons";
import createUniqueID from "../../functions/createUniqueID";

type Props = {
  falseValue?: any;
  id?: string;
  inputId?: string;
  modelValue?: any;
  trueValue?: any;
};

const attrs = useAttrs();
const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<Props>(), {falseValue: false, modelValue: undefined, trueValue: true});
const value = ref(props.modelValue || props.falseValue);

const updateModelValue = (event: Event) => {
  value.value = (event.target as HTMLInputElement).checked ? props.trueValue : props.falseValue;

  emit('update:modelValue', value.value);
};

watch(props.modelValue, (modelValue) => {
  value.value = modelValue;
});

const defaultClass = 'nd-theme-checkbox';

const checked = computed(() => value.value === props.trueValue);
const id = computed(() => props.id || createUniqueID('theme-checkbox'));

const inputClass = computed(() => defaultClass + '__input');
const inputId = computed(() => props.inputId || (id.value + '-input'));

const labelClass = computed(() => defaultClass + '__label');

const iconClass = computed(() => defaultClass + '__icon');

const ballClass = computed(() => defaultClass + '__ball');
</script>

<template>
  <div v-bind="attrs" :class="defaultClass" :id="id">
    <input :class="inputClass" :id="inputId" type="checkbox" :checked="checked" @change="updateModelValue">
    <label :class="labelClass" :for="inputId">
      <slot name="dark-icon" v-bind="{class: iconClass}">
        <NDIconMoon :class="iconClass"/>
      </slot>
      <span :class="ballClass"/>
      <slot name="light-icon" v-bind="{class: iconClass}">
        <NDIconSun :class="iconClass"/>
      </slot>
    </label>
  </div>
</template>