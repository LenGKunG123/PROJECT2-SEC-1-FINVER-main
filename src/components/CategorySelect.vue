<script setup>
import { ref, toRefs } from "vue"
// import { RouterLink } from "vue-router"
import uniqolor from "uniqolor"
let randColor = ref("")
randColor.value = uniqolor.random()

const props = defineProps({ category: String, image: String })
const { category } = toRefs(props)
</script>

<template>
  <RouterLink to="library">
  <div
    class="contrast-[2] brightness-[0.87] rounded-xl aspect-square relative overflow-hidden"
  >
    <div class="text-white pt-3 pl-4 font-semibold text-lg md:text-xl lg:text-2xl">
      {{ category }}
    </div>
    <img
      class="absolute contrast-[0.55] right-0 bottom-0 max-w-[110px] h-24 lg:h-28 rounded object-cover "
      :src="image || ''"
    />
  </div>
  </RouterLink>
</template>
