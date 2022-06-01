<script setup  >
import FooterVue from '../components/Footer.vue';
const attorneys = [
  {
    img: '/img/pst.png',
    name: 'Odili Amechi Valentine Esq.',
    office: 'Managing Partner'
  },
  {
    img: '/img/pst.png',
    name: 'Odili Amechi Valentine Worlu M.S.',
    office: 'Head of Chambers'
  },
  {
    img: '/img/pst.png',
    name: 'Okporo Binoyu Esq.',
    office: 'Associate'
  },
  {
    img: '/img/pst.png',
    name: 'Ebere Chimenem Kelvin',
    office: 'Associate'
  },
  {
    img: '/img/pst.png',
    name: 'Atata Aveiechi Rhodhalein',
    office: 'Secretary'
  }
]
</script>

<template>
  <section class="overly h-[221px] lg:h-[460px] text-white">
    <div class="container h-[221px] lg:h-[460px] flex items-center">
      <div>
        <h2 class="reco font-semibold text-[27px] lg:text-[55px]">The Firm</h2>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 my-16 lg:my-24">
      <div class="bg-[#F7F7F7] rounded-xl p-10 lg:col-start-1 lg:col-end-3">
      <h4 class="reco font-semibold text-[22px] text-black lg:text-[35px]">Our Story</h4>
      <p class="font-inter pt-3 text-[12px] lg:text-[16px]">
        Destiny Law Firm established in 2006 is a commercial law firm that practice based on a reputation of providing clients with quality legal services founded on professionalism, integrity and absolute dedication to clients. We employ the best practice in profession with a view of giving our clients the utmost satisfaction, confidence and also surpassing clients' expectations. We are aware of the need for organizations to seek advice in relation to various aspects of the law in Nigeria and has to this effect equipped ourselves with competent solicitors. The combined experience of the entire staff ensure that the firm is in a position to handle at all times and without delay the diverse need of our clients. We also strive to keep abreast with the innovations in the industry's ever increasing challenge.
      </p>
    </div>

    <div class="bg-[#45D279] rounded-xl p-10 lg:w-[395px] lg:col-end-7 lg:col-span-2">
      <h4 class="reco font-semibold text-[22px] text-white lg:text-[35px]">Our Mission</h4>
      <p class="pt-3 font-inter text-[24px] lg:text-[25px]">
        To provide a quality legal 
        services with practical and 
        innovative legal solutions 
        in achieving our clients' 
        objectives.
      </p>
    </div>
    </div>
    
    <div class="mt-16 mb-12">
      <div class="text-center">
        <h3 class="reco font-semibold text-[22px] lg:text-[35px] pl-2">Meet the Attorneys</h3>
        <p class="font-inter text-[12px]  lg:text-[16px]">We are a small group of attorneys with proven experience and results. </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 pt-10 font-inter">
        <div v-for="attorney in attorneys" :key="attorney.name" class="pt-3 m-auto text-center lg:text-left">
          <img :src="attorney.img" alt="">
          <p class="text-[12px] font-medium lg:text-[16px] pl-2 pt-3">{{ attorney.name }}</p>
          <p class="theme-color text-[12px] lg:text-[14px] pl-2">{{ attorney.office }}</p>
        </div>
      </div>
    </div>
  </div>
  <FooterVue />
</template>


<style scoped>
.overly {
    background: linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url(/img/firm.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>