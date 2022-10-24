<template>
    <div class="recipe-block">
       <h1>{{id}}</h1>
       <h1>{{recipeJson.name}}</h1>
       <img :src="recipeJson.image_url" /> 
       <p v-for="(step, index) in recipeJson.recipe">
          <p>{{ $t('wording.step') + ' ' + (index + 1) }}</p>
          {{ step }}
       </p>
    </div>
</template>

<script >
import recipeJson from "../assets/test_recipe.json";

import { onBeforeMount } from "vue";

export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    onBeforeMount(async () => {
      console.log(props.id);

      //await store.dispatch("fetchClients");
    });

    return {
      recipeJson,
    };
  },
};
</script>


<style>
.recipe-block {
  background-color: gray;
}

img {
  width: 100%;
}

@media (min-width: 500px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
