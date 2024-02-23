<script setup lang="ts">
import Input from "./Input.vue";
import { ref, defineProps,computed } from 'vue'
import { useFuse } from '@vueuse/integrations/useFuse'
import Select from "./Select.vue";

interface Category {
  id: number;
  name: string;
}
interface Document {
  id: number;
  name: string;
  url: string;
  updatedAt: string;
  category:Category
}
const props = defineProps<{
  documents: Document[];
  categories: Category[];
}>()

const DEFAULT_CATEGORY = {id:0, name:'Toutes'}
const category = ref<Category>(DEFAULT_CATEGORY)

const categories = [
  DEFAULT_CATEGORY,
  ...props.categories
]

const searchText = ref('')
const { results } = useFuse(searchText, props.documents,{
  fuseOptions:{
  keys: [
      {
        name: 'name',
      },
      {
        name: 'category.name',
      },
    {
      name: 'year',
      getFn: (document) => new Date(document.updatedAt).getFullYear(),
    }
  ],
    threshold: 0.4,
  },
  matchAllWhenSearchEmpty: false
})

const filteredDocuments = computed<Document[]>(() => {
  if(!searchText.value){
    return props.documents
  }
  return results.value.map((result) => result.item)
})
</script>

<template>
  <div class="grid sm:grid-cols-5 gap-4 border-b pb-6">

  <Input name="search" label="Rechercher"  v-model="searchText" icon="i-heroicons-magnifying-glass"  class="sm:col-span-3"/>
  <Select :options="categories" label="Catétgories" v-model="category" class="sm:col-span-2" />
  </div>

  <ul role="list" class="divide-y divide-gray-200">
    <li v-for="document in filteredDocuments" :key="document.id" class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
      <div>
        <p class="text-sm font-medium leading-6 text-gray-900">
          <a :href="document.url" class="hover:underline">{{ document.name }}</a>
        </p>
        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p>
           {{ document.category.name }}
          </p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p>
            <time :datetime="document.updatedAt">{{ new Date(document.updatedAt).getFullYear() }}</time>
          </p>
        </div>
      </div>
      <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
        <a :href="document.url" download class="block rounded-md bg-white px-2.5 py-1.5 text-sm font-mediumbold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
        >Télécharger</a>
      </dl>
    </li>
  </ul>
</template>

