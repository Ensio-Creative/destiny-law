<script setup  >
import links from '../static'
</script>

<template>
  <div class="bg-black">
    <nav class="container text-white">
        <div class="flex justify-between md:pt-4">
          <div>
          <img class="mt-4 w-[150px]" src="/img/logo.png" alt="">
        </div>
        <div class="mr-12">
          <ul class="flex">
            <li class="p-4 font-inter font-normaltext-base text-[18px]" v-for="link in links" :key="link.title">
              <router-link :to="link.link">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  </div>
</template>


<style scoped>

</style>