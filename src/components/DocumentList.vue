<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { useFuse } from '@vueuse/integrations/useFuse'
import Input from './Input.vue'
import Select from './Select.vue'

interface Category {
  id: number
  name: string
}
interface Document {
  id: number
  name: string
  url: string
  updatedAt: string
  category: Category
}
const props = defineProps<{
  documents: Document[]
  categories: Category[]
}>()

const DEFAULT_CATEGORY = { id: 0, name: 'Toutes' }
const category = ref<Category>(DEFAULT_CATEGORY)

const categories = [
  DEFAULT_CATEGORY,
  ...props.categories,
]

const searchText = ref('')
const { results } = useFuse(searchText, props.documents, {
  fuseOptions: {
    keys: [
      {
        name: 'name',
      },
      {
        name: 'category.name',
      },
      {
        name: 'year',
        getFn: document => new Date(document.updatedAt).getFullYear(),
      },
    ],
    threshold: 0.4,
  },
  matchAllWhenSearchEmpty: false,
})

const filteredDocuments = computed<Document[]>(() => {
  if (!searchText.value)
    return props.documents

  return results.value.map(result => result.item)
})
</script>

<template>
  <div class="pb-6 border-b grid gap-4 sm:grid-cols-5">
    <Input v-model="searchText" name="search" label="Rechercher" icon="i-heroicons-magnifying-glass" class="sm:col-span-3" />
    <Select v-model="category" :options="categories" label="Catétgories" class="sm:col-span-2" />
  </div>

  <ul role="list" class="divide-y divide-gray-200">
    <li v-for="document in filteredDocuments" :key="document.id" class="py-5 flex flex-wrap gap-x-6 gap-y-4 justify-between items-center sm:flex-nowrap">
      <div>
        <p class="text-sm text-gray-900 font-medium leading-6">
          <a :href="document.url" class="hover:underline">{{ document.name }}</a>
        </p>
        <div class="mt-1 text-xs text-gray-500 leading-5 flex gap-x-2 items-center">
          <p>
            {{ document.category.name }}
          </p>
          <svg viewBox="0 0 2 2" class="fill-current h-0.5 w-0.5">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p>
            <time :datetime="document.updatedAt">{{ new Date(document.updatedAt).getFullYear() }}</time>
          </p>
        </div>
      </div>
      <dl class="flex flex-none gap-x-8 w-full justify-between sm:w-auto">
        <a :href="document.url" download class="font-mediumbold px-2.5 py-1.5 block bg-white rounded-md text-sm text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50">Télécharger</a>
      </dl>
    </li>
  </ul>
</template>
