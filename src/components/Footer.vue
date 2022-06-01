<script setup  >
import ConsultVue from './Consult.vue';
</script>

<template>
  <div>
    <ConsultVue />
    <footer class="bg-black font-inter">
      <div class="container py-20">
        <img class="w-[93px] mobile" src="/img/footer-logo.png" alt="">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 text-white pt-9">
          <div class="md:col-span-1 desktop">
            <img class="w-[150px]" src="/img/footer-logo.png" alt="">
          </div>
          <div class="font-inter col-start-1 col-end-3 md:col-span-1">
            <h6 class="font-inter font-bold text-[14px] pb-2">Contact Us</h6>
            <p class="text-[14px] pb-4">
              8 Iriebe Street, D/Line, 
              Port Harcourt, Rivers State, 
              Nigeria
            </p>
            <p class="text-[14px]">+234 803 504 7498</p>
            <p class="text-[14px]">legal@destinylawfirm.com</p>
          </div>
          <div class="font-inter col-end-7 col-span-2 md:col-span-1">
            <h6 class="font-inter font-bold text-[14px] pb-2">Menu</h6>
            <ul>
              <li class="py-1">
                <router-link to="/the-firm">The Firm</router-link>
              </li>
              <li class="py-1">
                <router-link to="/practice-areas">Practices</router-link>
              </li>
              <li class="py-1">
                <router-link to="/contact-us">Contact Us</router-link>
              </li>
            </ul>
          </div>
          <div class="font-inter text-white md:col-span-1">
            <h6 class="font-inter font-bold text-[14px] pb-2">Follow Us</h6>
            <div class="flex justify-between w-[200px]">
              <div class="w-10 h-10 bg-[#333] rounded-full text-center">
                <img class="w-[12px] m-auto pt-[10px]" src="/img/fb.svg" alt="">
              </div>
              <div class="w-10 h-10 bg-[#333] rounded-full text-center">
                <img class="w-[21px] m-auto pt-[10px]" src="/img/tw.svg" alt="">
              </div>
              <div class="w-10 h-10 bg-[#333] rounded-full text-center">
                <img class="w-[20px] m-auto pt-[10px]" src="/img/ig.svg" alt="">
              </div>
              <div class="w-10 h-10 bg-[#333] rounded-full text-center">
                <img class="w-[20px] m-auto pt-[10px]" src="/img/li.svg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-[#45D279] w-full mt-10 md:hidden" />
        <!-- <hr class="theme-color mt-8"> -->
        <div class="text-white text-center md:flex justify-between pt-20">
          <p class="pb-10 md:pb-0 text-[12px]">&copy; {{ new Date().getFullYear() }} Destiny Law Firm.</p>
          <p class=" text-[12px]">Design & Development: <a href="https://ensiocreative.com/" target="_blank" rel="noopener noreferrer">Ensio Creative</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>

</style>