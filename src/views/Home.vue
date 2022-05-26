<script setup lang="ts">
import FooterVue from '../components/Footer.vue';
</script>

<template>
  <div>
    <section class="container mb-10 lg:grid grid-cols-2 gap-4">
      <div class="col-end-7 col-span-2 lg:order-2 lg:w-[510px]">
        <h4 class="text-[12px] font-inter pb-4 lg:text-[16px]">THE FIRM</h4>
        <h3 class="reco theme-color text-[22px] font-semibold lg:text-[35px]">
          We hold ourselves accountable
          to high standard of service
          delivery and client satisfaction 
        </h3>

        <p class="text-[12px] font-inter pt-4 lg:text-[18px]">
          We are one of the outstanding law firms that provides legal services with proven practical legal solutions in achieving our client's objectives.
        </p>

        <router-link class="flex font-inter text-[12px] font-semibold pt-2 pb-8 lg:text-[18px]" to="/the-firm">Learn More <img class="w-[20px] pl-2" src="/img/arrow.svg" alt=""></router-link>
      </div>
      <div class="bg-[#45D279] img-border w-[259px] relative h-[173px] left-[40px] top-[28px] col-start-1 col-end-3  lg:w-[540px] lg:order-1 lg:h-[380px]">
        <img class="img-border w-[259px] absolute h-[173px] left-[-34px] top-[-35px] lg:top-[-55px] lg:w-[540px] lg:h-[380px]" src="/img/firm.png" alt="">
      </div>
    </section>
    <FooterVue />
  </div>
</template>


<style scoped>

</style>