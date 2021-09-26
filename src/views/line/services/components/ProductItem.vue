<template>
  <div class="products">
    <h5>{{ title }}</h5>
    <div class="row" v-for="product in products" :key="product.id">
      <div class="col-6">
        {{ product.title }}
      </div>
      <div class="col-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Category Name",
    },
    products: {
      default: [],
    },
  },
};
</script>

<style>
</style>