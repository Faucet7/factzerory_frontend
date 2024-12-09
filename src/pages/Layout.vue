<template>
  <div class="container">
    <div class="tabbar">
      <div class="logoTitle">
        <img src="../assets/icon/factzerory.png" class="logo" />
        <div class="title">零层工坊</div>
      </div>
      <div class="mainTitle">Factzerory</div>
      <div class="tab">
        <RouterLink
          @click="clickTab(idx)"
          class="tabItem"
          v-for="(item, idx) in tab"
          v-bind:key="item"
          :to="item.link"
          >{{ item.name }}</RouterLink
        >
      </div>
      <div class="tabCursor"></div>
    </div>
    <div class="main">
      <RouterView class="mainContainer"></RouterView>
    </div>
    <div class="footer">
      <div class="left">
        <div class="logo">
          <img src="../assets/icon/factzerory.png" alt="" />
          <div class="logoHeader">零层工坊官方账号</div>
        </div>
        <div class="platforms">
          <img src="../assets/icon/bilibili.png" alt="" />
          <img src="../assets/icon/github.png" alt="" />
          <img src="../assets/icon/wechat.png" alt="" />
          <img src="../assets/icon/redBook.png" alt="" />
          <img src="../assets/icon/tiktok.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div v-for="detail in details" v-bind:key="detail" class="column">
          <div class="columnHead">{{ detail.columnHead }}</div>
          <div
            v-for="child in detail.children"
            v-bind:key="child"
            class="columnItem"
          >
            {{ child.title }}
          </div>
        </div>
      </div>
      <div class="bottom">
        Copyright © 2024-2025 零层工坊 factzerory.fun All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const tab = [
  {
    name: "首页",
    link: "/",
  },

  {
    name: "饰品",
    link: "/shop",
  },
  {
    name: "定制",
    link: "/design",
  },
  {
    name: "我的",
    link: "/mine",
  },
  {
    name: "关于",
    link: "/about",
  },
];

const details = [
  {
    columnHead: "支付方式",
    children: [
      {
        title: "支付宝",
      },
      {
        title: "微信支付",
      },
    ],
  },
  {
    columnHead: "联系作者",
    children: [
      {
        title: "个人博客",
      },
      {
        title: "微信",
      },
      {
        title: "抖音",
      },
      {
        title: "bilibili",
      },
      {
        title: "小红书",
      },
    ],
  },
];

let mainContainer;
const main = document.querySelector(".main");

onMounted(() => {
  //刷新后移动cursor
  const id = localStorage.getItem("currentPage");
  clickTab(id);
});

const clickTab = async (id) => {
  //路由守卫
  localStorage.setItem("currentPage", id);

  //移动cursor
  const transX = id * 4;
  const tabCursor = document.querySelector(".tabCursor");
  tabCursor.style.transform = `translateX(${transX}rem)`;
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: Deyi;
  src: url("../assets/font/SmileySans-Oblique-3.otf");
  font-size: 6.25rem;
}

.container {
  user-select: none;
  width: 100%;
  position: absolute;
  font-family: "Deyi";

  .tabbar {
    width: 100%;
    height: 4.125rem;
    background-color: #d9d9d9;
    display: flex;
    border-bottom: 0.125rem solid #b5b4b4;
    .logoTitle {
      height: 4.125rem;
      .logo {
        position: absolute;
        left: 0rem;
        top: 0rem;
        height: 4.125rem;
        width: 4.125rem;
      }
      .title {
        position: absolute;
        left: 3.9375rem;
        top: 0.8125rem;
        width: 7.25rem;
        height: 2.6875rem;
        font-size: 1.875rem;
        font-weight: normal;
        line-height: 2.6325rem;
        letter-spacing: 0rem;
        color: #000000;
      }
    }
    .mainTitle {
      margin: 0 auto;
      text-align: center;
      height: 4.125rem;
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 0.0625rem;
    }
    .tab {
      position: absolute;
      right: 1.25rem;
      top: 1.125rem;
      width: 18.4375rem;
      height: 1.8125rem;
      /* 自动布局 */
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0rem;
      gap: 1.5625rem;

      .tabItem {
        /* 自动布局子元素 */
        position: static;
        left: 0rem;
        top: 0rem;
        width: 2.4375rem;
        height: 1.8125rem;
        z-index: 0;
        font-size: 1.5rem;
        font-weight: normal;
        line-height: 1.755rem;
        letter-spacing: 0rem;
        color: #000000;
        text-decoration-line: none;
      }
    }
    .tabCursor {
      background-color: #000000;
      position: absolute;
      right: 17.2rem;
      top: 3.125rem;
      width: 2.4375rem;
      height: 0.25rem;
      transition: 0.2s ease-in-out all;
      transform: translateX(0rem);
    }
  }

  .main {
    width: 100%;
    padding-bottom: 27.75rem;
  }

  .footer {
    position: absolute;
    bottom: 0rem;
    width: 100%;
    height: 27.75rem;
    border-top: 0.125rem solid #000000;
    .left {
      position: absolute;
      left: 02rem;
      bottom: 19rem;
      .logo {
        display: flex;
        align-items: center;
        img {
          height: 5.5rem;
          width: 5.5rem;
        }
        .logoHeader {
          font-size: 2.5rem;
        }
      }
      .platforms {
        display: flex;
        img {
          margin-left: 1.75rem;
          width: 1.875rem;
          height: 1.875rem;
        }
      }
    }
    .right {
      font-size: 1.5rem;
      position: absolute;
      right: 5.1875rem;
      bottom: 8rem;
      width: 14.0625rem;
      display: flex;
      gap: 4.0625rem;
      .column {
        .columnHead {
          color: #000000;
          gap: 1.375rem;
        }
        .columnItem {
          margin: 1.25rem 0 0 0;
          color: #919191;
        }
      }
    }
    .bottom {
      width: 100%;
      position: absolute;
      bottom: 0.875rem;
      text-align: center;
      font-size: 1.5rem;
    }
  }
}
</style>
