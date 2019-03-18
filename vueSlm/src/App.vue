<template>
  <div id="app">
  	
    <router-view></router-view>
    <m-tabbar v-model="select">
      <m-tabbar-item id='Index' isRouter>
        <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 
        首页
      </m-tabbar-item>
      <m-tabbar-item id='Info' isRouter>
        <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active"> 
        图书
      </m-tabbar-item>
      <m-tabbar-item id='Lists' isRouter>
        <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active"> 
        电影
      </m-tabbar-item>
       <m-tabbar-item id='My' isRouter>
        <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active"> 
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from './components/tabBar/tabbar'
import mTabbarItem from './components/tabBar/tabbar-item'
export default {
  name: 'app',
  components:{
  	mTabbar,
    mTabbarItem
  },
  data() {
      return {
        select:"Index"
      }
    }
}
</script>

<style>

</style>
