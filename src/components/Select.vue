<script setup lang="ts" generic="T">
import { defineProps } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'

interface Option extends T {
  id: number
  name: string
}

defineProps<{
  label: string
  options: Option<T>[]
  by?: keyof Option
}>()

const selected = defineModel()
</script>

<template>
  <Listbox v-model="selected" as="div">
    <ListboxLabel class="block text-sm text-gray-900 font-medium leading-6">
      {{ label }}
    </ListboxLabel>
    <div class="mt-2 relative">
      <ListboxButton class="focus:ring-primary py-1.5 pl-3 pr-10 bg-white rounded-md text-gray-900 text-left shadow-sm ring-1 ring-gray-300 ring-inset relative w-full cursor-default sm:text-sm sm:leading-6 focus:ring-2 focus:outline-none">
        <span class="block truncate">{{ selected.name }}</span>
        <span class="pr-2 flex absolute pointer-events-none items-center inset-y-0 right-0">
          <span class="i-heroicons-chevron-up-down text-gray-400 h-5 w-5" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="py-1 mt-1 bg-white rounded-md text-base shadow-lg ring-1 ring-black ring-opacity-5 absolute max-h-60 w-full overflow-auto z-10 sm:text-sm focus:outline-none">
          <ListboxOption v-for="option in options" :key="option.id" v-slot="{ active, selected }" as="template" :value="option">
            <li class="py-2 pl-3 pr-9 relative cursor-default select-none" :class="[active ? 'bg-primary text-white' : 'text-gray-900']">
              <span class="block truncate" :class="[selected ? 'font-semibold' : 'font-normal']">{{ option.name }}</span>

              <span v-if="selected" class="pr-4 flex absolute items-center inset-y-0 right-0" :class="[active ? 'text-white' : 'text-primary']">
                <span class="i-heroicons-check h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
