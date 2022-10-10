<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/recipe">Generate Recipe</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<script>

  import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped></style>
