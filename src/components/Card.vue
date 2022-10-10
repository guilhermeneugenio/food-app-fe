<template>
    <h1>{{recipe.name}}</h1>
    <h1>{{recipe.image_url}}</h1>
    <img :src="recipe.image_url"/> 
  </template>
  
  <script>
  export default{
    props: {
        recipe: {
            type: Object,
            default: () => {}
        }
    }
    }
  </script>
  
  <style></style>
  