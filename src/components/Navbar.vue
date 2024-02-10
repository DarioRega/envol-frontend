<script setup lang="ts">

import { ref, defineProps } from 'vue'
import { Dialog, DialogPanel,TransitionRoot,TransitionChild } from '@headlessui/vue'
import logo from '../../public/logo.svg';

const isMobileMenuOpen = ref(false)

 defineProps<{
  navigation: {name: string, href: string}[];
  currentPath: string;
}>()

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: "Critères d'attributions", href: '/critere-d-attribution' },
  { name: 'Demande de bourse', href: '/demande-de-bourse' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Status', href: '/status' },
  { name: 'Documents', href: '/documents' },
  { name: 'Contact', href: '/contact' },
]


</script>
<template>
  <header class="z-50 bg-transparent">
    <nav class="bg-transparent mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1 pr-4">
        <a href="#" class="">
          <span class="sr-only">Logo envol</span>
          <img class="h-auto aspect-ratio-round w-42" :src="logo.src" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="isMobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <span class="i-heroicons-bars-3 h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-6 xl:gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           tabindex="0"
           :class="{
          'f-text-xs font-medium leading-6':true,
          'text-gray-900 hover:text-primary':currentPath !== item.href,
          'text-primary':currentPath === item.href
        }"

        >{{ item.name }}</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="link hidden xl:inline-block">Soutenir Envol <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <TransitionRoot as="template" :show="isMobileMenuOpen">
    <Dialog as="div" class="lg:hidden " @close="isMobileMenuOpen = false" >
      <div class="bg-gray-900/50 fixed inset-0 z-50" />
      <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
      <DialogPanel class="bg-white fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Envol logo</span>
            <img class="h-8 w-auto" :src="logo.src" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-primary focus:text-primary" @click="isMobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <span class="i-heroicons-x-mark w-6 h-6 text-current" />
          </button>
        </div>
        <div class="mt-6 flow-root bg-transparent">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class=" hover:bg-gray-50"
                 :class="{
          '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ':true,
          'text-gray-900':currentPath !== item.href,
          'text-primary bg-gray-50':currentPath === item.href
        }"

              >{{ item.name }}</a>
            </div>
            <div class="py-6">
              <a href="/soutenir-envol" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Soutenir Envol <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </DialogPanel>
      </TransitionChild>
    </Dialog>
    </TransitionRoot>
  </header>
</template>