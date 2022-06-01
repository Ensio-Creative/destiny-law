<script setup>
import { watch, computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import Contact from './Contact.vue'
</script>

<template>
  <div class="">
    <div class="bg-white w-full h-[240px] lg:h-[285px] text-center lg:text-left text-black" v-if="$route.name === 'Contact-us'">
      <div class="container pt-20">
        <h2 class="reco text-[23px] font-semibold lg:text-[55px]">
          Contact us
        </h2>
        <p class="inter font-normal pt-3 lg:text-[18px] lg:pr-[40rem]">
          We know what’s at stake for clients and we
          make ourselves available to achieve 
          their objectives
        </p>
      </div>
    </div>
  </div>
      <Contact v-if="$route.name === 'Contact-us'" />
</template>


<style scoped>

</style>