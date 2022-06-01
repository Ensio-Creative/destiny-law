<script setup  >
import { ref } from 'vue'
import FooterVue from '../components/Footer.vue';
import CardVue from '../components/Card.vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
// interface IMinPractices {
//   img: string
//   title: string
// }


const minPractices = [
  {
    title: 'Corporate and Commercial Practice',
    img: 'corprate.svg',
    text: 'We provide legal advice to business-related matters that cut across a wide range of industries and sectors.'
  },
  {
    title: 'Litigation and Dispute Resolution',
    img: 'ligit.svg',
    text: 'Our team are skilled and ready to get the job done in the area of litigation and dispute resolution.'
  },
  {
    title: 'Oil and Gas',
    img: 'oil.svg',
    text: 'Our team provides legal advice that benefits our clients from our wealth of knowledge in the oil and gas law.'
  }
]

const settings = {
      itemsToShow: 1,
      snapAlign: 'center',
    }

    const myCarousel = ref(null);
</script>

<template>
  <div>
    <section class="overly h-[383px] lg:h-[700px] text-white">
      <div class="container h-[383px] lg:h-[700px] flex items-center">
        <div>
          <h2 class="reco font-semibold text-[27px] lg:text-[55px] mt-16">Destiny Law Firm</h2>

          <p class="font-inter text-[16px] pt-3 pb-5 lg:text-[22px] lg:w-[649px]"> We are one of the premier law firms in Nigeria with breadth and 
              depth of experience in providing effective legal services to the 
              needs of our clients.
         </p>
        <button class="bg-[#45D279] font-inter rounded-full text-[16px] h-[45px] w-[120px] lg:text-[17px] lg:w-[170px] lg:h-[55px] mt-3">Learn more</button> 
        </div>
      </div>
    </section>

    <section class="container lg:grid grid-cols-2 gap-4 lg:py-24 py-16">
      <div class="col-end-7 col-span-2 lg:order-2 lg:w-[565px]">
        <h4 class="text-[12px] font-inter pb-4 lg:text-[14px] lg:mt-[75px]">THE FIRM</h4>
        <h3 class="reco theme-color text-[22px] font-semibold lg:text-[35px] lg:w-[518px]">
          We hold ourselves accountable
          to high standard of service
          delivery and client satisfaction 
        </h3>

        <p class="text-[12px] font-inter pt-4 lg:text-[16px] lg:w-[500px]">
          We are one of the outstanding law firms that provides legal services with proven practical legal solutions in achieving our client's objectives.
        </p>

        <router-link class="flex font-inter text-[12px] font-medium pt-5 pb-8 lg:text-[14px] w-40"  to="/the-firm">Learn More <img class="w-[20px] pl-2" src="/img/arrow.svg" alt=""></router-link>
      </div>
      <div class="lg:w-[503px]">
        <img class="" src="/img/offset.svg" alt="">
      </div>
    </section>

    <section class="bg-[#F7F7F7] py-20 lg:py-24">
      <div class="container">
        <h4 class="text-[12px] font-inter pb-4 lg:text-[16px]">PRACTICE AREAS</h4>
        <h3 class="reco theme-color text-[22px] font-semibold lg:text-[35px] lg:w-[535px]">
          We provide excellent legal 
          services across a range 
          of sectors 
        </h3>
        <div class="hidden lg:grid grid-cols-3 gap-4 mt-10 ">
          <router-link to="/practice-areas" v-for="min in minPractices" :key="min.title">
            <CardVue class="h-[325px]" :title="min.title" :img="min.img" :text="min.text" />
          </router-link>
        </div>

      <Carousel :items-to-show="1" :wrap-around="true" ref="myCarousel">
        <Slide class="lg:hidden mt-10" v-for="min in minPractices" :key="min.title">
          <router-link to="/practice-areas" class="text-left">
            <CardVue class="move-text" :title="min.title" :img="min.img" :text="min.text" />
          </router-link>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <div class="float-right w-[92px] mt-2 lg:hidden">
        <button class="bg-[#45D279] w-[30px] h-[30px] p-2 m-2 rounded-full " @click="myCarousel.prev()"><img class="w-[20px] rotate-180" src="/img/arrow.svg" alt=""></button>
        <button class="bg-[#45D279] w-[30px] h-[30px] p-2 m-2 rounded-full " @click="myCarousel.next()"><img class="w-[20px]" src="/img/arrow.svg" alt=""></button>
      </div>
      </div>
    </section>
    <FooterVue />
  </div>
</template>


<style scoped>

  .overly {
    background: linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url(/img/home.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .move-text {
    text-align: left !important;
  }

</style>