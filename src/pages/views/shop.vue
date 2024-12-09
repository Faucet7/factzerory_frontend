<template>
  <div class="mainContainer">
    <cardBg
      width="35.94"
      height="20.06"
      :bgColor="good.bgColor"
      :bgImg="good.bgImg"
      :filter="good.blur + 'rem'"
      class="good"
      v-for="good in goods"
      v-bind:key="good"
    >
      <div class="left">
        <img :src="good.img" alt="" />
      </div>
      <div class="right" :style="{ color: good.color }">
        <div class="title">{{ good.title }}</div>
        <div
          class="devideLine"
          :style="{ background: good.color ?? '#000' }"
        ></div>
        <div class="desc">
          {{ good.desc }}
        </div>
        <div class="price">
          滴胶亚克力 --------------------------- {{ good.price.dijiao }}￥
          <br />
          PLA(3D打印) ------------------------- {{ good.price.pla }} ￥
        </div>
        <div class="buyBtn">{{ good.buyBtn }}</div>
      </div>
    </cardBg>
  </div>
</template>

<script setup>
import cardBg from "../../components/cardBg.vue";

const goods = [
  {
    title: "GITHUB",
    desc: "GitHub——代码管理与协作平台，深受程序员喜爱。带上它，告诉所有人你是一个杰出的开源贡献者。",
    price: { dijiao: 15, pla: 8 },
    buyBtn: "立即获取",
    img: "../../../public/githubShow.png",
    bgColor: "rgba(0, 0, 0, 0.5)",
    bgImg: "../../../public/githubBg.png",
    blur: "1",
    color: "#ffffff",
  },
  {
    title: "FIGMA",
    desc: "Figma——一款强大的在线界面设计工具，广受设计师青睐。这个可爱又活泼的挂饰可以彰显你的品味。",
    price: { dijiao: 15, pla: 8 },
    buyBtn: "立即获取",
    img: "../../../public/githubShow.png",
    bgColor: "#efefef 0.1",
    bgImg: "../../../public/figmaBg.png",
    blur: "1",
    color: "#ffffff",
  },
  {
    title: "VSCODE",
    desc: "VSCode——强大的源代码编辑器，无比丰富的扩展，提供卓越的开发体验。也许这个挂饰会提高代码的运行速度？",
    price: { dijiao: 15, pla: 8 },
    buyBtn: "立即获取",
    img: "../../../public/githubShow.png",
    bgColor: "rgba(204, 226, 232, 0.67)",
    bgImg: "../../../public/vscodeBg.png",
    blur: "1",
  },
];
</script>
<style lang="less" scoped>
.mainContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 44px 51px;
  padding: 35px;
  .good {
    .left {
      img {
        margin: 1.38rem 0 1.38rem 1.38rem;
        width: 17.31rem;
        height: 17.31rem;
        box-shadow: 1.44rem 1.38rem 1.07rem -0.38rem rgba(0, 0, 0, 0.17);
      }
    }
    .right {
      margin: 1.8rem 0 0 3.44rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 2rem;
        font-weight: 600;
        line-height: 2.34rem;
      }
      .devideLine {
        width: 11.38rem;
        height: 0.38rem;
        margin-bottom: 0.75rem;
      }
      .desc {
        width: 11.38rem;
        height: 4.75rem;
        font-size: 1rem;
        line-height: 1.17rem;
        margin-bottom: 3.62rem;
      }
      .price {
        font-size: 0.81rem;
        line-height: 0.95rem;
        margin-bottom: 0.75rem;
      }
      .buyBtn {
        width: 11.38rem;
        height: 2.31rem;
        border-radius: 2.5rem;
        text-align: center;
        opacity: 1;
        background: #000000;
        font-size: 0.94rem;
        line-height: 2.31rem;
        color: #ffffff;
      }
    }
  }
}
</style>
