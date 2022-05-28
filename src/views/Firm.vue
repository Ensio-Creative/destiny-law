<script setup lang="ts">
import FooterVue from '../components/Footer.vue';
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-5">
      <div class="bg-[#F7F7F7] rounded-xl p-5">
      <h4 class="reco font-semibold text-[22px] text-black lg:text-[35px]">Our Story</h4>
      <p class="font-inter pt-3 text-[12px] lg:text-[15px]">
        Destiny Law Firm established in 2006 is a commercial law firm that practice based on a reputation of providing clients with quality legal services founded on professionalism, integrity and absolute dedication to clients. We employ the best practice in profession with a view of giving our clients the utmost satisfaction, confidence and also surpassing clients' expectations. We are aware of the need for organizations to seek advice in relation to various aspects of the law in Nigeria and has to this effect equipped ourselves with competent solicitors. The combined experience of the entire staff ensure that the firm is in a position to handle at all times and without delay the diverse need of our clients. We also strive to keep abreast with the innovations in the industry's ever increasing challenge.
      </p>
    </div>

    <div class="bg-[#45D279] rounded-xl p-5">
      <h4 class="reco font-semibold text-[22px] text-white lg:text-[35px]">Our Mission</h4>
      <p class="pt-3 font-inter text-[24px] lg:text-[31px]">
        To provide a quality legal 
        services with practical and 
        innovative legal solutions 
        in achieving our clients' 
        objectives.
      </p>
    </div>
    </div>
    
    <div class="my-16">
      <div class="text-center">
        <h3 class="reco font-semibold text-[22px] lg:text-[35px] pl-2">Meet the Attorneys</h3>
        <p class="font-inter text-[12px]  lg:text-[18px] lg:pl-96 lg:pr-96">We are a small group of attorneys with proven experience and results. </p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 py-10 font-inter">
        <div class="">
          <img src="/img/pst.png" alt="">
          <p class="text-[12px] font-semibold lg:text-[16px] pl-2">Odili Amechi Valentine Esq.</p>
          <p class="theme-color text-[12px] lg:text-[16px] pl-2">Managing Partner</p>
        </div>
        <div>
          <img src="/img/pst.png" alt="">
          <p class="text-[12px] font-semibold lg:text-[16px] pl-2">Odili Regina Worlu M.S.</p>
          <p class="theme-color text-[12px] lg:text-[16px] pl-2">Head of Chambers </p>
        </div>
        <div>
          <img src="/img/pst.png" alt="">
          <p class="text-[12px] font-semibold lg:text-[16px] pl-2">Okporo Binoyu Esq.</p>
          <p class="theme-color text-[12px] lg:text-[16px] pl-2">Associate  </p>
        </div>
        <div>
          <img src="/img/pst.png" alt="">
          <p class="text-[12px] font-semibold lg:text-[16px] pl-2">Ebere Chimenem Kelvin</p>
          <p class="theme-color text-[12px] lg:text-[16px] pl-2">Associate  </p>
        </div>
        <div>
          <img src="/img/pst.png" alt="">
          <p class="text-[12px] font-semibold lg:text-[16px] pl-2">Atata Aveiechi Rhodhalein</p>
          <p class="theme-color text-[12px] lg:text-[16px] pl-2">Secretary</p>
        </div>
      </div>
    </div>
  </div>
  <FooterVue />
</template>


<style scoped>

</style>