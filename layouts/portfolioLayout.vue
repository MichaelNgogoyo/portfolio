<script lang="ts" setup>
</script>
<template>
  <div class="bg-[url('/bg-1.jpg')] bg-cover bg-center ">

    <div class="justify-center flex-wrap pt-8 bg-gradient-to-b from-white/50 via-white/90 to-slate-50">
      <div class="box-content h-screen w-screen justify-around">
        <Header/>
        <main class="">
          <slot/>
        </main>


        <!--        <Footer/>-->
      </div>
    </div>
  </div>
</template>