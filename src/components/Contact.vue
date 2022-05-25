<script setup lang="ts">

</script>


<template>
  <div class="bg-black font-inter">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-inter">
        <div class="col-end-7 col-span-2">
          <form class="bg-white rounded-xl p-5"> 
            <div class="p-3">
              <input type="text" placeholder="Name" class="text-black border-0 border-b border-black form-ele">
            </div>
            <div class="p-3">
              <input type="email" placeholder="Email" class="text-black border-0 border-b border-black form-ele">
            </div>
            <div class="p-3">
              <input type="text" placeholder="Phone" class="text-black border-0 border-b border-black form-ele">
            </div>

            <div class="p-3">
              <textarea name="" id="" rows="5" placeholder="Type your message" class="text-black border-0 border-b border-black form-ele"></textarea>
            </div>

            <button class="bg-[#45D279] rounded-full w-full p-2">Send Message</button>
          </form>
        </div>
        <!-- contact info -->
        <div class="text-white my-10 col-start-1 col-end-3">
          <div>
            <h5 class="theme-color text-[13px] tracking-widest pb-2">ADDRESS</h5>
            <p>
              8 Iriebe Street, D/Line, Port Harcourt,Rivers State, Nigeria
            </p>
          </div>

          <div class="pt-3">
            <h5 class="theme-color text-[13px] tracking-widest pb-2">PHONE</h5>
            <p>
              +234(0) 803 504 7498
            </p>
          </div>

          <div class="pt-3">
            <h5 class="theme-color text-[13px] tracking-widest pb-2">EMAIL</h5>
            <p>
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