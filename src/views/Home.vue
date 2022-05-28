<script setup lang="ts">
import FooterVue from '../components/Footer.vue';

interface IMinPractices {
  img: string
  title: string
}

const minPractices: IMinPractices[] = [
  {
    img: 'corprate2.png',
    title: 'Corporate and Commercial Practice'
  },
  {
    img: 'bar.png',
    title: 'Litigation and Dispute Resolution'
  },
  {
    img: 'oil2.png',
    title: 'Oil and Gas'
  }
]
</script>

<template>
  <div>
    <section class="container lg:grid grid-cols-2 gap-4 mt-20 mb-32">
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

    <section class="bg-[#F7F7F7] py-36">
      <div class="container">
        <h4 class="text-[12px] font-inter pb-4 lg:text-[16px]">PRACTICE AREAS</h4>
        <h3 class="reco theme-color text-[22px] font-semibold lg:text-[35px] lg:w-[396px]">
          We provide excellent legal 
          services across a range 
          of sectors 
        </h3>
        <div class="grid grid-cols-3 gap-4 mt-10">
          <div class="bg-white p-5 rounded-[15px] h-[497px]" v-for="min in minPractices" :key="min.title">
            <img class="h-[308px]" :src="`/img/${min.img}`" alt="">
            <h4 class="text-[23px] font-inter py-3 h-[100px]">{{ min.title }}</h4>
            <img class="w-[28px]" src="/img/arrow.svg" alt="">
          </div>
        </div>
      </div>
    </section>
    <FooterVue />
  </div>
</template>


<style scoped>

</style>