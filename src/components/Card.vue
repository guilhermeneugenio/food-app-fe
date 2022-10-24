<template>
  <router-link :to="'recipe/' + recipe.id">
    <h1>{{ recipe.name }}</h1>
    <img :src="recipe.image_url" />
  </router-link>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
