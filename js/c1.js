// 作者：fengfanv
// github：https://github.com/fengfanv/c1



// var test = c1.init({
//     elementId: "",//绑定元素ID
//     type: "",//插件类型
//     position: "",//显示位置,1-触发器下方,2-屏幕下方
// })


; (function (win) {
    //插件样式
    var styleContent = ".clearfix:after,.clearfix:before {" +
        "content: '';" +
        "display: table;" +
        "}" +
        ".clearfix:after {" +
        "clear: both;" +
        "}" +
        ".clearfix {" +
        "*zoom: 1;" +
        "}" +
        ".c_address_fa {" +
        "height: auto;" +
        "background: white;" +
        "box-shadow: 0 0 5px #ccc;" +
        "position: fixed;" +
        "left: 0;" +
        "top: 0;" +
        "z-index: 9999;" +
        "background: white;" +
        "}" +
        ".c_address_header {" +
        "width: 100%;" +
        "height: 38px;" +
        "font-size: 17px;" +
        "color: white;" +
        "text-align: center;" +
        "line-height: 38px;" +
        "background: red;" +
        "}" +
        /*已选择区域*/
        ".c_address_yxz {" +
        "height: auto;" +
        "}" +
        ".c_address_yxz>li {" +
        "height: auto;" +
        "padding-left: 20px;" +
        "list-style: none;" +
        "}" +
        ".c_address_yxz_line_aa," +
        ".c_address_yxz_line_a," +
        ".c_address_yxz_line_b," +
        ".c_address_yxz_line_c {" +
        "display: block;" +
        "width: 10px;" +
        "float: left;" +
        "margin-right: 14px;" +
        "}" +
        /*就一个点 aa*/
        ".c_address_yxz_line_aa .c_address_yxz_line_xian_t {" +
        "width: 1px;" +
        "height: 18px;" +
        "margin: 0 auto;" +
        "background: white;" +
        "}" +
        ".c_address_yxz_line_aa .c_address_yxz_line_dian {" +
        "width: 5px;" +
        "height: 5px;" +
        "margin: 0 auto;" +
        "background: red;" +
        "border-radius: 50%;" +
        "}" +
        ".c_address_yxz_line_aa .c_address_yxz_line_xian {" +
        "width: 1px;" +
        "height: 15px;" +
        "margin: 0 auto;" +
        "background: white;" +
        "}" +
        /*就一个点*/
        /*开始点 a*/
        ".c_address_yxz_line_a .c_address_yxz_line_xian_t {" +
        "width: 1px;" +
        "height: 18px;" +
        "margin: 0 auto;" +
        "background: white;" +
        "}" +
        ".c_address_yxz_line_a .c_address_yxz_line_dian {" +
        "width: 5px;" +
        "height: 5px;" +
        "margin: 0 auto;" +
        "background: red;" +
        "border-radius: 50%;" +
        "}" +
        ".c_address_yxz_line_a .c_address_yxz_line_xian {" +
        "width: 1px;" +
        "height: 15px;" +
        "margin: 0 auto;" +
        "background: red;" +
        "}" +
        /*开始点*/
        /*中间点 b*/
        ".c_address_yxz_line_b .c_address_yxz_line_xian_t {" +
        "width: 1px;" +
        "height: 18px;" +
        "margin: 0 auto;" +
        "background: red;" +
        "}" +
        ".c_address_yxz_line_b .c_address_yxz_line_dian {" +
        "width: 5px;" +
        "height: 5px;" +
        "margin: 0 auto;" +
        "background: red;" +
        "border-radius: 50%;" +
        "}" +
        ".c_address_yxz_line_b .c_address_yxz_line_xian {" +
        "width: 1px;" +
        "height: 15px;" +
        "margin: 0 auto;" +
        "background: red;" +
        "}" +
        /*中间点*/
        /*结束点 c*/
        ".c_address_yxz_line_c .c_address_yxz_line_xian_t {" +
        "width: 1px;" +
        "height: 18px;" +
        "margin: 0 auto;" +
        "background: red;" +
        "}" +
        ".c_address_yxz_line_c .c_address_yxz_line_dian {" +
        "width: 5px;" +
        "height: 5px;" +
        "margin: 0 auto;" +
        "background: red;" +
        "border-radius: 50%;" +
        "}" +
        ".c_address_yxz_line_c .c_address_yxz_line_xian {" +
        "width: 1px;" +
        "height: 15px;" +
        "margin: 0 auto;" +
        "background: white;" +
        "}" +
        /*结束点*/
        ".c_address_yxz_line_name {" +
        "display: block;" +
        "float: left;" +
        "line-height: 38px;" +
        "font-size: 16px;" +
        "}" +
        /*选择区*/
        ".c_address_xz {" +
        "width: auto;" +
        "height: auto;" +
        "border-top: 1px solid #f0f0f0;" +
        "overflow: auto;" +
        "}" +
        ".c_address_xz>li {" +
        "padding-left: 20px;" +
        "line-height: 34px;" +
        "list-style: none;" +
        "}";
    var head = document.getElementsByTagName('head')[0];
    style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = styleContent;
    } else {
        style.appendChild(document.createTextNode(styleContent));
    }
    head.appendChild(style);
    //插件主体
    var plugin = function (object) {
        this.pluginName = "c1"
        this.elementId = object.elementId;
        this.type = object.type;
        this.position = object.position;
        this.isCreate = false;
        if (this.type === "address") {
            //初始化已选地址信息
            this.addressInfo = {
                "a": "",//省
                "b": "",//市
                "c": ""//区县
            };
            //创建地址元素ID
            this.addressCreateNumber();
            var element = document.getElementById(this.elementId)
            //为插件触发器绑定单击事件
            element.onclick = function () {

                var _this = this;
                if (_this.isCreate) {
                    //console.log(document.getElementById(_this.addressElementId));
                    document.body.removeChild(document.getElementById(_this.addressElementId));
                    _this.isCreate = false;
                } else {
                    _this.createAddress();
                    _this.isCreate = true;
                }
            }.bind(this)
        }
    }
    //公共方法
    //地址插件数据
    plugin.prototype.addressData = address_arr;
    //清除元素内部,保留元素本身
    plugin.prototype.elementEmpty = function (element) {
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild);
        }
    }
    //获取元素距离文档顶部的位置
    plugin.prototype.getOffset = function (element) {
        var winScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var winScrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        var e = element.getBoundingClientRect();
        return {
            "top": e.top + winScrollTop,
            "left": e.left + winScrollLeft,
            "winScrollTop": winScrollTop,
            "winScrollLeft": winScrollLeft
        }
    }
    //创建地址插件相关元素编号
    plugin.prototype.addressCreateNumber = function () {
        var _this = this;
        //生成一个4位随机数
        var random = (Math.random() + "").substring(2, 6);
        //插件地址元素ID
        _this.addressElementId = _this.pluginName + "-" + _this.type + "-" + random;
        //插件地址已选区ID
        _this.addressElementYxId = _this.pluginName + "-" + _this.type + "-" + "yx" + "-" + random;
        //插件地址选择区ID
        _this.addressElementXzId = _this.pluginName + "-" + _this.type + "-" + "xz" + "-" + random;
    }
    //创建地址插件
    plugin.prototype.createAddress = function () {
        var _this = this;
        var elementFa = document.createElement("div");
        elementFa.id = _this.addressElementId;
        elementFa.className = "c_address_fa";
        //触发器元素
        var cfqElement = document.getElementById(_this.elementId);
        if (_this.position == 1) {
            //第一种显示方式（触发器下方）
            var elementOffset = _this.getOffset(cfqElement);
            elementFa.style.width = cfqElement.offsetWidth + "px";
            elementFa.style.position = "fixed";
            elementFa.style.left = elementOffset.left - elementOffset.winScrollLeft + "px";
            elementFa.style.top = elementOffset.top - elementOffset.winScrollTop + cfqElement.offsetHeight + "px";
            var winScrollHeight = document.body.scrollHeight || 0;
            if (winScrollHeight != 0) {
                //当页面有滚动条时，插件根据触发器位置重新设置位置
                document.body.onscroll = function () {
                    if (this.isCreate) {
                        var addressCfq = document.getElementById(this.elementId);
                        var cfqOffset = this.getOffset(addressCfq);
                        var addressFa = document.getElementById(this.addressElementId);
                        //console.log(cfqOffset);
                        addressFa.style.left = cfqOffset.left - cfqOffset.winScrollLeft + "px";
                        addressFa.style.top = ((cfqOffset.top - cfqOffset.winScrollTop) + addressCfq.offsetHeight) + "px";
                        //console.log(cfqOffset.top - cfqOffset.winScrollTop);
                    }
                }.bind(_this);
            }
        } else if (_this.position == 2) {
            //第二种显示方式（屏幕下方）
            elementFa.style.width = "100%";
            elementFa.style.position = "fixed";
            elementFa.style.left = 0 + "px";
            elementFa.style.top = "auto";
            elementFa.style.bottom = 0 + "px";
        }
        //创建地址插件显示标题
        var elementTitle = document.createElement("div");
        elementTitle.className = "c_address_header";
        elementTitle.innerText = "选择地址";
        elementFa.appendChild(elementTitle);
        //创建地址插件已选显示区
        var elementYx = document.createElement("ul");
        elementYx.className = "c_address_yxz";
        elementYx.id = _this.addressElementYxId;
        elementFa.appendChild(elementYx);
        //创建地址插件选择区
        var elementXz = document.createElement("ul");
        if (_this.position == 2) {
            elementXz.style.height = (window.innerHeight * 0.5) + 'px';
        }
        elementXz.className = "c_address_xz";
        elementXz.id = _this.addressElementXzId;
        elementFa.appendChild(elementXz);
        document.body.appendChild(elementFa);
        //渲染数据
        _this.addressRenderYx();
        _this.addressRenderXz();

    }
    //地址插件渲染已选显示区
    plugin.prototype.addressRenderYx = function () {
        //consoleconsole.log('调用addressRenderYx');
        var _this = this;
        //已选显示区创建元素方法
        var createElement = function (type, text) {
            var liFa = document.createElement("li");
            liFa.className = "clearfix";
            //左部分，根据type值设置样式
            var div1 = document.createElement('div');
            if (type == "aa") {
                div1.className = "c_address_yxz_line_aa";
            } else if (type == "a") {
                div1.className = "c_address_yxz_line_a";
            } else if (type == "b") {
                div1.className = "c_address_yxz_line_b";
            } else if (type == "c") {
                div1.className = "c_address_yxz_line_c";
            }
            //左部分创建元素.上部分线.点.下部线
            var linexiant = document.createElement("p");
            linexiant.className = "c_address_yxz_line_xian_t";
            div1.appendChild(linexiant);
            var linedian = document.createElement("p");
            linedian.className = "c_address_yxz_line_dian";
            div1.appendChild(linedian);
            var linexian = document.createElement("p");
            linexian.className = "c_address_yxz_line_xian";
            div1.appendChild(linexian);
            liFa.appendChild(div1);
            //创建显示右部分的文字部分
            var span1 = document.createElement("span");
            span1.className = "c_address_yxz_line_name";
            span1.innerHTML = text;
            span1.onclick = function (_type) {
                if (_type == "a") {
                    this.addressInfo.a = "";
                    this.addressInfo.b = "";
                    this.addressInfo.c = "";
                } else if (_type == "b") {
                    this.addressInfo.b = "";
                    this.addressInfo.c = "";
                } else if (_type == "c") {
                    this.addressInfo.c = "";
                }
                //选择后重新渲染
                this.addressRenderYx();
                this.addressRenderXz();

            }.bind(_this, type)
            liFa.appendChild(span1);
            //渲染到已选显示区
            document.getElementById(_this.addressElementYxId).appendChild(liFa);
        }
        //渲染已选区第一步清除元素内旧元素
        _this.elementEmpty(document.getElementById(_this.addressElementYxId));
        //渲染已选取第二步根据参数渲染元素
        var addressInfo = _this.addressInfo;
        if (addressInfo.a.length == 0 && addressInfo.b.length == 0 && addressInfo.c.length == 0) {
            createElement("aa", "请选择省份")
        } else if (addressInfo.a.length != 0 && addressInfo.b.length == 0 && addressInfo.c.length == 0) {
            createElement("a", addressInfo.a)
            createElement("c", "请选择地市")
        } else if (addressInfo.a.length != 0 && addressInfo.b.length != 0 && addressInfo.c.length == 0) {
            createElement("a", addressInfo.a)
            createElement("b", addressInfo.b)
            createElement("c", "请选择区县")
        }
    }
    //地址插件选择区域渲染
    plugin.prototype.addressRenderXz = function () {
        //console.log("调用addressRenderXz");
        //console.log(this);
        var _this = this;
        //选择区创建元素方法
        var createElement = function (type) {
            var aArr = [];
            var bArr = [];
            var cArr = [];
            var provinceArr = _this.addressData;
            //console.log(type); 

            var aArrLen = provinceArr.length;
            if (type == "a") {
                //省份
                for (var i = 0; i < aArrLen; i++) {
                    var element = document.createElement('li');
                    element.innerText = provinceArr[i].name;
                    element.onclick = function (provinceName) {
                        this.addressInfo.a = provinceName;
                        //重新渲染已选显示区和选择区
                        this.addressRenderYx();
                        this.addressRenderXz();
                    }.bind(_this, provinceArr[i].name);
                    document.getElementById(_this.addressElementXzId).appendChild(element);
                }
            } else if (type == "b") {
                //市
                //筛选已选省份的地级市
                for (var k = 0; k < aArrLen; k++) {
                    if (provinceArr[k].name == _this.addressInfo.a) {
                        bArr = provinceArr[k].children;
                        break;
                    }
                }
                //渲染
                var bArrLen = bArr.length;
                for (y = 0; y < bArrLen; y++) {
                    var element = document.createElement('li');
                    element.innerText = bArr[y].name;
                    element.onclick = function (cityName) {
                        this.addressInfo.b = cityName;
                        //重新渲染已选显示区和选择区
                        this.addressRenderYx();
                        this.addressRenderXz();
                    }.bind(_this, bArr[y].name)
                    document.getElementById(_this.addressElementXzId).appendChild(element)
                }
            } else if (type == "c") {
                //区县
                //筛选已选省份的地级市
                for (var k = 0; k < aArrLen; k++) {
                    if (provinceArr[k].name == _this.addressInfo.a) {
                        bArr = provinceArr[k].children;
                        break;
                    }
                }
                //筛选已选择市的区县
                var bArrLen = bArr.length;
                for (y = 0; y < bArrLen; y++) {
                    if (bArr[y].name == _this.addressInfo.b) {
                        cArr = bArr[y].children;
                        break;
                    }
                }
                //渲染
                var cArrLen = cArr.length;
                for (p = 0; p < cArrLen; p++) {
                    var element = document.createElement('li');
                    element.innerText = cArr[p].name;
                    element.onclick = function (areaName) {
                        this.addressInfo.c = areaName;
                        document.body.removeChild(document.getElementById(this.addressElementId));
                        this.isCreate = false;
                        //为触发器设置已选地址的值
                        document.getElementById(this.elementId).value = this.addressInfo.a + '-' + this.addressInfo.b + '-' + this.addressInfo.c;
                        //清空选择的地址
                        this.addressInfo = { a: "", b: "", c: "" };

                    }.bind(_this, cArr[p].name)
                    document.getElementById(_this.addressElementXzId).appendChild(element)
                }
            }
        }
        //清楚元素内旧元素
        _this.elementEmpty(document.getElementById(_this.addressElementXzId));
        //根据参数渲染元素
        var addressInfo = _this.addressInfo;
        if (addressInfo.a.length != 0 && addressInfo.b.length == 0 && addressInfo.c.length == 0) {//只有省，渲染市
            createElement("b")
        } else if (addressInfo.a.length != 0 && addressInfo.b.length != 0 && addressInfo.c.length == 0) {//只有省，只有市，渲染区县
            createElement("c")
        } else if (addressInfo.a.length == 0 && addressInfo.b.length == 0 && addressInfo.c.length == 0) {//都没有，渲染省
            createElement("a")
        }
    }
    //插件初始化方法
    plugin.init = function (initCs) {
        var _this = this;
        if (initCs.elementId && initCs.type && initCs.position) {
            return new _this(initCs);
        } else {
            console.error(this.pluginName + "-error:参数不足，绑定插件失败！");
        }
    }
    win["c1"] = plugin;
})(window);
