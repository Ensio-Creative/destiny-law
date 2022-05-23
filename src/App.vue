<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import BgHeroVue from "./components/BgHero.vue";
import MobileNavVue from "./components/MobileNav.vue";

// import DesktopNav from './components/DesktopNav.vue'

</script>

<template>
  <!-- <DesktopNav /> -->
  <MobileNavVue />
  <BgHeroVue />
  <router-view/>
</template>

<style>

</style>
