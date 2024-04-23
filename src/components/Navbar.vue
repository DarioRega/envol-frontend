<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import logo from '../../public/logo.svg'

defineProps<{
  navigation: { name: string, href: string }[]
  currentPath: string
}>()

const isMobileMenuOpen = ref(false)

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Critères d\'attributions', href: '/critere-d-attribution' },
  { name: 'Demande de bourse', href: '/demande-de-bourse' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Status', href: '/status' },
  { name: 'Documents', href: '/documents' },
  { name: 'Contact', href: '/contact' },
]
</script>

<template>
  <header class="bg-transparent z-50">
    <nav class="p-6 mx-auto bg-transparent flex max-w-7xl justify-between items-center lg:px-8" aria-label="Global">
      <div class="pr-4 flex lg:flex-1">
        <a href="#" class="">
          <span class="sr-only">Logo envol</span>
          <img class="aspect-ratio-round h-auto w-42" :src="logo.src" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="p-2.5 rounded-md text-gray-700 inline-flex justify-center items-center -m-2.5" @click="isMobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <span class="i-heroicons-bars-3 h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-6 xl:gap-x-12">
        <a
          v-for="item in navigation" :key="item.name" :href="item.href"
          tabindex="0"
          class="f-text-xs font-medium leading-6" :class="{
            'text-gray-900 hover:text-primary': currentPath !== item.href,
            'text-primary': currentPath === item.href,
          }"
        >{{ item.name }}</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="hidden link xl:inline-block">Soutenir Envol <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <TransitionRoot as="template" :show="isMobileMenuOpen">
      <Dialog as="div" class="lg:hidden" @close="isMobileMenuOpen = false">
        <div class="bg-gray-900/50 fixed inset-0 z-50" />
        <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
          <DialogPanel class="px-6 py-6 bg-transparent bg-white fixed w-full overflow-y-auto inset-y-0 right-0 z-50 sm:ring-1 sm:ring-gray-900/10 sm:max-w-sm">
            <div class="flex justify-between items-center">
              <a href="#" class="p-1.5 -m-1.5">
                <span class="sr-only">Envol logo</span>
                <img class="h-8 w-auto" :src="logo.src" alt="">
              </a>
              <button type="button" class="hover:text-primary focus:text-primary p-2.5 rounded-md text-gray-700 -m-2.5" @click="isMobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <span class="i-heroicons-x-mark text-current h-6 w-6" />
              </button>
            </div>
            <div class="mt-6 flow-root bg-transparent">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="py-6 space-y-2">
                  <a
                    v-for="item in navigation" :key="item.name" :href="item.href" class="px-3 py-2 block rounded-lg text-base font-semibold leading-7 -mx-3 hover:bg-gray-50"
                    :class="{
                      'text-gray-900': currentPath !== item.href,
                      'text-primary bg-gray-50': currentPath === item.href,
                    }"
                  >{{ item.name }}</a>
                </div>
                <div class="py-6">
                  <a href="/soutenir-envol" class="px-3 py-2.5 block rounded-lg text-base text-gray-900 font-semibold leading-7 -mx-3 hover:bg-gray-50">Soutenir Envol <span aria-hidden="true">&rarr;</span></a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </header>
</template>
