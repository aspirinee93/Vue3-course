<template>
  <the-header />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style scoped></style>