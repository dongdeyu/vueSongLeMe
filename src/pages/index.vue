<template>
  <div>
    <m-title name="呵呵"></m-title>
    <m-title name="222"></m-title>
    <div class="page-cont">
      <div @click="showToast">123</div>
      <mt-cell title="开关状态">
        <mt-switch v-model="openValue"></mt-switch>
      </mt-cell>
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
    </div>
  </div>
</template>

<script>
import header from "../components/header/header";
import {
  Toast,
  MessageBox,
  Cell,
  Checklist,
  Search,
  Navbar,
  TabItem
} from "mint-ui";
export default {
  name: "index",
  components: {
    "m-title": header
  },
  data() {
    return {
      recommendData: [],
      hotData: [],
      title: "首页",
      value: "",
      selected: "1",
      openValue: true
    };
  },

  created() {
    // this.fetchData();
    this.common.login("2123");
    this.fn();
  },
  methods: {
    showToast() {
      this.$toast("Hello world!");
    },
    fn() {
      var $this = this;
      var fn1 = this.fn1;
      var fn2 = this.fn2;
      var fn3 = this.fn3;
      (async function seq(fn1,fn2,fn3) {
        await fn1();
        await fn2();
        await fn3();
      })(fn1, fn2,fn3);
    },
    fn1: function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve();
          console.log("fn1 is executed");
        }, 1000);
      });
    },

    fn2: function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("fn2 is executed");
          resolve();
        }, 1000);
      });
    },

    fn3: function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log("fn3 is executed");
          resolve();
        }, 1000);
      });
    }
  }
};
</script>

<style lang="less">
header.m-header {
  padding: 0 0 0 10px;
}

.top-search {
  .search-wrap {
    width: 100%;
    height: 30px;
    background: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #c0c0c0;
    padding: 0 12px;
    .placeholder {
      flex: 1;
      text-align: left;
      padding-left: 12px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
}

.hot-wrap,
.recommend-wrap {
  padding-top: 12px;
}
</style>
