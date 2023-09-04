<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <header>
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <!--            <img class="h-10 w-auto" src="../assets/img/logo/logo.svg"   />-->
            <nuxt-link href="/portfolio" class="inline-block
           px-4 border border-transparent  text-base
           font-bold  font-sans text-black ">Folio</nuxt-link>

          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="ml-10 ">
          <!--          <a href="#" class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign in</a>-->
          <a href="#" class="inline-block
           px-4 border border-transparent  text-base
           font-bold  font-sans text-black hover:text-indigo-400 ">about me.</a>


          <a href="#" class="inline-block
           px-4 border border-transparent  text-base
           font-bold  font-sans text-black hover:text-indigo-400 ">contact me.</a>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">
          {{ link.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
/*const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
]*/

/*export default {
  setup() {
    return {
      navigation,
    }
  },
}*/
</script>