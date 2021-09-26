<template>
  <div class="products">
    <h5>{{ title }}</h5>

    <div v-for="(product, i) in products" :key="product.id">
      <div class="row" v-if="i < showItem">
        <div class="col-6">
          {{ product.title }}
        </div>
        <div class="col-6"></div>
      </div>
    </div>

    <button
      class="btn btn-outline-secondary"
      @click="showItem += 3"
      v-if="products.length >= showItem"
    >
      ดูเพิ่มเติม
    </button>
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
  data: () => ({
    showItem: 3,
  }),
};
</script>

<style>
</style>