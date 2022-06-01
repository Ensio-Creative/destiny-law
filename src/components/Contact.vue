<script setup  >

</script>


<template>
  <div class="bg-white font-inter">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-inter">
        <div class="md:order-2 md:mb-20">
          <form class="bg-[#45D279] rounded-xl p-8"> 
            <div class="p-3">
              <input type="text" placeholder="Name" class="text-white border-0 border-b border-white form-ele w-full">
            </div>
            <div class="p-3">
              <input type="email" placeholder="Email" class="text-white border-0 border-b border-white form-ele w-full">
            </div>
            <div class="p-3">
              <input type="text" placeholder="Phone" class="text-white border-0 border-b border-white form-ele w-full">
            </div>

            <div class="p-3">
              <textarea name="" id="" rows="5" placeholder="Type your message" class="text-white border-0 border-b border-white form-ele w-full"></textarea>
            </div>

            <button class="bg-white rounded-full w-full p-2 mb-5 md:w-[181px]">Send Message</button>
          </form>
        </div>
        <!-- contact info -->
        <div class="text-white my-10 md:order-1">
          <div>
            <h5 class="theme-color text-[13px] tracking-widest pb-2">ADDRESS</h5>
            <p class="lg:pr-[245px] text-black">
              8 Iriebe Street, D/Line, Port Harcourt,Rivers State, Nigeria
            </p>
          </div>

          <div class="pt-3 md:pt-10">
            <h5 class="theme-color text-[13px] tracking-widest pb-2">PHONE</h5>
            <p class="text-black">
              +234(0) 803 504 7498
            </p>
          </div>

          <div class="pt-3 md:pt-10">
            <h5 class="theme-color text-[13px] tracking-widest pb-2">EMAIL</h5>
            <p class="text-black">
              legal@destinylawfirm.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>