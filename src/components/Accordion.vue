<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineProps<{
  name: string
  content: string
}>()
</script>

<template>
  <Disclosure :key="name" v-slot="{ open }" as="div" class="pt-6">
    <dt>
      <DisclosureButton class="text-left flex w-full justify-between items-start">
        <span class="f-text-sm text-gray-800 font-medium">{{ name }}</span>
        <span class="ml-6 flex h-7 items-center">
          <span v-if="!open" class="i-heroicons-plus-small block h-6 w-6" aria-hidden="true" />
          <span v-else class="i-heroicons-minus-small block h-6 w-6" aria-hidden="true" />
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel as="dd" class="pr-12 mt-2">
      <div class="body-base prose" v-html="content" />
    </DisclosurePanel>
  </Disclosure>
</template>
