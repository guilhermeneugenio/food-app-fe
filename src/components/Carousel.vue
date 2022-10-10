<template>
    <div v-for="(result, key) in results">
        <div v-if="result">
            <p>
                {{ key }}
            </p>
            <Card :recipe="result"/>
        </div>
    </div>
    
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  export default{
    components: {
        Card
      },
    props: {
        results: {
            type: Object,
            default: () => {}
        }
    }
    }
  </script>
  
  <style></style>
  