<script setup>
const props = defineProps({
  title: String,
  img: String,
  text: String
})
</script>

<template>
  <div class="bg-white rounded-2xl p-8 shadow md:w-[345px]">
    <img class="w-[60px] py-6" :src="`/img/${props.img}`" alt="">
    <h5 class="reco text-[23px] pb-4 font-semibold">{{ props.title }}</h5>
    <p class="font-inter text-[16px] pb-5">
      {{ props.text }}
    </p>
  </div>
</template>


<style lang="scss" scoped>

</style>