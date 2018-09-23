# HTML    ------ chapter-01-01

		Web页面概念
		HTML文档
		HTML标签
			常用标签
			列表标签
			表格标签
			布局标签
			头标签
		HTML注释
		



## Web页面概念

Web页面由页面文档，一般为HTML，CSS及JS组成，Html相当文档结构，起到布局作用，JS负责交互， CSS负责页面美化。

如何帮助浏览器正确地显示网页呢， Web文档使用<!DOCTYPE> 指定文档类型

<!DOCTYPE html> 表示HTML文档

## HTML文档

HTML 指的是超文本标记语言 (Hyper Text Markup Language)，由HTML 标签组成，是用来描述网页的一种语言。

HTML 文档是由 HTML标签(元素)定义的。

HTML已经定义很多元素，每个元素定义很属性。

很多属性用于定义样式和美观，这些属性不需要编写，交给CSS来完成。

下面主要介绍HTML标签，JS引用，CSS引用


```
<html>
<body>
    <h1>标题</h1>
    <p>段落</p>
</body>
</html>
```

例子解释
```
<html> 与 </html> 之间的文本描述网页
<body> 与 </body> 之间的文本是可见的页面内容
<h1> 与 </h1> 之间的文本被显示为标题
<p> 与 </p> 之间的文本被显示为段落
```

 下面我们了解更多html标签

## HTML标签

### 常用标签

|HTML标签|符合|实例|
|-|-|-|
|标题|h1 - h6|实例h1This is a heading/h1|
|分隔线|hr|hr/|
|段落|p|实例p锻炼p/|
|链接|a|a href="url" target="_blank"Link text/a|
|图片|img|img src="boat.gif" alt="Big Boat" 与背景图区别，其中背景图放在标签属性 background="/i/eg_background.jpg" |
|块级元素|div|它是可用于组合其他 HTML 元素的容器|
|文本元素|span|可用作文本的容器,为CSS提供设置部分文本样式|


### 列表标签

无序列表
```
<ul>
<li>Coffee</li>
<li>Milk</li>
</ul>
```

有序列表
```
<ol>
<li>Coffee</li>
<li>Milk</li>
</ol>
```


### 表格标签

```
<table border="1">
<tr>
<th>Heading</th>
<th>Another Heading</th>
</tr>
<tr>
<td>row 1, cell 1</td>
<td>row 1, cell 2</td>
</tr>
<tr>
<td>row 2, cell 1</td>
<td>row 2, cell 2</td>
</tr>
</table>
```
```
<th> 定义表头
<tr> 定义行
<td> 定义单元格
```

### 布局标签

```
<!DOCTYPE html>
<html>
<head></head>

<body>
<div id="header">
<h1>Asu header</h1>
</div>

<div id="nav">
nav1<br>
nav2<br>
nav3<br>
</div>


<div id="section">
<h2>context</h2>
<p>web page context web page contextweb page context</p>
</div>


<div id="footer">
footer Copyright ? asushiye.com
</div>

</body>
</html>

```

![html-layout](html-layout.png)

|HTML标签|描述|
|-|-|
|header|定义文档或节的页眉|
|nav|定义导航链接的容器|
|section|定义文档中的节|
|article|定义独立的自包含文章|
|aside|定义内容之外的内容（比如侧栏）|
|footer|定义文档或节的页脚|
|details|定义额外的细节|
|summary|定义 details 元素的标题|


### 头标签

<head>
  <base href="http://www.w3school.com.cn/i/" />
  <base target="_blank" />

  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">

</head>

base标签，第一个表示页面URL地址，基本地址，后面的图片，链接，CSS及JS引用填写相当路径就行

实例如下

```
<html>
<head>
<base href="http://www.w3school.com.cn/i/" />
<base target="_blank" />
</head>

<body>
<img src="eg_smile.gif" /><br />
<p>"http://www.w3school.com.cn/i/eg_smile.gif"</p>
<br /><br />
<p><a href="http://www.w3school.com.cn">W3School</a></p>

</body>
</html>
```


meta标签，<meta> 元素可提供有关页面的元信息（meta-information）

![html-meta](html-meta.png)

**keywords** 表示可以被搜索引擎使用的关键字时
**http-equiv** 属性为名称/值对提供了名称。并指示服务器在发送实际的文档之前先在要传送给浏览器的 MIME 文档头部包含名称/值对。
**content** 属性提供了名称/值对中的值，content 属性始终要和 name 属性或 http-equiv 属性一起使用。
```
<meta http-equiv="charset" content="iso-8859-1">
<meta http-equiv="expires" content="31 Dec 2008">

则HTTP请求报文

content-type: text/html
charset:iso-8859-1
expires:31 Dec 2008

```

## HTML注释

<!-- 在此处写注释 -->





