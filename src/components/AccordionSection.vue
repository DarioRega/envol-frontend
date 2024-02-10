<script setup lang="ts">
import Accordion from "./Accordion.vue";
import {useClipboard} from "@vueuse/core";

const props = defineProps<{
  name: string;
  slug: string;
  items: { name: string; content: string }[];
}>()


const url = () =>{
  if(!window) return ''

  const {origin, pathname} = window.location

  return `${origin}${pathname}#${props.slug}`
}
const { copy, isSupported } = useClipboard({ source: url  })

const onCopy = () => {
  if(isSupported.value){
    copy()
  }
}


</script>
<template>
  <section>

  <div class="flex items-center gap-2 relative group">
    <button @click="onCopy" class="absolute -left-4">
     <a :href="`#${slug}`" class="text-white  font-semibold group-hover:text-primary hover:text-primary text-xl">#</a>
    </button>

    <h2 id="slug" class="title-base text-gray-900" >
      {{name}}
    </h2>
  </div>
  <div
  class="space-y-6 divide-y divide-gray-900/10"
  >
  <Accordion
      v-for="item in items"
      :key="item.name"
      v-bind="item" />
  </div>
  </section>

</template>