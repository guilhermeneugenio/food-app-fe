
<template>
  <Recipe :id="$route.params.id"></Recipe>
</template>

<script>
import Recipe from "../components/Recipe.vue";

export default {
  components: {
    Recipe,
  },
};
</script>

<style></style>
