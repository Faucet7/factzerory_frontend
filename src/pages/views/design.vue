<template>
  <div class="mainContainer">
    <!-- 左侧卡片 -->
    <cardBg
      width="32"
      height="32"
      bgColor="#F2F2F2"
      filter="0.1"
      style="position: absolute; left: 6.44rem; top: 25rem"
    >
      <div class="left">
        <div class="chat">
          <img src="../../assets/icon/Coffee.svg" alt="" />
          <div>沟通</div>
          <img src="../../assets/icon/chat.svg" alt="" />
        </div>
        <div class="chat">
          <img src="../../assets/icon/Move.svg" alt="" />
          <div>设计</div>
          <img src="../../assets/icon/Edit.svg" alt="" />
        </div>
        <div class="chat">
          <img src="../../assets/icon/Crosshair.svg" alt="" />
          <div>定稿</div>
          <img src="../../assets/icon/code.svg" alt="" />
        </div>
      </div>
    </cardBg>
    <!-- 中间卡片 -->
    <cardBg
      width="28.56"
      height="30.63"
      bgColor="#F2F2F2"
      filter="0.1"
      style="margin-top: 3.62rem"
    >
      <div class="middle">
        <div class="title">定制服务</div>
        <div class="devideLine"></div>
        <div class="desc">
          更多的样式，更好的创意抑或是自己的设计？欢迎咨询定制服务！
        </div>
        <div class="askBtn">立即咨询</div>
      </div>
    </cardBg>
    <!-- 右侧卡片 -->
    <cardBg
      width="32"
      height="32"
      bgColor="#F2F2F2"
      filter="0.1"
      style="position: absolute; right: 6.44rem; top: 25rem"
    >
      <div class="right">
        <img src="../../assets/img/tuozhuA1.png" alt="" />
        <div class="chat">
          <img src="../../assets/icon/Settings.svg" alt="" />
          <div>制造</div>
          <img src="../../assets/icon/Power.svg" alt="" />
        </div>
      </div>
    </cardBg>
    <div class="arrow"></div>
  </div>
</template>

<script setup>
import cardBg from "../../components/cardBg.vue";
</script>

<style lang="less" scoped>
.mainContainer {
  width: 100%;
  height: 56rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  .left {
    margin-top: 6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4.31rem;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
    }
    .chat {
      display: flex;
      justify-content: space-around;
      width: 25rem;
      font-size: 3rem;
    }
  }
  .middle {
    margin: 5.06rem 0 0 5.56rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 3rem;
      font-weight: normal;
      line-height: 3.51rem;
      color: #000000;
      margin-bottom: 0.75rem;
    }
    .devideLine {
      width: 17.5rem;
      height: 0.56rem;
      background: #000000;
      margin-bottom: 1.19rem;
    }
    .desc {
      width: 17.5rem;
      height: 5.31rem;
      font-size: 1.5rem;
      line-height: 1.75rem;
      margin-bottom: 6rem;
    }
    .askBtn {
      width: 17.5rem;
      height: 3.56rem;
      border-radius: 2.5rem;
      text-align: center;
      background: #000000;
      font-size: 1.5rem;
      line-height: 3.56rem;
      color: #ffffff;
    }
  }
  .arrow {
    width: 36.19rem;
    height: 0.81rem;
    background: #000000;
    border-radius: 0.4rem;
    margin-top: 10rem;
  }
  .right {
    margin-top: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .chat {
      margin-top: 4rem;
      display: flex;
      justify-content: space-around;
      width: 25rem;
      font-size: 3rem;
    }
  }
}
</style>
