<template>
  <div class="container">
    <div class="p-4 text-center">
      <h1>เลือกบริการ</h1>
      <div class="row">
        <div class="col-6" v-for="category in categories" :key="category.id">
          <div class="card bg-primary">
            <div class="card-body" @click="setActive(category.id)">
              <div>
                <img :src="category.image" alt="" />
              </div>

              {{ category.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      categories: "categories/categories",
    }),
  },
  methods: {
    ...mapActions({
      loadCategoriesWithProducts: "categories/loadCategoriesWithProducts",
      setCategoryActive: "categories/setCategoryActive",
    }),
    setActive(id) {
      this.setCategoryActive(id);
      this.$emit("changePage", "selectProducts");
    },
  },
  async created() {
    this.loadingStart();
    await this.loadCategoriesWithProducts();
    this.loadingStop();
  },
};
</script>
