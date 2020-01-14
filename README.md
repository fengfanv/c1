# c1 JavaScript插件

电脑端 / 手机端 地区选择插件，日期选择插件，时间选择插件

[插件演示地址](https://fengfanv.github.io/c1/demo/index.html) | [BUG反馈](https://fengfanv.github.io/c1/demo/index.html)

### 使用方法

```javascript
c1.init({
  "elementId": "触发器ID",
  "type": "插件类型",
  "position": "显示位置编号"
})
```
### 参数说明

序号    |参数名    |参数含义    |值1    |值2    |值3
:-----:|:-----:|:-----:|:-----:|:-----:|:-----:
1  |elementId  |触发器ID|绑定元素ID |  |
2  |type  |使用插件的类型|address(地址选择器)|date(日期选择器)|time(时间选择器)
3  |position|插件显示位置|1(触发器下方)|2(屏幕底部屏幕的一半)|
4  |event  |-|-|-|-
