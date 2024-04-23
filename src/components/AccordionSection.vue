<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import kebabCase from 'lodash/kebabCase'
import type { AccordionItem } from '../types/accordion.ts'
import Accordion from './Accordion.vue'

const props = defineProps<{
  id: string
  title: string
  items: AccordionItem[]
}>()

function url() {
  if (!window)
    return ''

  const { origin, pathname } = window.location

  return `${origin}${pathname}#${kebabCase(props.title)}`
}
const { copy, isSupported } = useClipboard({ source: url })

function onCopy() {
  if (isSupported.value)
    copy()
}
</script>

<template>
  <section>
    <div class="group flex gap-2 relative items-center">
      <button v-show="isSupported" class="absolute -left-4" @click="onCopy">
        <a :href="`#${kebabCase(title)}`" class="hover:text-primary group-hover:text-primary text-xl text-white font-semibold">#</a>
      </button>

      <h2 id="slug" class="title-base text-gray-900">
        {{ title }}
      </h2>
    </div>
    <div
      class="space-y-6 divide-y divide-gray-900/10"
    >
      <Accordion
        v-for="item in items"
        :key="item.name"
        v-bind="item"
      />
    </div>
  </section>
</template>
