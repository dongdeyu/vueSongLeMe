// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../static/css/global.css' /*引入公共样式*/
import common from "./commonFun/common"
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
Vue.config.productionTip =false;
VueAMap.initAMapApiLoader({
    key:'cac4cf0ff8beac80761c79f16de56013'
})
Vue.prototype.common = common
Vue.use(Vuex)
Vue.use(Mint)
// mint
Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})