<script setup  >
import links from '../static'
</script>

<template>
  <div class="bg-white">
    <nav class="container text-black my-2">
        <div class="flex justify-between md:py-4">
          <div>
          <img class=" w-[150px]" src="/img/logo.png" alt="">
        </div>
        <div class="mr-12">
          <ul class="flex">
            <li class="p-2 font-inter font-normaltext-base text-[16px]" v-for="link in links" :key="link.title">
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