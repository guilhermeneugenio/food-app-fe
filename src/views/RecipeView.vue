
<template>
  <Recipe :title="recipeJson.name" :image_url="recipeJson.image_url"  :recipe="recipeJson.recipe"></Recipe>
</template>

<script>
  import Recipe from '../components/Recipe.vue';
  import recipeJson from '../assets/test_recipe.json';


  export default {
    components: {
      Recipe
    },
    setup(){
      return {
        recipeJson
      }
    }
   

  }
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
