<script setup lang="ts">
import { watch, computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import Contact from './Contact.vue'

interface IPageContent {
  name: string,
  img: string,
  heading: string,
  text: string
}

const router = useRoute()

const pageContent: IPageContent[] = [
  {
    name: 'Home',
    img: '/img/home.png',
    heading: 'Welcome to Destiny Law Firm',
    text: 'We are one of the premier law firms in Nigeria with breadth and depth of experience in providing effective legal services to the needs of our clients.'
  },
  {
    name: 'Firm',
    img: '/img/firm.png',
    heading: 'The Firm',
    text: 'Destiny Law Firm is a commercial law firm that provides the best of solutions to your legal needs with excellent attorneys.'
  },
  {
    name: 'Practice-Areas',
    img: '/img/practice.png',
    heading: 'Practice Areas',
    text: 'We have set a high standard and reputation for excellence across all sectors and practice areas for bespoke client services. '
  },
  {
    name: 'Contact-us',
    img: '',
    heading: 'Contact us',
    text: 'We know what’s at stake for clients and we make ourselves available to achieve their objectives'
  }
] 

const state = reactive({
  contentShown: {}
})
  const contentShown: any = ref({})

  const pageName = computed(() => {
    return router.name
  })

  watch(pageName,() => {
    const result = pageContent.find(item => item.name === router.name)
    contentShown.value = result
  })

// const img = '/img/logo.png'
</script>

<template>
  <div :class="[$route.name !== 'Contact-us' ? 'h-[60vh] lg:h-[130vh]' : '']">
    <div class="bg-black w-full h-[285px] lg:h-[455px] text-center" v-if="$route.name !== 'Contact-us'">
      <div class="container pt-20">
        <h2 class="theme-color reco text-[23px] font-semibold lg:text-[55px]">
          {{ contentShown?.heading }}
        </h2>
        <p class="text-white inter font-normal pt-3 lg:text-[18px] lg:pl-72 lg:pr-72">
          {{ contentShown?.text }}
        </p>
        <div v-if="$route.name !== 'Contact-us'">
          <img class="img-border mt-5 w-full lg:w-[920px] lg:h-[450px] m-auto" :src="contentShown?.img" alt="">
        </div>
      </div>
    </div>
    <div class="bg-black w-full h-[240px] lg:h-[285px] text-center lg:text-left" v-if="$route.name === 'Contact-us'">
      <div class="container pt-20">
        <h2 class="theme-color reco text-[23px] font-semibold lg:text-[55px]">
          {{ contentShown?.heading }}
        </h2>
        <p class="text-white inter font-normal pt-3 lg:text-[18px] lg:pr-[40rem]">
          {{ contentShown?.text }}
        </p>
      </div>
    </div>
  </div>
      <Contact v-if="$route.name === 'Contact-us'" />
</template>


<style scoped>

</style>