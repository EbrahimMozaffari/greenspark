<template>
  <div class="container mx-auto p-7 md:p-12 shadow-xl rounded-lg font-bold ">
    <h1 class="text-3xl pb-3 mb-6 border-b-2 border-b-gray-300">Per product widgets</h1>
    <WidgetList />
  </div>
</template>

<script setup lang="ts">

import WidgetList from '../components/WidgetList.vue';


</script>

<style scoped>
.container{
  max-width: 900px;
}
</style>
