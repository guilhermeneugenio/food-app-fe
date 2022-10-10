<template>
    <Carousel :results="resultsJSON"></Carousel>
  </template>
  
  <script>
    import Carousel from '@/components/Carousel.vue';
    import resultsJSON from '@/assets/test_results.json';
  
  
    export default {
      components: {
        Carousel
      },
      setup(){
        return {
            resultsJSON
        }
      }
    }
  </script>
  
  <style></style>
  