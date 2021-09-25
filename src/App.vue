<template>
  <div>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      color="#ff850c"
      :opacity="1"
      :is-full-page="fullPage"
      :lock-scroll="true"
    ></loading>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    offsetTop: 0,
    stick: false,
    fullPage: true,
  }),
};
</script>