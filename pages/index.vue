<script setup lang="ts">

definePageMeta({
  layout: "portfolio-layout"
})

//fetch data from directus
// const { data: posts} = await useFetch('http://localhost:8055/items/posts')


// More files...






</script>
<template>
  <div>
    <div class="justify-center flex ">
    <span class="h-32 w-32 fill-green-400">
    <svg class="text-green-700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 20 20"><g fill="none"><path
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm9.958-3.8a.5.5 0 1 0-.916-.4l-3.5 8a.5.5 0 1 0 .916.4l3.5-8zM6.854 7.646a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.207 10l1.647-1.646a.5.5 0 0 0 0-.708zm6.292.708L14.793 10l-1.647 1.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708z"
        fill="currentColor"></path></g></svg>
    </span>
    </div>

    <div class="flex justify-center text-8xl font-bold">
      <span>Code. Eat. Sleep.</span>
    </div>
    <br>

    <div class="flex justify-center text-2xl">
      <p> I create meaningful solutions for your brand products. <br>
        Give your customers the best experience possible.
      </p>
    </div>

    <div class="flex justify-center">
      <button class="flex justify-center rounded-full bg-blue-500 hover:bg-blue-600 py-4 mt-4 px-8 mb-40">
        Explore works
      </button>
    </div>
  </div>

  <!--   Div section-->
  <div class="flex justify-center px-6 gap-x-4 gap-y-6 gap-y-8 mt-8 py-8 grid grid-cols-2">

    <!--    <div v-for="t in posts">-->
    <!--      <p>{{t.title}}</p>-->
    <!--      <NuxtLink to="/products/${p.id}" >{{ t.name }}</NuxtLink>-->
    <!--      <img class="h-100 w-100 rounded-full" src="/bg-1.jpg" alt="No image">
          <p class="flex justify-center"> Hello section 1</p>-->
  </div>

  <!--  </div>-->

  <!--  load more works-->
  <div class="flex justify-center pb-24">
    <button class="bg-white rounded-full px-4 py-4 outline outline-1 uppercase font-bold text-sm ">
      Load more works
    </button>
  </div>

  <!--  contact section-->
  <div class="flex justify-center">
    <div>

      <p class="">
        <svg class="text-green-400  w-8 inline-block pr-2" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
          <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z" fill="none"
                stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>
          <circle cx="256" cy="256" r="144" fill="currentColor"></circle>
        </svg>
        Available for freelance projects
      </p>
    </div>
  </div>

  <div class="text-center text-6xl py-12 pl-48 pr-48 font-bold">
    <p>Do you have illustration projects? Lets Talk.</p>
  </div>

  <div class="flex justify-center">
    <i>

    </i>
    <button class="uppercase bg-green-600 rounded-full py-4 px-4 text-sm text-slate-200 font-bold">
      <span>
        <svg class="w-7 inline-block" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 512 512"><path d="M60.44 389.17c0 .07 0 .2-.08.38c.03-.12.05-.25.08-.38z"
                                         fill="currentColor"></path><path
            d="M439.9 405.6a26.77 26.77 0 0 1-9.59-2l-56.78-20.13l-.42-.17a9.88 9.88 0 0 0-3.91-.76a10.32 10.32 0 0 0-3.62.66c-1.38.52-13.81 5.19-26.85 8.77c-7.07 1.94-31.68 8.27-51.43 8.27c-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 0 1 100.3 215.1a175.9 175.9 0 0 1 4.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 0 1 290.3 32c52.21 0 100.86 20 137 56.18c34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 0 1-30.3 99.15l-.19.28l-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 0 0-1.08 2.09l15.74 55.94a26.42 26.42 0 0 1 1.12 7.11a24 24 0 0 1-24.03 24.03z"
            fill="currentColor"></path><path
            d="M299.87 425.39a15.74 15.74 0 0 0-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 0 1-128.82-58.75A199.21 199.21 0 0 1 86.4 244.16C85 234.42 85 232 85 232a16 16 0 0 0-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0 0 11 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 0 0 8 22.92l.46.39A24.34 24.34 0 0 0 72 480a23.42 23.42 0 0 0 9-1.79l53.51-20.65a8.05 8.05 0 0 1 5.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0 0 74.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 0 0 1.95-16.39z"
            fill="currentColor"></path></svg>
      </span>
      Lets talk now
    </button>
  </div>

  <div class="flex justify-center mt-8">
    <p class="uppercase ">@ <span class="font-bold">{{ new Date().getFullYear() }}</span> All rights reserved</p>
  </div>
</template>


