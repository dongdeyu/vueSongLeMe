<template>
  <header class="myHeader">{{name}}</header>
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {};
  }
};
</script>
<style lang="less">
.myHeader {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  height: 44px;
  background: #f60;
  color: #fff;
  text-align: center;
  line-height: 44px;
}
</style>

