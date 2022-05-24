<script setup lang="ts">
import links from '../static'
</script>

<template>
  <div class="container">
    <nav class="bg-black text-white flex justify-between">
        <div>
          <img class="w-[93px]" src="/img/logo.png" alt="">
        </div>
        <div class="mr-20">
          <ul class="flex">
            <li class="p-4 font-inter font-normaltext-base" v-for="link in links" :key="link.title">
              <router-link :to="link.link">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>


<style scoped>

</style>