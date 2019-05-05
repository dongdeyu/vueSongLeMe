<template>
    <div class="nav_header" style="overflow-y: hidden">
        <div v-if="subhead != '' && subhead != null && subhead != undefined" :class="[noBottom? '' : 'bottom' ,'top col-xs-12', {'shadow':isShadow }]" >
            <div class="col-xs-3 padding0" @click="goBack">
                <img src="./img/5.9-left.png" width="13">
            </div>
            <div class="col-xs-6 padding0 f-34 text-center c-333333" style="height: 44px;line-height: 44px">{{title}}</div>
            <div class="col-xs-3 subhead padding0 f-30 text-right c-666666"   ref="subhead">
                <span @click="goTo">{{subhead}}</span>
               <!-- <img v-if="isShare" src="./img/shareIcon.png" width="19" style="vertical-align: text-bottom" @click="share" alt=""> -->
            </div>

        </div>
        <div v-else :class="[noBottom? '' : 'bottom' ,'top col-xs-12', {'shadow':isShadow }]" >
            <div class="col-xs-1 padding0" @click="goBack">
                <img src="./img/5.9-left.png" width="13">
            </div>
            <div class="col-xs-10 padding0 f-34 text-center c-333333" style="height: 44px;line-height: 44px">{{title}}</div>
            <div class="col-xs-1 subhead padding0 f-30 text-right c-666666" >
                <!-- <img v-if="isShare" src="./commonIcon/shareIcon.png" width="19" style="vertical-align: text-bottom" @click="share" alt=""> -->
            </div>
        </div>
        <div class="main" v-if="isShow" @click="closeModel">
            <div class="pic">
                <!-- <img src="./commonIcon/shareConner.png" width="160" alt=""> -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'navHeader',
      data() {
        return {
          isShow:false
        };
      },
      mounted: function(){
        
      },
        updated: function(){
        
        },
      watch:{
        isShow:function (newV,oldV) {
          if(newV){
            window.addEventListener("scroll", this.handleScroll);
          }else{
            window.removeEventListener('scroll', this.handleScroll)
          }
        },
        isShowStatus:function (newV,oldV) {
          this.isShow=newV
        }
      },
      methods: {
        handleScroll () {
          this.isShow = false;
        },
        goBack() {
        
          if (this.goUrl !== undefined && this.goUrl !== -1 && this.goUrl !== '') {
            // this.$router.push(this.goUrl);
           this.$router.push("lists");
          } else {
            alert(13)
            this.$router.go(-1);
            //   window.history.go(-1)
          }
        },
        goTo() {
          if (this.subhead !== undefined && this.goPath != undefined) {
            this.$router.push(this.goPath);
          }
        },
        share(){
          this.isShow=true
        },
        closeModel(){
          this.isShow=false
          this.$emit('closeShare')
        }
      },
      props: ['title', 'goUrl', 'subhead', 'goPath', 'noBottom', 'isShadow', 'subheadColor','isShare','isShowStatus']
    };
</script>
<style scoped lang="less">
    .nav_header{
        flex-shrink: 0;
        flex-grow: 0;
    }
    .nav_header:before{
        visibility: hidden;
        display: block;
        content: '.';
        height: 44px;
    }
    .top{
        background-color: #ffffff;
        height: 44px;
        line-height: 44px;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 100;
        padding: 0px 20px 0px 15px;
    }
    .system{
        padding: 0px 20px 0px 15px;
    }
    .bottom{
        border-bottom: 1px solid #eaeaea;
        box-sizing: border-box;
    }
    .shadow{
        box-shadow: 0px 0px 15px rgba(70, 110, 215, 0.25);
    }
    .main{
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top:0px;
        left: 0px;
        z-index: 101;
        .pic{
            position: fixed;
            top: 0px;
            right: 35px;
        }
    }
</style>
