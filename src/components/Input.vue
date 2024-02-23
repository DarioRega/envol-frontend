<script lang="ts" setup>

const modelValue = defineModel()

withDefaults(defineProps<{
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  help?: string;
  error?: string;
  icon?: string;
}>(), {
  type: 'text',
})

</script>
<template>
  <div>
    <label :for="name" class="block text-sm font-medium leading-6 text-gray-900">{{label}}</label>
    <div class="relative mt-2 rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" v-show="!!icon">
        <span :class="{
          'h-5 w-5': true,
          'text-gray-400': !error,
          'text-red-500': error,
          [icon]: !error,
          'i-heroicons-exclamation-circle': error,
        }" aria-hidden="true" />
      </div>
      <input v-model="modelValue" :type="type" :name="name" :id="name"
             class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
             :class="{
        'ring-gray-300 focus:ring-primary': !error,
        'ring-red-500 focus:ring-red-500': error,
             }"
             :placeholder="placeholder" />
    </div>
    <p class="mt-2 text-sm text-red-600" id="email-error" v-show="!!error">{{error}}</p>
  </div>
</template>