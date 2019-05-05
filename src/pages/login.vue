<template>
  <div>
    <navHeader :title="title" subhead="注册" :goUrl="backUrl" :goPath="goReg"></navHeader>
    <div class="page-cont">
      <div>
        <input type="text" v-model="userName" placeholder="请输入账号">
      </div>
       <div>
        <input type="text"  v-model="passWord" placeholder="请输入密码">
      </div>
      <button @click="sure">确定</button>
    </div>
  </div>
</template>
<script>
import navHeader from "../components/header/nav_header";
export default {
  name: "login",
  data() {
    return {
      title: "登录",
      backUrl: "/list",
      goReg: "/passport/register?returnUrl=",
      userName:"",
      passWord:""
    };
  },
  components: {
    navHeader
  },
  watch: {
    userName(){
      console.log(132)
    },
    passWord(){
      console.log(123)
    }
  },
  created() {},
  mounted() {
    $(".m-tabbar").hide();
  },
  methods: {
    sure(){
      if(this.userName !==""&& this.passWord!==""){
         window.localStorage.setItem('passportId',1);
         this.$router.push("index");
         $(".m-tabbar").show();
      }else{
         this.$toast("请输入账号和密码");
         return;
      }
    }
  },

  destroyed() {
    $(".m-tabbar").show();
  }
};
</script>
<style type="css">
</style>
