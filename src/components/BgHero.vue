<script setup lang="ts">
import { watch, computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

interface PageContent {
  name: string,
  img: string,
  heading: string,
  text: string
}

const router = useRoute()

const pageContent: PageContent[] = [
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
  }
] 

const state = reactive({
  contentShown: {} | undefined
})

let contentShown: undefined | PageContent = ref({})

  const pageName = computed(() => {
    return router.name
  })

  watch(pageName,() => {
    console.log(router.name)
    const result = pageContent.find(item => item.name === router.name)
    contentShown = result
    console.log(contentShown)
  })

const img = '/img/logo.png'
</script>

<template>
  <div class="bg-black w-full h-[285px] text-center">
    <div class="container pt-20">
      <h2 class="theme-color reco text-[23px] font-semibold">
        {{contentShown?.heading}}
      </h2>
      <p class="text-white inter font-normal pt-3">
        {{contentShown?.text}}
      </p>
      <div>
        <img :src="contentShown?.img" alt="">
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>