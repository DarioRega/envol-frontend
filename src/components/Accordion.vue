<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

defineProps<{
  name: string;
  content: string;
}>()
</script>

<template>
    <Disclosure as="div" :key="name" class="pt-6" v-slot="{ open }">
            <dt>
              <DisclosureButton class="flex w-full items-start justify-between text-left">
                <span class="f-text-sm text-gray-800 font-medium">{{ name }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <span  v-if="!open" class="i-heroicons-plus-small h-6 w-6 block" aria-hidden="true" />
                  <span  v-else class="i-heroicons-minus-small h-6 w-6 block" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <div class="prose body-base" v-html="content"/>
            </DisclosurePanel>
          </Disclosure>
</template>

