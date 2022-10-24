<template>
  <carousel v-if="results" :items-to-show="1">
    <slide v-for="(result, key) in results" :key="key">
      <p>
        {{ key }}
      </p>
      <Card :recipe="result" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  <div v-else>
    <img
      v-bind:src="'https://theme-assets.getbento.com/sensei/62183c1.sensei/assets/images/catering-item-placeholder-704x520.png'"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Card,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    results: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
