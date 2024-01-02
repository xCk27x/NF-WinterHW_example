<template>
  <div class=" top-0 w-full bg-slate-200 backdrop-blur">
    <nav-bar></nav-bar>
    <slot />
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>
