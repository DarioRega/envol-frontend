<script lang="ts" setup>
withDefaults(defineProps<{
  name: string
  label: string
  type?: string
  placeholder?: string
  help?: string
  error?: string
  icon?: string
}>(), {
  type: 'text',
})

const modelValue = defineModel()
</script>

<template>
  <div>
    <label :for="name" class="block text-sm text-gray-900 font-medium leading-6">{{ label }}</label>
    <div class="mt-2 rounded-md shadow-sm relative">
      <div v-show="!!icon" class="pl-3 flex absolute pointer-events-none items-center inset-y-0 left-0">
        <span
          class="h-5 w-5" :class="{
            'text-gray-400': !error,
            'text-red-500': error,
            [icon]: !error,
            'i-heroicons-exclamation-circle': error,
          }" aria-hidden="true"
        />
      </div>
      <input
        :id="name" v-model="modelValue" :type="type" :name="name"
        class="py-1.5 pl-10 block border-0 rounded-md text-gray-900 ring-1 ring-inset w-full sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-2 focus:ring-inset"
        :class="{
          'ring-gray-300 focus:ring-primary': !error,
          'ring-red-500 focus:ring-red-500': error,
        }"
        :placeholder="placeholder"
      >
    </div>
    <p v-show="!!error" id="email-error" class="mt-2 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>
