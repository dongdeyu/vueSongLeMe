<template>
  <div id="myHead" style="position: absolute;top:0px;left:0px;width: 100%;z-index: 100">
    <div :style="{height: showHeight+'px'}">
      <div
        v-if="showScrollLeftIconS"
        style="height: 44px;line-height: 44px;display: inline-block;position: absolute;left: 15px;top: 0px;display: flex;justify-content: flex-start;align-items: center"
        @click="leftTextClick"
      >
        <img src="./img/5.9-left.png" width="14">
      </div>
      <div
        id="centerText"
        :style="{width:showWidth+'px',fontSize:showFontSize+'px',color:scrollCenterTextColor}"
        style="height: 44px;line-height:44px;position: absolute;bottom: 0px;text-align: center;white-space: nowrap;font-weight:bold;"
        v-html="scrollCenterText"
      ></div>
      <div v-if="showScrollRightIconS">
        <div
          :style="{color:rightTextColor,fontSize:minFontSize+'px'}"
          style="height: 44px;line-height: 44px;display: inline-block;position: absolute;right: 15px;bottom: 0px;"
          @click="rightTextClick"
        >
          <div v-if="isShareS">
            <img src="./img/share.png" width="18" alt style="margin-top: -6px;">
          </div>
          <div v-else>{{rightText}}</div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="col-xs-12 padding0"
        :style="{fontSize:minFontSize+'px',opacity: showOpacity}"
        style="height: 44px;line-height: 44px;position: fixed;background-color: #ffffff;z-index: 101;top:0;left: 0;"
      >
        <div
          class="col-xs-2"
          v-if="showFixedLeftIconS"
          style="height: 44px;line-height: 44px;padding-right: 0px;display: flex;justify-content: flex-start;align-items: center"
          @click="leftTextClick"
        >
          <img src="./img/5.9-left.png" width="14">
        </div>
        <div class="col-xs-2" v-else></div>
        <div class="col-xs-7"></div>
        <div class="col-xs-3" v-if="showFixedRightIconS">
          <div style="text-align: right" :style="{color:rightTextColor}" @click="rightTextClick">
            <div v-if="isShareS">
              <img src="./img/share.png" width="18" alt style="margin-top: -6px;">
            </div>
            <div v-else>{{rightText}}</div>
          </div>
        </div>
        <div class="col-xs-3" v-else></div>
        <div
          style="position: absolute;left: 0px;top:0px;z-index:101;text-align: center;font-weight:bold;"
          :style="{width:maxWidth+'px',color:fixedCenterTextColor}"
          v-html="fixedCenterText"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navHeaderSlide",
  created() {},
  data() {
    return {
      showHeight: 100,
      showWidth: 77,
      showFontSize: 25,
      showScrollLeftIconS: true,
      showFixedLeftIconS: true,
      showScrollRightIconS: true,
      showFixedRightIconS: true,
      isShareS: false,
      showOpacity: 0
    };
  },
  created() {
    this.showHeight = this.maxHeight;
    this.showWidth = this.minWidth;
    this.showFontSize = this.maxFontSize;
    this.showScrollLeftIconS = this.showScrollLeftIcon;
    this.showFixedLeftIconS = this.showFixedLeftIcon;
    this.showScrollRightIconS = this.showScrollRightIcon;
    this.showFixedRightIconS = this.showFixedRightIcon;
    this.isShareS = this.isShare;
  },
  mounted() {
    let _this = this;
    const heightCha = _this.maxHeight - 44; // 44为固定头的高度
    const beginHeight = 100 - 44 - 44;
    let lastScroll = 0;
    let offsetTop;
    window.onscroll = function(e) {
      let scrollTop = _this.common.getScrollTop(); // 滚动距离
      if (document.querySelector("#centerText") != null) {
        offsetTop = document.querySelector("#centerText").offsetTop; // 文字距顶尺寸
      }
      let opacityJiaBiLv = 1 / 44;
      // 变化函数
      if (
        scrollTop >= lastScroll &&
        scrollTop >= beginHeight &&
        scrollTop <= heightCha
      ) {
        // 向上滚动
        _this.showOpacity = 0 + (scrollTop - beginHeight) * opacityJiaBiLv;
      }
      if (
        scrollTop <= lastScroll &&
        scrollTop >= beginHeight &&
        scrollTop <= heightCha
      ) {
        // 向下滚动
        _this.showOpacity = 0 + (scrollTop - beginHeight) * opacityJiaBiLv;
      }
      // 约束函数1  通过滚动距离约束透明度
      if (scrollTop >= heightCha) {
        _this.showOpacity = 1;
      }
      if (scrollTop <= beginHeight) {
        _this.showOpacity = 0;
      }
      // 约束函数2  设置阈值，约束透明度
      if (_this.showOpacity > 1) {
        _this.showOpacity = 1;
      } else if (_this.showOpacity <= 0) {
        _this.showOpacity = 0;
      }
      lastScroll = scrollTop;
    };
  },
  methods: {
    rightTextClick: function() {
      this.$emit("rightTextClick");
    },
    leftTextClick: function() {
      this.$emit("leftTextClick");
    }
  },
  props: {
    scrollCenterText: {
      default: "",
      type: String
    },
    fixedCenterText: {
      default: "",
      type: String
    },
    rightText: {
      default: "",
      type: String
    },
    minHeight: {
      default: 44,
      type: Number
    },
    maxHeight: {
      default: 100,
      type: Number
    },
    minWidth: {
      default: 77,
      type: Number
    },
    maxWidth: {
      default: 160,
      type: Number
    },
    minFontSize: {
      default: 17,
      type: Number
    },
    maxFontSize: {
      default: 25,
      type: Number
    },
    rightTextColor: {
      default: "#8F8F8F",
      type: String
    },
    scrollCenterTextColor: {
      default: "#333333",
      type: String
    },
    fixedCenterTextColor: {
      default: "#333333",
      type: String
    },
    showScrollLeftIcon: {
      default: true,
      type: Boolean
    },
    showFixedLeftIcon: {
      default: true,
      type: Boolean
    },
    showScrollRightIcon: {
      default: true,
      type: Boolean
    },
    showFixedRightIcon: {
      default: true,
      type: Boolean
    },
    isShare: {
      default: false,
      type: Boolean
    }
  }
};
</script>

<style scoped="scoped" lang="less">
</style>
