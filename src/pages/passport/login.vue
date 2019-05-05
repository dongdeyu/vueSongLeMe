<template>
    <div class="login relative" :style="{height: bdheight}">
        <navHeader title="登录" subhead="注册" :goUrl="backUrl" :goPath='goReg'></navHeader>
        <div class="scroll col-xs-12 system">
            <input name='wid' type='hidden' v-model="wid">
            <div :class="[lowScreen? 'part1-s' :'part1' ,'col-xs-12 padding0 f-46 c-333333 bolder']">欢迎登录银多网</div>
            <div class="col-xs-12 padding0">
                <div class="f-24 c-8f8f8f">手机号/用户名</div>
                <format_input typeStyle='text'
                              maxlength="11"
                              :showEye="false"
                              :ifBottom="true"
                              placeholder="请输入注册手机号/用户名"
                              v-model="userName"
                              @clearValue="clear"
                              @hideBottom="hideBottom"
                ></format_input>
                <div class="col-xs-12 padding0 line"></div>
                <div class="col-xs-12 padding0" style="height: 12px"></div>
                <div :class="[lowScreen? 'part2-s' :'part2','col-xs-12 padding0 f-24 c-8f8f8f']">登录密码</div>
                <format_input typeStyle='password'
                              maxlength="20"
                              :showEye="true"
                              :ifBottom="true"
                              placeholder="请输入登录密码"
                              v-model.lazy="passWord"
                              @clearValue="clearPwd"
                              @changeType="change"
                              @hideBottom="hideBottom"
                ></format_input>
                <div class="col-xs-12 padding0 line"></div>
                <div :class="[lowScreen? 'part3-s' :'part3', ,'col-xs-12 padding0 f-24']">
                    <div  @click="goTo(2)" class="col-xs-6 padding0 text-left c-666666">验证码登录</div>
                    <div  @click="goTo(3)" class="col-xs-6 padding0 text-right c-666666">忘记密码</div>
                </div>
                <div class="col-xs-12 f-34 padding0 text-center" @click="loginOn">
                    <div :class="[disabled ? 'b-ffe4cc': ' b-ff7700','col-xs-12 part4']">登录</div>
                </div>
                <div @click="goTo(1)" class="col-xs-12 padding0">
                    <img :src='pic.images2' width="100%">
                </div>
                <div class="col-xs-12 padding0" style="height: 20px"></div>
                <div class="col-xs-12 padding0 text-center">
                    <span class="f-26 c-8f8f8f">登录遇到问题?&nbsp;点击拨打<a class="c-47B3FF" @click="dialogShow()">客服热线</a></span>
                </div>
                <server v-if="showServer" @cancelKeFu="cancelServer()"></server>
            </div>
        </div>
        <div v-if="mobileType" class='col-xs-12 system bottom-text text-center b-ffffff'>
            <div style="height: 10px"></div>
            <div class="f-26 c-c7c7c7">网贷有风险，选择需谨慎</div>
            <div class="f-24 c-c7c7c7">当前版本:6.1</div>
            <div style="height: 10px"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                bdheight: '',
                backUrl: '',
                type: 'password',
                userName: '',
                passWord: '',
                disabled: true,
                showServer: false,
                lowScreen: false,
                wid: '',
                pic: '',
                goPath: '',
                goReg: '/passport/register?returnUrl=' + this.$route.query.returnUrl,
                mobileType: true
            };
        },
        watch: {
            userName: 'changeBtn',
            passWord: 'changeBtn'
        },
        // beforeCreate(){
        //   window.localStorage.setItem('innerHeights', $(window).height())
        // },
        created: function () {
            this.initHeight();
            this.getPic()
        },
        mounted: function () {
            //  赋值 wid
            this.wid = this.$route.query.wid ? this.$route.query.wid : (this.$getStore('wid') ? this.$getStore('wid') : '')

            this.initHeight();
            if (this.$route.query.jump === 'index') {
                this.backUrl = '/index';
            } else if (this.$route.query.returnUrl != '' && this.$route.query.returnUrl != 'undefined' && this.$route.query.returnUrl != null) {
                this.backUrl = this.$route.query.returnUrl;
            } else {
                this.backUrl = '/index';
            }
            console.log('这是返回路径:' + this.backUrl)
            // 判断用户是否为非法登录访问
            if (this.$route.query.status == -99) {
                this.$toast(this.$route.query.msg)
            }
        },
        methods: {
            getPic() {
                const params = {
                    url: '/passport/getPic',
                };
                this.$http.postRequest(params).then((response) => {

                    this.pic = response
                })
            },
            initHeight() {
                this.bdheight = window.screen.height + 'px';
                if (window.innerHeight < 500 && navigator.userAgent.indexOf('Android') !== -1) {
                    this.lowScreen = true
                }
            },
            goTo(num) {
                if (num === 1) { //注册
                    this.$router.push({path: '/passport/register', query: {returnUrl: this.$route.query.returnUrl}})
                } else if (num === 2) { //验证码登录
                    this.$router.push({path: '/passport/codelogin', query: {returnUrl: this.$route.query.returnUrl}})
                } else { // 忘记密码
                    this.$router.push({path: '/passport/forget', query: {returnUrl: this.$route.query.returnUrl}})
                }
            },
            dialogShow() {
                this.showServer = true;
            },
            cancelServer() {
                this.showServer = false;
            },
            hideBottom(data) {
                this.mobileType = !data
            },
            clear(data) {
                this.userName = data;
            },
            clearPwd(data) {
                this.passWord = data;
            },
            change(data) {
                this.type = data;
            },
            changeBtn() {
                if (this.userName.length > 0 && this.passWord.length > 0) {
                    this.disabled = false;
                } else {
                    this.disabled = true;
                }
            },
            loginOn() {
                const _that = this;
                if (!_that.disabled) {
                    _that.$indicatorOpen();
                    const params = {
                        userName: _that.userName,
                        passWord: _that.passWord,
                        url: '/passport/loginPwd',
                        wid: _that.wid
                    };
                    _that.$http.postRequest(params).then((response) => {
                        _that.initHeight()
                        if (Number(response.status === 0)) {
                            try {
                                _that.$setStore('mm', response.mm);
                                _that.$setStore('avatar', response.avatar);
                                _that.$setStore('username', response.username);
                                // 判断 如果是从点赞来的  就去点赞
                                if (this.$getStore('dianZanUrl') != '') {
                                    _that.$router.push('/discover/dynamicItem');
                                } else {
                                    _that.$toast('登录成功');
                                    _that.$router.push('/');
                                }
                            } catch (e) {
                                _that.$toast('浏览器缓存已满，请在设置中清除历史记录与数据！')
                            }
                        } else {
                            if(response.msg==undefined || response.msg==""){
                                _that.$toast("网络错误");
                            }else {
                                _that.$toast(response.msg);
                            }
                        }
                        _that.$indicatorClose();

                    });
                }
            }
        }
    };
</script>
<style scoped lang="less">
    @import "../css/login.less";
</style>
