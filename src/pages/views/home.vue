<template>
  <div class="mainContainer">
    <div class="product" v-for="product in products" v-bind:key="product.id">
      <img :src="product.src" alt="" height="100%" />
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "product1",
    src: "../../../public/demo-github-1-finShow.png",
  },
  {
    id: 2,
    name: "product2",
    src: "../../../public/demo-github-2-finShow.png",
  },
  {
    id: 3,
    name: "product2",
    src: "../../../public/demo-github-3-finShow.png",
  },
];
</script>
<style lang="less" scoped>
.mainContainer {
  width: 100%;
  height: 100%;
  .product {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
