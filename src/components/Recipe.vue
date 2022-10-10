<template>
    <div class="recipe-block">
       <h1>{{title}}</h1>
       <img :src="image_url" /> 
       <p v-for="(step, index) in recipe">
          <p>{{ $t('wording.step') + ' ' + (index + 1) }}</p>
          {{ step }}
       </p>
    </div>
</template>

<script>
export default{
  props: {
    title: {
      type: String,
      default: ''
    },
    image_url: {
      type: String,
      default: ''
    },
    recipe: {
      type: Array,
      default: ()=>[]
    }
  }
}
</script>

<style>
    .recipe-block{
        background-color: gray;
    }

    img{
      width: 100%
    }

    @media (min-width: 500px) {
      .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
      }

    }
</style>
