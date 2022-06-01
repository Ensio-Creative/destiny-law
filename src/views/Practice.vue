<script setup  >
import FooterVue from '../components/Footer.vue';

// interface IPractice {
//   title: string,
//   img: string,
//   text: string,
// }

const practices = [
  {
    title: 'Corporate and Commercial Practice',
    img: 'corprate.png',
    text: 'We provide legal advice to business-related matters that cut across a wide range of industries and sectors.'
  },
  {
    title: 'Litigation and Dispute Resolution',
    img: 'liti.png',
    text: 'Our team are skilled and ready to get the job done in the area of litigation and dispute resolution.'
  },
  {
    title: 'Oil and Gas',
    img: 'oil.png',
    text: 'Our team provides legal advice that benefits our clients from our wealth of knowledge in the oil and gas law.'
  },
  {
    title: 'Maritime',
    img: 'mari.png',
    text: 'We provide legal services in maritime industry with experienced workforce well-positioned for the best.'
  },
  {
    title: 'Intellectual Property',
    img: 'monalisa.png',
    text:'Our team have the capacity to ensure that our clients receive the best protection available for their intellectual property.'
  },
  {
    title: 'Environment',
    img: 'envi.png',
    text: 'Our team advices clients on all aspects of environmental law in protecting their businesses and communities.'
  },
  {
    title: 'Technology',
    img: 'tech.png',
    text: 'Our legal team thoroughly understands the needs of our clients to be highly competitive while providing legal guidiance and advice.'
  },
  {
    title: 'Finance',
    img: 'fina.png',
    text: 'Our team of financial expert helps our clients to effectively navigate in the ever evolving financial environment that enhance their transactions.'
  }
] 
</script>

<template>  
  <div class="container mb-10">
    <!-- Desktop -->
    <div class="w-[49rem] m-auto hidden lg:block">
      <div class="flex justify-between" v-for="practice in practices" :key="practice.title">
      <img class="w-[397px] h-[276px]" :src="`/img/${practice.img}`" alt="">
      <div class="pl-[20px]">
        <div class="border-line" />
        <img class="relative left-[-11px] bottom-[287px]" src="/img/round2.svg" alt="">
      </div>
      <div class="w-[20rem]">
        <h3 class="reco font-semibold text-[30px]">{{ practice.title }}</h3>
        <p class="text-[20px] font-inter">{{ practice.text }}</p>
      </div>
    </div>
    </div>
    <!-- Mobile -->
    <div class="w-[14rem] md:w-[30rem] m-auto">
      <div class="border-l border-[#818181] pl-8 pb-5 lg:hidden" v-for="practice in practices" :key="practice.title">
      <img class="relative left-[-36px] bottom-[1px]" src="/img/round.svg" alt="">
      <img class="w-[204px] h-[100px] md:w-[330px] md:h-[190px]" :src="`/img/${practice.img}`" alt="">
      <!-- <div class="border-[#818181] border-y h-5"/> -->
      <div class="">
        <h3 class="reco font-semibold text-[16px] w-[183px] py-3 md:w-[220px] md:text-[20px]">{{ practice.title }}</h3>
        <p class="text-[11px] font-inter md:text-[18px]">{{ practice.text }}</p>
      </div>
    </div>
    </div>
  </div>
  <FooterVue />
</template>


<style scoped>
.border-line {
  height: 275px;
  border-left: 1px solid #818181;
  margin-top: 20px;
}
</style>