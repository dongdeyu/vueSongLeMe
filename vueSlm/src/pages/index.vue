<template>
  <div>
    <m-title name="呵呵"></m-title>
  </div>
</template>

<script>
  import header from "../components/header/header"
  export default {
    name: 'index',
    components: {
        "m-title":header
    },
    data() {
      return {
        recommendData: [],
        hotData: [],
        title:"首页"
      }
    },

    created() {
      // this.fetchData();
    },
    methods: {
     
    }
  }

</script>

<style lang="less">
  header.m-header {
    padding: 0 0 0 10px;
  }
  
  .is-fixed~.page-content {
    padding-top: 44px;
    padding-bottom: 50px;
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
