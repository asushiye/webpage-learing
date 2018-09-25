# JavaScript  快速入门  ------ chapter-02-01

		概念
		语法
		数据类型
			类型定义
			类型转换
		函数
		JS&DOM对象

## 概念
JavaScript 是属于网络的脚本语言！

JavaScript 被网页用来改进设计、验证表单、检测浏览器、创建cookies，以及更多的应用。

可以HTML相互交互的

## 语法

javascript 与Java有相同语法如下

区分大小写

每行结尾的分号可有可无， **推荐使用分号**

注释

单行注释以双斜杠开头（//）
多行注释以单斜杠和星号开头（/*），以星号和单斜杠结尾（*/）

括号表示代码块 

左括号{和右括号}之间



## 数据类型

字符串、数字、布尔、数组、对象、Null、Undefined

声明变量类型
```
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
```

```
字符串
var carname="Bill Gates";
数字
var x1=34.00; 
布尔
var x=true
var y=false
数组
var cars=new Array("Audi","BMW","Volvo");
或
var cars=["Audi","BMW","Volvo"];

对象
var person={firstname:"Bill", lastname:"Gates", id:5566};
对象属性有两种寻址方式
name=person.lastname;
name=person["lastname"];


```
Undefined 和 Null

Undefined 这个值表示变量不含有值。

可以通过将变量的值设置为 null 来清空变量。


### 类型转换

转换成字符串

```
arrayObject.toString()
booleanObject.toString()
dateObject.toString()
NumberObject.toString()
stringObject.toString()
```

转换成数字
```
parseInt()
parseFloat()

var iNum1 = parseInt("56.9");	//返回 56
var iNum1 = parseInt("red");	//返回 NaN

var fNum1 = parseFloat("12345red");	//返回 12345
var fNum2 = parseFloat("0xA");	//返回 NaN
var fNum3 = parseFloat("11.2");	//返回 11.2

```

强制类型转换

```
Boolean(value) - 把给定的值转换成 Boolean 型；
Number(value) - 把给定的值转换成数字（可以是整数或浮点数）；
String(value) - 把给定的值转换成字符串；
```

## 函数

```
<!DOCTYPE html>
<html>
<body>

<p>本例调用的函数会执行一个计算，然后返回结果：</p>

<p id="demo"></p>

<script>
function myFunction(a,b)
{
return a*b;
}

document.getElementById("demo").innerHTML=myFunction(4,3);
</script>

</body>
</html>
```

## JS&DOM对象

参考更多JS和DOM对象

http://www.w3school.com.cn/jsref/index.asp