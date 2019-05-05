<template>
  <div>
     <m-title name="个人中心"></m-title>
     <div @click="goReturn" class="page-cont">退出</div>
  </div>
</template>

<script>
  import header from "../components/header/header"
  export default {
    name: 'mine',
    components: {
        "m-title":header
    },
    methods:{
      goReturn(){
         window.localStorage.setItem('passportId',"");
         this.$router.push("index");
      }
    }
  }
</script>


<style lang="less">

</style>