export default {
    login: function(name) {
        console.log(name);
    },
    checkPlatform: function() {
        if (/android/i.test(navigator.userAgent)) {
            system = "android";
            //console.log("This is Android'browser.");//这是Android平台下浏览器
        }
        if (/(iPhoneiPadiPodiOS)/i.test(navigator.userAgent)) {
            system = "ios";
            //console.log("This is iOS'browser.");//这是iOS平台下浏览器
        }
        if (/Linux/i.test(navigator.userAgent)) {
            //console.log("This is Linux'browser.");//这是Linux平台下浏览器
        }
        if (/Linux/i.test(navigator.platform)) {
            //console.log("This is Linux operating system.");//这是Linux操作系统平台
        }
        if (/MicroMessenger/i.test(navigator.userAgent)) {
            weixin = "weixin";
            //console.log("This is MicroMessenger'browser.");//这是微信平台下浏览器
        }
    },
    /*******************************时间控制器****************************************/
    //input校验
    onk: function(obj) {
        //先把非数字的都替换掉，除了数字和.
        obj.value = obj.value.replace(/[^\d.]/g, "");
        //必须保证第一个为数字而不是.
        obj.value = obj.value.replace(/^\./g, "");
        //保证只有出现一个.而没有多个.
        obj.value = obj.value.replace(/\.{2,}/g, ".");
        //保证.只出现一次，而不能出现两次以上
        obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    },

    //小数点保留两位
    pointtwo: function(jine2, id) {
        var inputstr;
        if (jine2 == "" || jine2 == null || jine2 == "undefined") {
            $("#" + id + "").val("");
        } else {
            inputstr = parseFloat(jine2).toFixed(2);
            $("#" + id + "").val(parseFloat(inputstr).toFixed(2));
        }
    },




    base64encode: function(str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    },
    //获取当前日期、时间！！
    getNowDate: function() {
        var nowDate;
        var myDate = new Date();
        myDate.getYear(); //获取当前年份(2位)
        var yy = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
        var mm = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
        var dd = myDate.getDate(); //获取当前日(1-31)
        myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
        myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
        myDate.getHours(); //获取当前小时数(0-23)
        myDate.getMinutes(); //获取当前分钟数(0-59)
        myDate.getSeconds(); //获取当前秒数(0-59)
        myDate.getMilliseconds(); //获取当前毫秒数(0-999)
        myDate.toLocaleDateString(); //获取当前日期
        var mytime = myDate.toLocaleTimeString(); //获取当前时间
        myDate.toLocaleString(); //获取日期与时间
        nowDate = yy + "-" + mm + "-" + dd;
        nowYear = myDate.getFullYear();
        return nowDate;
    },


    //可用日期增加方法
    addDate: function(date, days) {
        var d = new Date(date);
        d.setDate(d.getDate() + days);
        var m = d.getMonth() + 1;
        return d.getFullYear() + '-' + m + '-' + d.getDate();
    },



    //可用日期计算星期
    getsetriqi: function(x) {
        riqi = addDate(dated, x);
        riqi2 = addDate2(dated, x);
        var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var arys1 = new Array();
        arys1 = riqi.split('-'); //日期为输入日期，格式为 2013-3-10     日期格式根据你取的日期来算，格式可以修改
        var ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
        week = weekArray[ssdate.getDay()];
        week1 = weekArray[ssdate.getDay()];
        if (week == "星期六") {
            week1 = "星期六";
            kequdays = kequdays + 2;
            riqi = addDate(dated, x + 2);
            arys1 = riqi.split('-'); //日期为输入日期，格式为 2013-3-10     日期格式根据你取的日期来算，格式可以修改
            ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
            week = weekArray[ssdate.getDay()];
        } else if (week == "星期日") {
            week1 = "星期日";
            kequdays = kequdays + 1;
            riqi = addDate(dated, x + 1);
            arys1 = riqi.split('-'); //日期为输入日期，格式为 2013-3-10     日期格式根据你取的日期来算，格式可以修改
            ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
            week = weekArray[ssdate.getDay()];
        }
        return week;
    },

    //可取日期计算
    addkqDate: function(date) {
        var d;
        var m;
        if (week1 == "星期五") {
            d = new Date(date);
            d.setDate(d.getDate() + 3);
            //d.setDate(d.getDate() + 2);
            m = d.getMonth() + 1;
            kequriqi = d.getFullYear() + '-' + m + '-' + d.getDate();
            return kequriqi;
        } else if (week1 == "星期六") {
            d = new Date(date);
            d.setDate(d.getDate() + 3);
            //d.setDate(d.getDate() + 2);
            m = d.getMonth() + 1;
            kequriqi = d.getFullYear() + '-' + m + '-' + d.getDate();
            return kequriqi;
        } else if (week1 == "星期日") {
            d = new Date(date);
            d.setDate(d.getDate() + 2);
            //d.setDate(d.getDate() + 2);
            m = d.getMonth() + 1;
            kequriqi = d.getFullYear() + '-' + m + '-' + d.getDate();
            return kequriqi;
        } else {
            d = new Date(date);
            d.setDate(d.getDate() + 1);
            //d.setDate(d.getDate());
            m = d.getMonth() + 1;
            kequriqi = d.getFullYear() + '-' + m + '-' + d.getDate();
            return kequriqi;
        }
    },

    //可取日期计算增加天数方法2
    addkqDate2: function(date) {
        var d;
        if (week == "星期五") {
            d = new Date(date);
            kequriqi2 = d.setDate(d.getDate() + 4);
            //kequriqi2 = d.setDate(d.getDate() + 2);
            return kequriqi2;
        } else {
            d = new Date(date);
            kequriqi2 = d.setDate(d.getDate() + 2);
            //kequriqi2 = d.setDate(d.getDate());
            return kequriqi2;
        }
    },

    //我的理财成交日期计算
    checkweek: function(days) {
        riqi = days.toString();
        var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var arys1 = new Array();
        arys1 = riqi.split('-'); //日期为输入日期，格式为 2013-3-10     日期格式根据你取的日期来算，格式可以修改
        var ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
        var week = weekArray[ssdate.getDay()];
        return week;
    },

    //判断日期是否合法 
    IsDate: function(psValue) {
        var reg1 = /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
        if (!reg1.test(psValue)) {
            return false;
        } else {
            return true;
        }
    },

    //获取当前日期
    GetNowDate: function() {
        var myDate_now = new Date();
        nowYear = myDate_now.getFullYear();
        var dd = new Date();
        var y = dd.getYear();
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return nowYear + "" + m + "" + d;
    },

    //获取当前时间
    GetNowTime: function() {
        var myDate_now = new Date();
        if (myDate_now.getMinutes() < 10) {
            return myDate_now.getHours() + ".0" + myDate_now.getMinutes();
        } else {
            return myDate_now.getHours() + "." + myDate_now.getMinutes();
        }
    },

    //获取当前时间作为时间戳
    GetNowTime2: function() {
        var myDate_now = new Date();
        return myDate_now.getTime();
    },

    //获取当前时间-带个:
    GetNowTime3: function() {
        var myDate_now = new Date();
        if (myDate_now.getMinutes() < 10) {
            return myDate_now.getHours() + ":0" + myDate_now.getMinutes();
        } else {
            return myDate_now.getHours() + ":" + myDate_now.getMinutes();
        }
    },

    //获取当前日期 带格式
    GetNowDate2: function() {
        var myDate_now = new Date();
        nowYear = myDate_now.getFullYear();
        var dd = new Date();
        var y = dd.getYear();
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return nowYear + "-" + m + "-" + d;
    },

    //获取当前日期的前后几天
    GetDateStr: function(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期 
        var y = dd.getFullYear();
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + "" + m + "" + d;
    },

    //获取当前日期的前后几天 带格式
    GetDateStr2: function GetDateStr2(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期 
        var y = dd.getFullYear();
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + "-" + m + "-" + d;
    },

    //
    addDate3: function(date, days) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + days);
        var y = dd.getFullYear();
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1); //获取当前月份的日期，不足10补0
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + '-' + m + '-' + d;
    },

    //金额数字格式化
    outputmoney: function(s) {
        n = 2;
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        t = "";
        for (i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        if (t.split("").reverse().join("").split(",")[0] == "-") {
            return t.split("").reverse().join("").replace(",", "") + "." + r;
        } else {
            return t.split("").reverse().join("") + "." + r;
        }
    },

    //金额格式化还原
    givebackmoney: function(s) {
        if (s.indexOf(".") > -1) {
            return s.split(".")[0].replace(/,/g, "");
        } else if (s.indexOf(".") < 0) {
            if (s.indexOf(",") > -1) {
                return s.split(".")[0].replace(/,/g, "");
            } else {
                return s;
            }
        } else {
            return s;
        }
    },

    //为开始日期，截至日期 格式化  1150413
    //调用过程
    opSEdate: function(value) {
        var date = new Date(value); // 或者直接new Date();
        return date.format("yyyyMMdd");
    },

    //翻译星期
    fanyiWeek: function(x) {
        var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var arys1 = new Array();
        arys1 = x.split('-'); //日期为输入日期，格式为 2013-3-10
        var ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), parseInt(arys1[2]));

        return "(" + week[ssdate.getDay()] + ")"; //就是你要的星期几.
    },




    //判断证券类型
    getStkType: function(code, mar) {
        if (mar == "SH" || mar == "sh") {
            if (code.indexOf("600") == 0) {
                return "1"; //上证A
            } else if (code.indexOf("2") == 0 || code.indexOf("9") == 0) {
                return "2"; //上证B
            } else if (code.indexOf("500") == 0) {
                return "4"; //上证封闭式基金
            } else if (code.indexOf("510") == 0 || code.indexOf("519") == 0 || code.indexOf("521") == 0 || code.indexOf("522") == 0 || code.indexOf("523") == 0 || code.indexOf("524") == 0) {
                return "5"; //上证开放式基金
            } else if (code.indexOf("000") == 0) {
                return "7"; //上证指数
            } else if (("010,019,020,090,091,103,104,105,107,110,113,130,121,122,124,126,130,190,191,201,202,203,204,700,704,733,738,743,744,751,752,788,799").indexOf(code.substr(0, 3)) == 0) {
                return "8"; //上证债券
            }
        } else if (mar == "SZ" || mar == "sz") {
            if (code.indexOf("000") == 0) {
                return "11"; //深证A
            } else if (code.indexOf("2") == 0 || code.indexOf("9") == 0) {
                return "12"; //深证B
            } else if (code.indexOf("184") == 0 || code.indexOf("150") == 0) {
                return "14"; //深证封闭式基金
            } else if (("160,161,162,163,164,165,166").indexOf(code.substr(0, 3)) == 0) {
                return "15"; //深证开放式基金 160,161,162,163,164,165,166
            } else if (code.indexOf("399") == 0) {
                return "16"; //深证指数
            } else if (("100,101,108,109,111,112,115,118,119,125,126,129,131,369").indexOf(code.substr(0, 3)) == 0) {
                return "18"; //深证债券
            } else if (code.indexOf("002") == 0) {
                return "31"; //中小板
            }
        } else if (mar == "STB" || mar == "stb") {
            return "30";
        }
    },



    //金额格式化
    moneyFixed: function(money) {
        var len = money.toString().split(".")[0].toString().length;
        if (len > 0 && len <= 4) {
            return [parseFloat(money).toFixed(2), ""];
        } else if (len > 4 && len <= 8) {
            return [parseFloat(money / 10000).toFixed(2), "万"];
        } else if (len > 8 && len <= 12) {
            return [parseFloat(money / 100000000).toFixed(2), "亿"];
        } else if (len > 12 && len <= 16) {
            return [parseFloat(money / 1000000000000).toFixed(2), "万亿"];
        } else if (len > 16) {
            return [parseFloat(money / 10000000000000000).toFixed(2), "兆"];
        }
    },

    moneyFixed_: function(money) {
        var len = money.toString().split(".")[0].toString().length;
        if (len > 0 && len <= 4) {
            return parseFloat(Math.abs(money)).toFixed(2);
        } else if (len > 4 && len <= 8) {
            return parseFloat(Math.abs(money) / 10000).toFixed(2) + "万";
        } else if (len > 8 && len <= 12) {
            return parseFloat(Math.abs(money) / 100000000).toFixed(2) + "亿";
        } else if (len > 12 && len <= 16) {
            return parseFloat(Math.abs(money) / 1000000000000).toFixed(2) + "万亿";
        } else if (len > 16) {
            return parseFloat(Math.abs(money) / 10000000000000000).toFixed(2) + "兆";
        }
    },

    moneyFixed__: function(money) {
        var len = Math.abs(money).toString().split(".")[0].toString().length;
        if (len > 0 && len <= 4) {
            return parseFloat(Math.abs(money)).toFixed(2);
        } else if (len > 4 && len <= 8) {
            if (len == 8) {
                return parseInt(Math.abs(money) / 10000) + "万";
            } else {
                return parseFloat(Math.abs(money) / 10000).toFixed(1) + "万";
            }
        } else if (len > 8 && len <= 12) {
            return parseFloat(Math.abs(money) / 100000000).toFixed(2) + "亿";
        } else if (len > 12 && len <= 16) {
            return parseFloat(Math.abs(money) / 1000000000000).toFixed(2) + "万亿";
        } else if (len > 16) {
            return parseFloat(Math.abs(money) / 10000000000000000).toFixed(2) + "兆";
        }
    },



    /***获取url参数***/
    getPageParam: function(paramName) {
        var reg = new RegExp("(^|\\?|&)" + paramName + "=([^&]*)(\\s|&|$)", "i");
        if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g, " "));
        return "";
    }
}