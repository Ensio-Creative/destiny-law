<script setup  >
import FooterVue from '../components/Footer.vue';
import CardVue from '../components/Card.vue';
// interface IPractice {
//   title: string,
//   img: string,
//   text: string,
// }

const practices = [
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
  },
  {
    title: 'Maritime',
    img: 'mari.svg',
    text: 'We provide legal services in maritime industry with experienced workforce well-positioned for the best.'
  },
  {
    title: 'Intellectual Property',
    img: 'init.svg',
    text:'Our team have the capacity to ensure that our clients receive the best protection available for their intellectual property.'
  },
  {
    title: 'Environment',
    img: 'env.svg',
    text: 'Our team advices clients on all aspects of environmental law in protecting their businesses and communities.'
  },
  {
    title: 'Technology',
    img: 'tech.svg',
    text: 'Our legal team thoroughly understands the needs of our clients to be highly competitive while providing legal guidiance and advice.'
  },
  {
    title: 'Finance',
    img: 'fin.svg',
    text: 'Our team of financial expert helps our clients to effectively navigate in the ever evolving financial environment that enhance their transactions.'
  }
] 
</script>

<template>  
<section class="overly h-[221px] lg:h-[460px] text-white">
    <div class="container h-[221px] lg:h-[460px] flex items-center">
      <div>
        <h2 class="reco font-semibold text-[27px] lg:text-[55px]">Practice Areas</h2>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <p class="font-inter text-[16px] py-6">
      We have set a high standard and reputation for excellence across all sectors and practice areas for bespoke client services.
    </p>
    </div>
  </section>

  <div class="container mb-10">
    <CardVue class="mb-8" v-for="practice in practices" :key="practice.title" :title="practice.title" :img="practice.img" :text="practice.text" />
  </div>
  <FooterVue />
</template>


<style scoped>
.border-line {
  height: 275px;
  border-left: 1px solid #818181;
  margin-top: 20px;
}
.overly {
    background: linear-gradient(rgba(0,0,0,.48),rgba(0,0,0,.48)),url(/img/practice.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .shadow-box {
    box-shadow: 2.76574px 0px 19.3602px 0.921914px rgba(0, 0, 0, 0.2);
  }
</style>