<template>
  <div>
    <selectCategory
      v-if="currentPage == 'selectCategory'"
      @changePage="setCurrentPage"
    />
    <selectProducts v-if="currentPage == 'selectProducts'" />
  </div>
</template>

<script>
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
    setCurrentPage(pageName) {
      this.currentPage = pageName;
    },
  },
};
</script>

<style>
</style>