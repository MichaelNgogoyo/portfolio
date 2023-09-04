<script lang="ts" setup>
</script>
<template>
  <div class="bg-cover" style="background-image: url('/bg-1.jpg'); ">

    <div class="justify-center flex-wrap m-auto mt-8 bg-gradient-to-b from-white/50 to-slate-50">
      <div class="box-content h-screen w-[1275px] justify-around p-4 m-3 border-8 border-transparent ">
        <Header/>

        <slot/>

        <!--        <Footer/>-->
      </div>
    </div>
  </div>
</template>