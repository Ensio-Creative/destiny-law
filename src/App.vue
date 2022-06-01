<script setup  >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed, watch, reactive } from 'vue'
import { useRoute } from 'vue-router'

import MobileNavVue from "./components/MobileNav.vue";

import DesktopNav from './components/DesktopNav.vue'

const router = useRoute()

const pageName = computed(() => {
  return router.name
})

// const showBgHero = ref(true)
const state = reactive({
  showBgHero: true
})

watch(pageName,() => {
  if (router.name === 'Contact-us') {
    state.showBgHero = false
  } else {
    state.showBgHero = true
  }
})

</script>

<template>
  <DesktopNav class="desktop" />
  <MobileNavVue class="mobile" />
  <router-view/>
</template>

<style>

</style>
