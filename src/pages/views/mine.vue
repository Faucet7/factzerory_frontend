<template>
  <div class="mainContainer">
    <div class="mine">
      <cardBg width="21.81" height="51.88" bgColor="#F5F5F5" filter="0.1">
        <div class="shoppingCart">
          <div class="title">购物车</div>
          <div class="devideLine"></div>
          <div class="goods">
            <div class="good">
              <div class="goodName">GITHUB挂饰</div>
              <div class="goodCount">x1</div>
            </div>
          </div>
        </div>
        <div class="buy"></div>
      </cardBg>

      <div class="info">
        <div class="avatar">
          <img src="../../assets/img/logo.png" alt="" />
        </div>
        <div class="name">Fauc3t</div>
        <div class="phone">157****2039</div>
      </div>

      <cardBg width="21.81" height="51.88" bgColor="#F5F5F5" filter="0.1">
        <div class="shoppingCart">
          <div class="title">订单</div>
          <div class="devideLine"></div>
          <div class="goods">
            <div class="good">
              <div class="goodName">GITHUB挂饰</div>
              <div class="goodCount">x 1</div>
            </div>
          </div>
        </div>
      </cardBg>
    </div>
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
  justify-content: center;
  align-items: center;
  .mine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 85.75rem;
    .shoppingCart {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 21.81rem;
      .title {
        font-size: 3rem;
        line-height: 3.51rem;
        margin-top: 1.75rem;
      }
      .devideLine {
        margin-top: 0.62rem;
        width: 16rem;
        height: 0.5rem;
        background: #000000;
      }
      .goods {
        display: flex;
        flex-direction: column;
        gap: 1.19rem;
        margin-top: 1.56rem;
        .good {
          position: relative;
          width: 16.06rem;
          height: 3rem;
          border-radius: 0.88rem;
          background: #000000;
          box-shadow: 0.19rem 0.19rem 0.21rem 0.06rem rgba(0, 0, 0, 0.25);
          .goodName {
            font-size: 1.5rem;
            line-height: 3rem;
            text-align: center;
            color: #ffffff;
          }
          .goodCount {
            position: absolute;
            right: 1.31rem;
            top: 0.94rem;
            font-size: 1rem;
            line-height: 1.17rem;
            color: #ffffff;
          }
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar {
        margin-top: 11.94rem;
        width: 11.13rem;
        height: 11.13rem;
        background: rgb(187, 187, 187);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 10.38rem;
          height: 10.38rem;
        }
      }
      .name {
        margin-top: 3.06rem;
        font-size: 3rem;
        line-height: 3.51rem;
      }
      .phone {
        margin-top: 1.25rem;
        font-size: 3rem;
        line-height: 3.51rem;
      }
    }
  }
}
</style>
