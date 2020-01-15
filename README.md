# c1 - JavaScript插件

电脑端 / 手机端 地区选择插件，日期选择插件，时间选择插件

[插件演示地址](https://fengfanv.github.io/c1/demo/index.html) | [BUG反馈](https://fengfanv.github.io/c1/demo/index.html)

### 使用方法

##### 1、引入插件

```javascript
<script src="../js/c1.js"></script>
```

##### 2、引入地址数据(不使用地址选择插件可不引用)

```javascript
<script src="../js/addressData.js"></script>
```

##### 3、使用地址选择插件

```javascript
c1.init({
  "elementId": "触发器ID",
  "type": "插件类型",
  "position": "显示位置编号"
})
```

##### 4、使用日期选择插件

```javascript
//正在开发中...
```

##### 5、使用时间选择插件

```javascript
//正在开发中...
```

### 参数说明

序号    |参数名    |参数含义    |值1    |值2    |值3
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
1  |elementId  |触发器ID|绑定元素ID |  |
2  |type  |使用插件的类型|address(地址选择器)|date(日期选择器)|time(时间选择器)
3  |position|插件显示位置|1(触发器下方)|2(屏幕底部屏幕的一半)|
4  |event  |-|-|-|-

### 源码结构
```javascript
;(function (win) {
  //插件样式区
  var styleContent = "...";
  
  //插件程序主体方法
  var plugin = function (object) {
    //...
  }
  
  //地址插件地址数据
  plugin.prototype.addressData = address_arr;
  
  //清空元素内元素方法
  plugin.prototype.elementEmpty = function (element) {
    //...
  }
  
  //获取元素距离文档顶部的位置方法
  plugin.prototype.getOffset = function (element) {
    //...
  }
  
  //地址插件生成必要的元素ID方法
  plugin.prototype.addressCreateNumber = function () {
    //...
  }
  
  //创建地址插件方法
  plugin.prototype.createAddress = function () {
    //...
  }
  
  //地址插件渲染已选显示区方法
  plugin.prototype.addressRenderYx = function () {
    //...
  }
  
  //地址插件选择区域渲染方法
  plugin.prototype.addressRenderXz = function () {
    //...
  }
  
  //插件使用初始化方法
  plugin.init = function (initCs) {
    //...
  }
  
  //插件注册
  win["c1"] = plugin;
})(window);
```
