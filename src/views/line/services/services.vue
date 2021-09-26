<template>
  <div>
    <selectCategory
      v-if="currentPage == 'selectCategory'"
      @changePage="setCurrentPage"
    />
    <selectProducts
      v-if="currentPage == 'selectProducts'"
      @changePage="setCurrentPage"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import selectCategory from "./selectCategory.vue";
import selectProducts from "./selectProducts.vue";

export default {
  components: {
    selectCategory,
    selectProducts,
  },
  data: () => ({
    currentPage: "selectCategory",
  }),
  methods: {
    ...mapActions({
      loadCategoriesWithProducts: "categories/loadCategoriesWithProducts",
    }),
    setCurrentPage(pageName) {
      this.currentPage = pageName;
    },
  },
  async created() {
    this.loadingStart();
    await this.loadCategoriesWithProducts();
    this.loadingStop();
  },
};
</script>

<style>
</style>