<template>
  <div :class="classes.container" class="flex py-2 px-1 mb-2 rounded relative space-x-3">
      <span v-if="theme === 'success'" class="flex shrink-0 grow-0 justify-center items-center h-5 w-5 rounded-full bg-green-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-700" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
      </span>
    <span v-else-if="theme==='error'" class="flex shrink-0 grow-0 justify-center items-center h-5 w-5 rounded-full bg-red-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-red-700 h-4" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/></svg>
      </span>
    <span v-else class="flex shrink-0 grow-0 justify-center items-center h-5 w-5 rounded-full bg-sky-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-sky-700 h-4" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/></svg>
      </span>
    <div>
      <h4 class="font-bold">{{title}}</h4>
      <p class="text-sm">{{description}}</p>
    </div>

    <button class="absolute -right-1 -top-1 hover:scale-105">
      <svg xmlns="http://www.w3.org/2000/svg" :class="classes.close" class="h-5 transition-all" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
    </button>
  </div>
</template>

<script lang="ts">
//withDefaults(
//    defineProps<{variant?: string;}>(),
//    {
//      variant: "dark",
//    }
//  );
export default {
  name: "Toast",
  props:{
    theme:{type: String, default:'info'},
    title:{type: String, required: true},
    description:{type: String, default:''},
  },
  setup(props){
    const classes = computed(() => {
      let classes = {
        container:'',
        close:''
      }
      switch (props.theme) {
        case 'success':
          classes.container = 'bg-green-600 text-green-50'
          classes.close = 'fill-green-100 hover:fill-green-300'
          break;
        case 'error':
          classes.container = 'bg-red-600 text-red-50'
          classes.close = 'fill-red-100 hover:fill-red-300'
          break;
        default:
          classes.container = 'bg-sky-600 text-sky-50'
          classes.close = 'fill-sky-100 hover:fill-sky-300'
      }

      return classes
    })

    return {classes}

  }
}
</script>

<style scoped>

</style>