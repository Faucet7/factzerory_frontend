<template>
  <div class="cardContainer">
    <img class="img" v-if="bgImg" :src="bgImg" alt="" />
    <div class="card"><slot></slot></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  width: String,
  height: String,
  borderRadius: String,
  bgColor: {
    type: String,
    default: "#f2f2f2",
  },
  bgImg: String,
  filter: String,
});
</script>

<style lang="less" scoped>
.cardContainer {
}
.card {
  display: flex;

  // 从props获取宽高
  height: calc(v-bind(height) * 1rem);
  width: calc(v-bind(width) * 1rem);
  background: v-bind(bgColor);

  // background: url("../assets/img/wechatcode.png");
  border-radius: 2.5rem;
  // overflow: hidden;
  // 模糊
  backdrop-filter: blur(v-bind(filter));
  // filter: blur(v-bind(filter));
  // 阴影
  box-shadow: 0.25rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
}

.img {
  // 从props获取宽高
  height: calc(v-bind(height) * 1rem - 0.5rem);
  width: calc(v-bind(width) * 1rem);
  // background: v-bind(bgColor);
  // background: url("../assets/img/wechatcode.png");
  border-radius: 2.5rem;
  margin-bottom: calc(0rem - v-bind(height) * 1em);
}
</style>
