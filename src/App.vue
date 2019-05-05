<template>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link
      href="https://asks.oss-cn-beijing.aliyuncs.com/static/css/bootstrap.min.css"
      rel="stylesheet"
      type="text/css"
    >
    <link
      href="https://asks.oss-cn-beijing.aliyuncs.com/static/css/important.css"
      rel="stylesheet"
      type="text/css"
    >
  </head>
  <body>
    <div id="app">
      <router-view></router-view>
      <m-tabbar v-model="select" v-if="showBottom" ref="bottom">
        <m-tabbar-item id="Index" isRouter>
          <img src="./assets/images/ic_tab_home_normal.png" alt slot="icon-normal">
          <img src="./assets/images/ic_tab_home_active.png" alt slot="icon-active">
          首页
        </m-tabbar-item>
        <m-tabbar-item id="Info" isRouter>
          <img src="./assets/images/ic_tab_subject_normal.png" alt slot="icon-normal">
          <img src="./assets/images/ic_tab_subject_active.png" alt slot="icon-active">
          图书
        </m-tabbar-item>
        <m-tabbar-item id="Lists" isRouter>
          <img src="./assets/images/ic_tab_status_normal.png" alt slot="icon-normal">
          <img src="./assets/images/ic_tab_status_active.png" alt slot="icon-active">
          电影
        </m-tabbar-item>
        <m-tabbar-item id="My" isRouter>
          <img src="./assets/images/ic_tab_profile_normal.png" alt slot="icon-normal">
          <img src="./assets/images/ic_tab_profile_active.png" alt slot="icon-active">
          我的
        </m-tabbar-item>
      </m-tabbar>
    </div>
  </body>
</html>
</template>

<script>
//组件
import mTabbar from "./components/tabBar/tabbar";
import mTabbarItem from "./components/tabBar/tabbar-item";
export default {
  name: "app",
  components: {
    mTabbar,
    mTabbarItem
  },
  data() {
    return {
      select: "Index",
      showBottom: true
    };
  },
  created() {
    this.isLogin();
    console.log(23)
  },
  mounted() {
    console.log(123)
  },
  watch: {
   "window.location.hash":function (newVal,oldVal) {
      console.log(newVal);
      console.log(oldVal);
   }
  },
  methods: {
     isLogin() {
      let passportId = localStorage.getItem("passportId");
      let thisAddress = window.location.hash.slice(2);
      var that = this;
      if (thisAddress == "Login") {
        if (
          passportId !== "undefined" &&
          passportId !== null &&
          passportId !== "" &&
          passportId !== undefined
        ) {
          that.showBottom = true;
        } else {
          that.showBottom = false;
        }
      }else{
        console.log(132)
      }
    }
  }
};
</script>

<style>
.m-tabbar {
  display: block;
}
</style>
