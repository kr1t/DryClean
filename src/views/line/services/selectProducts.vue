<template>
  <div>
    <div class="p-4 text-center">
      <h1>เลือกบริการ</h1>

      <!-- selectGenderActive -->
      <div class="selectGenderActive">
        <button
          class="btn"
          :class="activeClassGender('all')"
          @click="setGenderActive('all')"
        >
          ทั้งหมด
        </button>

        <button
          class="btn spaceBtn"
          :class="activeClassGender('f')"
          @click="setGenderActive('f')"
        >
          หญิง
        </button>
        <button
          class="btn spaceBtn"
          :class="activeClassGender('m')"
          @click="setGenderActive('m')"
        >
          ชาย
        </button>
      </div>
      <!-- selectGenderActive -->

      <div class="productsContainer mt-4">
        <div class="productsFemale" v-if="selectGender != 'm'">
          <ProductItem
            :title="`${categoryActive.title} (หญิง)`"
            :products="getProductsByGender('f')"
          />
        </div>
        <hr />

        <div class="productsMale" v-if="selectGender != 'f'">
          <ProductItem
            :title="`${categoryActive.title} (ชาย)`"
            :products="getProductsByGender('m')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "./components/ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters({
      categoryActive: "categories/categoryActive",
    }),
  },
  data: () => ({
    selectGender: "all",
  }),
  methods: {
    activeClassGender(name) {
      return this.selectGender == name
        ? "btn-primary"
        : "btn-outline-secondary";
    },
    setGenderActive(name) {
      this.selectGender = name;
    },
    getProductsByGender(genderName) {
      try {
        return this.categoryActive.products.filter(
          (product) => product.gender == genderName
        );
      } catch {
        return [];
      }
    },
  },
};
</script>

<style lang="scss">
.spaceBtn {
  margin-left: 12px;
}
</style>