## HTML

## 1.HTML语言简介

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

本质: 从服务器下载HTML代码，然后渲染出网页。

### 1.1 定义

HTML 语言定义网页的结构和内容，

CSS 样式表定义网页的样式，

JavaScript 语言定义网页与用户的互动行为。

网页的 HTML 代码由许许多多不同的标签（tag）构成。学习 HTML 语言，就是学习各种标签的用法。标签用来告诉浏览器，如何处理这段代码。标签的内容就是浏览器所要渲染的、展示在网页上的内容。

浏览器渲染网页时，会把 HTML 源码解析成一个标签树，每个标签都是树的一个节点（node）。这种节点就称为网页元素（element）。所以，“标签”和“元素”基本上是同义词，只是使用的场合不一样：标签是从源码角度来看，元素是从编程角度来看，比如`<p>`标签对应网页的`p`元素。

此外，HTML不区分大小写和内容的缩进与换行。



### 1.2 块级元素，行内元素

块级元素（block）默认占据一个独立的区域，在网页上会自动另起一行，占据 100% 的宽度。

行内元素（inline）行内元素默认与其他元素在同一行，不产生换行。

### 1.3 属性

属性（attribute）是标签的额外信息，使用空格与标签名和其他属性分隔。

```html
<img src="demo.jpg" width="500">
```

上面代码中，`<img>`标签有两个属性：`src`和`width`。

==属性可以用等号指定属性值==，比如上例的`demo.jpg`就是`src`的属性值。

### 1.4 网页标签：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
</body>
</html>
```

1.`<!doctype>`，表示文档类型，告诉浏览器如何解析网页。

一般来说，简单声明`doctype`为`html`即可。

2.`<html>`

`<html>`标签是网页的顶层容器，即标签树结构的顶层节点，也称为根元素（root element），其他元素都是它的子元素。一个网页只能有一个`<html>`标签。

该标签的`lang`属性，表示网页内容默认的语言。

3.`<head>`

`<head>`标签是一个容器标签，用于放置网页的元信息。它的内容不会出现在网页上，而是为网页渲染提供额外信息。

`<head>`是`<html>`的第一个子元素。如果网页不包含`<head>`，浏览器会自动创建一个。

`<head>`的子元素有下面七个

- `<meta>`：设置网页的元数据。

- `<link>`：连接外部样式表。
- `<title>`：设置网页标题。
- `<style>`：放置内嵌的样式表。
- `<script>`：引入脚本。
- `<noscript>`：浏览器不支持脚本时，所要显示的内容。
- `<base>`：设置网页内部相对 URL 的计算基准。

4.`<meta>`

一个`<meta>`标签就是一项元数据，网页可以有多个`<meta>`。==`<meta>`标签约定放在`<head>`内容的最前面。==

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page Title</title>
</head>
```

上面例子中，第一个`<meta>`标签表示网页采用 UTF-8 格式编码，第二个`<meta>`标签表示网页在手机端可以自动缩放。

<meta>标签有五个属性，下面依次介绍。
**（1）charset 属性**

同上，用来指定编码方式，一般来说都采用UTF-8编码。

**（2）name 属性，content 属性** 

```html
<head>
  <meta name="description" content="HTML 语言入门">
  <meta name="keywords" content="HTML,教程">
  <meta name="author" content="张三">
</head>
```

`name`属性表示元数据的名字，`content`属性表示元数据的值。它们合在一起使用，就可以为网页指定一项元数据。

用法--**搜索引擎**

- `description`：搜索引擎（如 Google）会在搜索结果中显示 `<meta name="description">` 中的内容作为网页的简要描述。

~~**（3）http-equiv 属性，content 属性**~~

<meta>标签的http-equiv属性用来补充 HTTP 回应的头信息字段，如果服务器发回的 HTTP 回应缺少某个字段，就可以用它补充。<meta>标签的content属性是对应的字段内容。

5.`<title>`

`<title>`标签用于指定网页的标题，显示在浏览器窗口的标题栏。

搜索引擎根据这个标签，显示每个网页的标题。它对于网页在搜索引擎的排序，有很大的影响，应该精心安排，反映网页的主题。

`<title>`标签的内部，不能再放置其他标签，只能放置无格式的纯文本。

6.`<body>`

`<body>`标签是一个容器标签，用于放置网页的主题内容。==它是`<html>`的第二个子元素==，紧跟在`<head>`后面。

### 1.5 空格和换行

HTML 语言有自己的空格处理规则。标签内容的头部和尾部的空格，一律忽略不计。

标签内容里面的多个连续空格（包含制表符`\t`），会被浏览器合并成一个。

浏览器还会将文本里面的换行符（`\n`）和回车符（`\r`），替换成空格。

```html
<p>hello



world
</p>
```

上面代码中，`hello`与`world`之间有多个换行，浏览器会将它们替换成空格，然后再将多个空格合并成一个。网页渲染的结果是，`hello`与`world`之间有一个空格。

### 1.6 注释

写法：<!-- XXX -->

注释可以跨行



##2.URL 简介

URL 是“统一资源定位符”（Uniform Resource Locator）的首字母缩写，中文译为“网址”，表示各种资源的互联网地址。下面就是一个典型的 URL。

```
https://www.example.com/path/index.html
```

资源，可以简单理解成各种可以通过互联网访问的文件，比如网页、图像、音频、视频、JavaScript 脚本等等。只有知道了它们的 URL，才能在互联网上获取它们。

###2.1 协议

协议（scheme）是浏览器请求服务器资源的方法，上例是`https://`的部分，表示使用 HTTPS 协议。

HTTP 和 HTTPS 的协议名称后面，紧跟着一个冒号和两个斜杠（`://`）。其他协议不一定如此，邮件地址协议`mailto:`的协议名后面只有一个冒号，比如`mailto:foo@example.com`。

### 2.2 主机

主机（host）是资源所在的网站名或服务器的名字，又称为域名。上例的主机是`www.example.com`。

有些主机没有域名，只有 IP 地址，比如`192.168.2.15`。这种情况常常出现在局域网(路由器)。

###2.3 端口

同一个域名下面可能同时包含多个网站，它们之间通过端口（port）区分。“端口”就是一个整数，可以简单理解成，访问者告诉服务器，想要访问哪一个网站。HTTP 协议的默认端口是80，如果省略了这个参数，服务器就会返回80端口的网站。

端口紧跟在域名后面，两者之间使用冒号分隔，比如`www.example.com:80`。

### 2.4 路径

路径（path）是资源在网站的位置。比如，`/path/index.html`这个路径，指向网站的`/path`子目录下面的网页文件`index.html`。

###2.5 查询参数

查询参数（parameter）是提供给服务器的额外信息。参数的位置是在路径后面，两者之间使用`?`分隔，上例是`?key1=value1&key2=value2`。（B站查询我的数据）

###2.6 锚点

锚点（anchor）是网页内部的定位点，使用`#`加上锚点名称，放在网址的最后，比如`#anchor`。浏览器加载页面以后，会自动滚动到锚点所在的位置。

锚点名称通过网页元素的`id`属性命名

###2.7 URL字符

URL 的各个组成部分，只能使用以下这些字符。

- 26个英语字母（包括大写和小写）
- 10个阿拉伯数字
- 连词号（`-`）
- 句点（`.`）
- 下划线（`_`）

此外，还有18个字符属于 URL 的保留字符，只能在给定的位置出现。比如，查询参数的开头是问号（`?`）网址的其他部分如果要使用这些保留字符，必须使用它们的转义形式。

URL 字符转义的方法是，在这些字符的十六进制 ASCII 码前面加上百分号（`%`）。下面是这18个字符及其转义形式。

- `!`：%21
- `#`：%23
- `$`：%24
- `&`：%26
- `'`：%27
- `(`：%28
- `)`：%29
- `*`：%2A
- `+`：%2B
- `,`：%2C
- `/`：%2F
- `:`：%3A
- `;`：%3B
- `=`：%3D
- `?`：%3F
- `@`：%40
- `[`：%5B
- `]`：%5D

举例来说，有一个网页的 URL 是`foo?bar.html`，即文件里面包含一个问号，那么需要写成`foo%3Fbar.html`。

值得注意的是，空格的转义形式是`%20`。对于那些包含空格的文件名，这个转义是必须的。

既不属于合法字符、也不属于保留字符的其他字符（比如汉字），理论上不需要手动转义，可以直接写在 URL 里面，浏览器会自动将它们转义，发给服务器。

### 2.8 绝对URL和相对URL

绝对 URL 指的是，只靠 URL 本身就能确定资源的位置。这意味着，URL 必须带有资源的完整信息，包含协议、主机、路径等部分。前面的例子都是绝对 URL。

相对 URL 指的是，URL 不包含资源位置的全部信息，必须结合当前网页的位置，才能定位资源。比如，当前网页的 URL 是`https://www.example.com/path/index.html`，该网页上面有一个资源，URL 指向`a.html`，这个就是相对 URL。因为只知道`a.html`，并不能定位资源。浏览器假定，`a.html`与当前网址在同一个子目录下面，从而得到绝对 URL `https://www.example.com/path/a.html`。

###2.9 `<base>`

`<base>`标签指定网页内部的所有相对 URL 的计算基准。整张网页只能有一个`<base>`标签，而且只能放在`<head>`里面。它是单独使用的标签，没有闭合标签

##3.网页元素的属性

网页元素的属性（attribute）可以定制元素的行为，不同的属性会导致元素有不同的行为。元素属性的写法是 HTML 标签内部的“键值对”。

```
<html lang="en">
```

上面代码中，`<html>`标签内部的键值对`lang="en"`，就称为`html`元素的属性。属性名为`lang`，属性值为`en`。

有些属性是布尔属性，即属性值是一个布尔值，只有“打开”和“关闭”两种情况。这时属性值可以省略，只要添加了属性名，就表示打开该属性。

### 3.1全局属性

全局属性（global attributes）是所有元素都可以使用的属性。也就是说，你可以把下面的属性，加在任意一个网页元素上面，不过有些属性对某些元素可能不产生意义。

#### 1) id

`id`属性是元素在网页内的唯一标识符。比如，网页可能包含多个`<p>`标签，`id`属性可以指定每个`<p>`标签的唯一标识符。

```
<p id="p1"></p>
<p id="p2"></p>
<p id="p3"></p>
```

上面代码中，三个`<p>`标签具有不同的`id`属性，因此可以区分。

`id`属性的值必须是全局唯一的，同一个页面不能有两个相同的`id`属性。另外，`id`属性的值不得包含空格。

`id`属性的值还可以在最前面加上`#`，放到 URL 中作为锚点，定位到该元素在网页内部的位置。比如，用户访问网址`https://foo.com/index.html#bar`的时候，浏览器会自动将页面滚动到`bar`的位置，让用户第一眼就看到这部分内容。

#### 2) class

`class`属性用来对网页元素进行分类。如果不同元素的`class`属性值相同，就表示它们是一类的。

```
<p class="para"></p>
<p></p>
<p class="para"></p>
```

上面代码中，第一个`<p>`和第三个`<p>`是一类，因为它们的`class`属性相同。

元素可以同时具有多个 class，它们之间使用空格分隔。

```
<p class="p1 p2 p3"></p>
```

上面的`p`元素同时具有`p1`、`p2`、`p3`三个 class。

####3) title

`title`属性用来为元素添加附加说明。大多数浏览器中，鼠标悬浮在元素上面时，会将`title`属性值作为浮动提示，显示出来。

```
<div title="版权说明">
  <p>本站内容使用创意共享许可证，可以自由使用。</p>
</div>
```

上面代码中，`title`属性解释了这一块内容的目的。鼠标悬停在上面时，浏览器会显示一个浮动提示。一旦鼠标移开，提示就会消失。

#### 4) tanbindex

tabindex属性的值是一个整数，表示用户按下 Tab 键的时候，网页焦点转移的顺序。不同的属性值有不同的含义。

负整数：该元素可以获得焦点（比如使用 JavaScript 的focus()方法），但不参与 Tab 键对网页元素的遍历。这个值通常是-1。
0：该元素参与 Tab 键的遍历，顺序由浏览器指定，通常是按照其在网页里面出现的位置。
正整数：网页元素按照从小到大的顺序（1、2、3、……），参与 Tab 键的遍历。如果多个元素的tabindex属性相同，则按照在网页源码里面出现的顺序遍历。

<p tabindex="0">这段文字可以获得焦点。</p>
上面代码中，<p>标签的tabindex为0，意味着该元素可以获得焦点，并且也可以被 Tab 键遍历，顺序由其在源码里面的位置决定。

一般来说，tabindex属性最好都设成0，按照自然顺序进行遍历，这样比较符合用户的预期，除非网页有特殊布局。如果网页所有元素都没有设置tabindex，那么只有那些默认可以遍历的元素（比如链接、输入框等）才能参与 Tab 键的遍历，顺序由其在源码的位置决定。因此实际上，只有那些无法获得焦点的元素（比如<span>、<div>）需要参与遍历，才有必要设置tabindex属性。

####5) accesskey

`accesskey`属性指定网页元素获得焦点的快捷键，该属性的值必须是单个的可打印字符。只要按下快捷键，该元素就会得到焦点。

```
<button accesskey="s">提交</button>
```

上面代码中，`<button>`的快捷键是`s`，按下快捷键，该元素就得到了焦点。

注意，`accesskey`如果跟操作系统或浏览器级别的快捷键有冲突，这时不会生效。

#### 6) style

`style`属性用来指定当前元素的 CSS 样式。

#### 7)hidden

`hidden`是一个布尔属性，表示当前的网页元素不再跟页面相关，因此浏览器不会渲染这个元素，所以就不会在网页中看到它。

```
<p hidden>本句不会显示在页面上。</p>
```

上面代码中，这个`p`元素不会出现在网页上。

注意，CSS 的可见性设置，高于`hidden`属性。如果 CSS 设为该元素可见，`hidden`属性将无效。

#### 8) lang,dir

`lang`属性指定网页元素使用的语言。

`dir`属性表示文字的阅读方向，有三个可能的值。

- `ltr`：从左到右阅读，比如英语。
- `rtl`：从右到左阅读，阿拉伯语、波斯语、希伯来语都属于这一类。
- `auto`：浏览器根据内容的解析结果，自行决定。

#### 9) translate

`translate`属性只用于文本元素，用来指示翻译软件，不翻译该文本。

```html
<p>
  <span translate="no">Wien<span>
  named world's most liveable city (again)!
</p>
```

上面示例中，`translate="no"`用来告诉翻译软件，不要翻译`<span>`元素内的文本。

如果`translate`设为`yes`，就告诉翻译软件应该翻译该文本。

#### 10) contenteditable

HTML 网页的内容默认是用户不能编辑，`contenteditable`属性允许用户修改内容。它有两个可能的值。

- `true`或空字符串：内容可以编辑
- `false`：不可以编辑

```html
<p contenteditable="true">
鼠标点击，本句内容可修改。
</p>
```

上面代码中，鼠标单击句子，就可以进入编辑状态，用户可以改变句子的内容。当然，除非提交到服务器，否则刷新页面还是显示原来的内容。

该属性是枚举属性，不是布尔属性，规范的写法是最好带上属性值。

#### 11) spellcheck

顾名思义就是拼写检查，但是浏览器一般会自带拼写检查功能

它有两个可能的值。

- `true`：打开拼写检查
- `false`：关闭拼写检查

注意，由于该属性只在编辑时生效，所以这个例子必须加上`contenteditable`属性，表示本段内容可编辑。鼠标单击就可以进入编辑状态，这时才会看到拼写提示。不可编辑的状态下，拼写错误是不提示显示的。对于那些不可编辑的元素，该属性无效。

这个属性看上去像布尔属性，但是其实是枚举属性，所以最好不要省略它的值。如果没有指定这个属性，浏览器将自行决定是否打开拼写检查。

#### 12） `data-`属性

`data-`属性用于放置自定义数据。如果没有其他属性或元素合适放置数据，就可以放在`data-`属性。

```
<a href="#" class="tooltip" data-tip="this is the tip!">链接</a>
```

上面代码中，`data-tip`用于放置链接的提示文字。

由于`data-`属性只能通过 CSS 或 JavaScript 利用，所以这里不做详细介绍了。下面是 CSS 的例子。

```css
/* HTML 代码如下
<div data-role="mobile">
Mobile only content
</div>
*/
div[data-role="mobile"] {
  display:none;
}

/* HTML 代码如下
<div class="test" data-content="This is the div content">test</div>
*/
.test {
  display: inline-block;
}
.test:after {
  content: attr(data-content);
}
```

## 4.网站的语义结构

### 4.1含义

HTML 标签的一个重要作用，就是声明网页元素的性质，使得用户只看标签，就能了解这个元素的意义，阅读 HTML 源码就能了解网页的大致结构。这被称为 HTML 的语义原则。

下面就是一个典型的语义结构的网页。

```html
<body>
  <header>页眉</header>
  <main>
    <article>
      <h1>文章标题</h1>
      <p>文章内容</p>
    </article>
  </main>
  <footer>页尾</footer>
</body>
```

只看上面的代码，就可以知道，页面分成页眉（`<header>`）、主体（`<main>`）、页尾（`<footer>`）三个部分。

编写 HTML 网页，第一步就是写出语义结构的网页骨架。

一个网页可以有多个`<header>`,但是一个具体的场景里面只能包含一个,只能有一个和`<main>`,且`<header>`里面不能包含另一个`<header>`或`<footer>`

![image-20250331154138945](E:\Knowledge\Obsidian\学习园地\前端笔记\image-20250331154138945.png)

###4.2`<article>`

`<article>`标签表示页面里面一段完整的内容，即使页面的其他部分不存在，也具有独立使用的意义，通常用来表示一篇文章或者一个论坛帖子。它可以有自己的标题（`<h1>`到`<h6>`）。

```html
<article>
  <h2>文章标题</h2>
  <p>文章内容</p>
</article>
```

一个网页可以包含一个或多个`<article>`，比如包含多篇文章。

### 4.3`<aside>`

`<aside>`标签用来放置与网页或文章主要内容间接相关的部分。网页级别的`<aside>`，可以用来放置侧边栏，但不一定就在页面的侧边；文章级别的`<aside>`，可以用来放置补充信息、评论或注释。

下面是网页级别的`<aside>`的例子。

```html
<body>
  <main>主体内容</main>
  <aside>侧边栏</aside>
</body>
```

下面是文章评注的例子。

```html
<p>第一段</p>

<aside>
  <p>本段是文章的重点。</p>
</aside>
```

###4.4 `<section>`

`<section>`标签表示一个含有主题的独立部分，通常用在文档里面表示一个章节，比如`<article>`可以包含多个`<section>`。`<section>`总是多个一起使用，一个页面不能只有一个`<section>`。

```html
<article>
  <h1>文章标题</h1>
  <section>
    <h2>第一章</h2>
    <p>...</p>
  </section>
  <section>
    <h2>第二章</h2>
    <p>...</p>
  </section>
</article>
```

上面代码中，`<article>`包含了两个`<section>`，代表两章。

`<section>`很适合幻灯片展示的页面，每个`<section>`代表一个幻灯片。

一般来说，`<section>`都应该有标题，即包含`<h1>`~`<h6>`标签。多个`<section>`可以放置在同一个`<article>`里面，一个`<section>`里面也可能包含多个`<article>`，这取决于`<section>`和`<article>`在当前页面的含义。

###4.5 `<nav>`

`<nav>`标签用于放置页面或文档的导航信息。

```html
<nav>
  <ol>
    <li><a href="item-a">商品 A</a></li>
    <li><a href="item-b">商品 B</a></li>
    <li>商品 C</li>
  </ol>
</nav>
```

一般来说，`<nav>`往往放置在`<header>`里面，不适合放入`<footer>`。另外，一个页面可以有多个`<nav>`，比如一个用于站点导航，另一个用于文章导航。

`<nav>`里面通常是列表，但也可以放置其他标签。

###4.6`<h1>` ~ `<h6>`

HTML 提供了6个标签，用来表示文章的标题。按照标题的等级，一共分成六级。

- `<h1>`：一级标题
- `<h2>`：二级标题
- `<h3>`：三级标题
- `<h4>`：四级标题
- `<h5>`：五级标题
- `<h6>`：六级标题

`<h1>`是最高级别的标题，`<h6>`是最低级别的标题。下一级标题都是上一级标题的子标题，比如，一个`<h1>`后面可以有多个`<h2>`，每个`<h2>`后面又可以有多个`<h3>`。

```html
<body>
  <h1>JavaScript 语言介绍</h1>
    <h2>概述</h2>
    <h2>基本概念</h2>
      <h3>网页</h3>
      <h3>链接</h3>
    <h2>主要用法</h2>
</body>
```

上面代码，通过章节标题，清晰地表明了文章的主体结构。具体的内容，就可以写在章节标题的下面。

标题不应该越级，比如`h1`下面直接写`h3`。虽然这样不会报错，但会导致文章失去清晰的章节结构。

默认情况下，浏览器会粗体显示标题。`h1`的字号比`h2`大，`h2`比`h3`大，以此类推。

### 4.7 `<hgroup>`

如果主标题包含多级标题（比如带有副标题），那么可以使用`<hgroup>`标签，将多级标题放在其中。

```html
<hgroup>
  <h1>Heading 1</h1>
  <h2>Subheading 1</h2>
  <h2>Subheading 2</h2>
</hgroup>
```

注意，`<hgroup>`只能包含`<h1>`~`<h6>`，不能包含其他标签。

## 5.文本标签

历史上，网页的主要功能是文本展示。所以，HTML 提供了大量的文本处理标签。

### 5.1 `<div>`

<div>是一个通用标签，表示一个区块（division）。它没有语义，如果网页需要一个块级元素容器，又没有其他合适的标签，就可以使用这个标签。

它的最常见用途就是提供 CSS 的钩子，用来指定各种样式。

所以在早期，下面层层包裹的`<div>`就很常见。

```html
<div class="main">
  <div class="article">
    <div class="title">
      <h1>文章标题</h1>
    </div>
  </div>
</div>
```

上面代码读起来很费力，因为不带有语义。后来，HTML 5 就提出了语义标签，改进了上面的代码。

```html
<main>
  <article>
    <header>
      <h1>文章标题</h1>
    </header>
  </article>
</main>
```

### 5.2 `<p>`

<p>标签是一个块级元素，代表文章的一个段落（paragraph）。不仅是文本，任何想以段落显示的内容，比如图片和表单项，都可以放进<p>元素。

```html
<p>hello world</p>
```

### 5.3 `<span>`

`<span>`是一个通用目的的行内标签（即不会产生换行），不带有任何语义。它通常用作 CSS 样式的钩子，如果需要对某些行内内容指定样式，就可以把它们放置在`<span>`。

```html
<p>这是一句<span>重要</span>的句子。</p>
```

###5.4 `<br>`, `<wbr>`

`<br>`让网页产生一个换行效果。该标签是单独使用的，没有闭合标签。

```html
hello<br>world
```

浏览器渲染上面代码时，会分成两行，`hello`和`world`各占一行。

注意，块级元素的间隔，不要使用`<br>`来产生，而要使用 CSS 指定。

```html
<p>第一段</p>
<br>
<br>
<p>第二段</p>
```

上面的代码希望段落之间有两个换行，这时不应该使用`<br>`，而应该使用 CSS。

`<wbr>`标签跟`<br>`很相似，表示一个可选的断行。如果一行的宽度足够，则不断行；如果宽度不够，需要断行，就在`<wbr>`的位置的断行。

```html
<p>
Fernstraßen<wbr>bau<wbr>privat<wbr>finanzierungs<wbr>gesetz
</p>
```

上面代码是一个很长的德语单词，为了防止不正确断行，事先用`<wbr>`告诉浏览器，可以选择在哪里断行。

### 5.5 `<hr>`

`<hr>`用来在一篇文章中分隔两个不同的主题，浏览器会将其渲染为一根水平线。该标签是单独使用的，没有闭合标签。

```html
<p>第一个主题</p>
<hr>
<p>第二个主题</p>
```

该标签是历史遗留下来的，建议尽量==避免使用==。主题之间的分隔可以使用`<section>`，如果想要水平线的效果，可以使用 CSS。

###5.6 `<pre>`

<pre>是一个块级元素，表示保留原来的格式（preformatted），即浏览器会保留该标签内部原始的换行和空格。浏览器默认以等宽字体显示标签内容。

```html
<pre>hello

   world</pre>
```

上面代码中，换行和连续空格都会由于`<pre>`标签，而被保留下来，浏览器按照原样输出。

注意，HTML 标签在`<pre>`里面还是起作用的。`<pre>`只保留空格和换行，不会保留 HTML 标签。

```html
<pre><strong>hello world</strong></pre>
```

上面代码中，`<pre>`标签的内容会加粗显示。

### 5.7 `<strong>`，`<b>`

`<strong>`是一个行内元素，表示它包含的内容具有很强的重要性，需要引起注意。浏览器会以粗体显示内容。

```html
<p>开会时间是<strong>下午两点</strong>。</p>
```

`<b>`与`<strong>`很相似，也表示它包含的内容需要引起注意，浏览器会加粗显示。它是 Boldface 的缩写。

```html
<p>开会时间是<b>下午两点</b>。</p>
```

它与`<strong>`的区别在于，由于历史原因，它没有语义，是一个纯样式的标签，违反了语义与样式分离的原则，因此不建议使用，应该优先使用`<strong>`标签。

### 5.8 `<em>`，`<i>`

`<em>`是一个行内标签，表示强调（emphasize），浏览器会以斜体显示它包含的内容。

```html
<p>我们<em>已经</em>讨论过这件事情了。</p>
```

虽然浏览器通常会以斜体显示`<em>`，但无法保证一定如此，所以最好还是用 CSS 指定一下这个标签的样式。

`<i>`标签与`<em>`相似，也表示与其他地方有所区别，浏览器会以斜体显示。它是 Italic 的缩写。

```html
<p>我心想，这件事是<i>真的</i>吗？</p>
```

`<i>`标签的语义不强，更接近是一个纯样式的标签，建议优先使用`<em>`标签代替它。

### 5.9 `<sub>`,`<sup>`,`<var>`

`<sub>`标签将内容变为下标，`<sup>`标签将内容变为上标。它们都是行内元素，主要用于数学公式、分子式等。

```html
<p>水分子是 H<sub>2</sub>O。</p>
```

`<var>`标签表示代码或数学公式的变量。

```html
<p>勾股定理是
  <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup>
。</p>
```

### 5.10 `<u>`,`<s>`

`<u>`标签是一个行内元素，表示对内容提供某种注释，提醒用户这里可能有问题，基本上只用来表示拼写错误。浏览器默认以下划线渲染内容。

```html
<p>
一个容易写错的成语是把<em>安分守己</em>写成<u>安份守己</u>。
</p>
```

上面代码中，`<u>`提示用户这是一个拼写错误，“安份守己”的下方会有一个下划线。

注意，`<u>`会产生下划线，由于链接也默认带有下划线，所以必须非常小心使用`<u>`标签，避免用户误以为可以点击。万一确有必要使用，最好使用 CSS 改变`<u>`的默认样式。

`<s>`标签是一个行内元素，为内容加上删除线。

```html
<p>今天特价商品：<s>三文鱼</s>（售完）</p>
```

上面代码中，“三文鱼”会有一根删除线。

### 5.11 `<blockquote>`,`<cite>`,`<q>`

`<blockquote>`是一个块级标签，表示引用他人的话。浏览器会在样式上，与正常文本区别显示。

```
<blockquote cite="https://quote.example.com">
  <p>天才就是 1% 的天赋和99%的汗水。</p>
</blockquote>
```

`<blockquote>`标签有一个`cite`属性，它的值是一个网址，表示引言来源，不会显示在网页上。

`<cite>`标签表示引言出处或者作者，浏览器默认使用斜体显示这部分内容。

```html
<blockquote cite="https://quote.example.com">
  <p>天才就是 1% 的天赋和99%的汗水。</p>
</blockquote>
<cite>-- 爱迪生</cite>
```

`<cite>`不一定跟`<blockquote>`一起使用。如果文章中提到资料来源，也可以单独使用。

```html
<p>更多资料请看<cite>维基百科</cite>。</p>
```

`<q>`是一个行内标签，也表示引用。它与`<blockquote>`的区别，就是它不会产生换行。

```html
<p>
  莎士比亚的《哈姆雷特》有一句著名的台词：
  <q cite="https://quote.example.com">活着还是死亡，这是一个问题。</q>
</p>
```

上面例子中，引言部分跟前面的说明部分是在同一行里面。

另外，跟`<blockquote>`一样，`<q>`也有`cite`属性，表示引言的来源网址。

注意，浏览器默认会斜体显示`<q>`的内容，并且会自动添加半角的双引号。所以，引用中文内容时要小心。

### 5.12 `<code>`

<code>标签是一个行内元素，表示标签内容是计算机代码，浏览器默认会以等宽字体显示。

```html
<code>alert()</code>的作用是让网页弹出一个提示框。
```

如果要表示多行代码，`<code>`标签必须放在`<pre>`内部。`<code>`本身仅表示一行代码。

```html
<pre>
<code>
  let a = 1;
  console.log(a);
</code>
</pre>
```

### 5.13 `<kbd>`,`<samp>`

`<kbd>`标签是一个行内元素，原意是用户从键盘输入的内容，现在扩展到各种输入，包括语音输入。浏览器默认以等宽字体显示标签内容。

```html
<p>Windows 可以按下 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Del</kbd> 重启。</p>
```

`<kbd>`可以嵌套，方便指定样式。

```html
<p>Windows 可以按下
<kbd> <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Del</kbd> </kbd>
重启。</p>
```

`<samp>`标签是一个行内元素，表示计算机程序输出内容的一个例子。浏览器默认以等宽字体显示。

```html
<p>如果使用没有定义的变量，浏览器会报错：
<samp>Uncaught ReferenceError: foo is not defined</samp>。
</p>
```

### 5.14 `<mark>`

`<mark>`是一个行内标签，表示突出显示的内容。Chrome 浏览器默认会以亮黄色背景，显示该标签的内容。

```html
<p>我们讨论以后决定，<mark>运行会在下周三举办</mark>。</p>
```

`<mark>`很适合在引用的内容（`<q>`或`<blockquote>`）中，标记出需要关注的句子。

```html
<blockquote>
床前明月光，疑是地上霜。<mark>举头望明月，低头思故乡。</mark>
</blockquote>
```

除了标记感兴趣的文本，`<mark>`还可以用于在搜索结果中，标记出匹配的关键词。

注意，不要只为了高亮的效果，而使用这个标签，因为不能保证浏览器的处理方式。如果要保证高亮，还是要使用 CSS 样式。

### 5.15 `<small>`

`<small>`是一个行内标签，浏览器会将它包含的内容，以小一号的字号显示，不需要使用 CSS 样式。它通常用于文章附带的版权信息或法律信息。

```html
<p>文章正文</p>
<p><small>以上内容使用创意共享许可证。</small></p>
```

### 5.16 `<time>`,`<data>`

`<time>`是一个行内标签，为跟时间相关的内容提供机器可读的格式。

```html
<p>运动会预定<time datetime="2015-06-10">下周三</time>举行。</p>
```

上面代码中，`<time>`表示下周三的具体日期。这方便搜索引擎抓取，或者下一步的其他处理。

`<time>`的`datetime`属性，用来指定机器可读的日期，可以有多种格式。

- 有效年份：`2011`
- 有效月份：`2011-11`
- 有效日期：`2011-11-18`
- 无年份的日期：`11-18`
- 年度的第几周：`2011-W47`
- 有效时间：`14:54`、`14:54:39`、`14:54:39.929`
- 日期和时间：`2011-11-18T14:54:39.929`

```
<p>音乐会在<time datetime="20:00">晚上八点</time>开始。</p>
```

`<data>`标签与`<time>`类似，也是提供机器可读的内容，但是用于非时间的场合。

```html
<p>本次马拉松比赛第一名是<data value="39">张三</data></p>。
```

上面代码中，选手的机读数据就放在`<data>`标签的`value`属性。

### 5.17 `<address>`

`<address>`标签是一个块级元素，表示某人或某个组织的联系方式。

```
<p>作者的联系方式：</p>

<address>
  <p><a href="mailto:foo@example.com">foo@example.com</a></p>
  <p><a href="tel:+555-34762301">+555-34762301</a></p>
</address>
```

该标签有几个注意点。

（1）如果是文章里提到的地址（比如提到搬家前的地址），而不是联系信息，不要使用`<address>`标签。

（2）`<address>`的内容不得有非联系信息，比如发布日期。

（3）`<address>`不能嵌套，并且内部不能有标题标签（`<h1>`~`<h6>`），也不能有`<article>`、`<aside>`、`<section>`、`<nav>`、`<header>`、`<footer>`等标签。

（4）通常，`<address>`会放在`<footer>`里面，下面是一个例子。

```html
<footer>
  <address>
    文章的相关问题请联系<a href="mailto:zhangsan@example.com">张三
    McClure</a>。
  </address>
</footer>
```

### 5.18 `<abbr>`

`<abbr>`标签是一个行内元素，表示标签内容是一个缩写。它的`title`属性给出缩写的完整形式，或者缩写的描述。鼠标悬停在该元素上方时，`title`属性值作为提示，会完整显示出来。

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

注意，某些浏览器可能对该标签提供圆点下划线。

### 5.19 `<ins>`,`<del>`

`<ins>`标签是一个行内元素，表示原始文档添加（insert）的内容。`<del>`与之类似，表示删除（delete）的内容。它们通常用于展示文档的删改。

```html
<del><p>会议定于5月8日举行。</p></del>
<ins><p>会议定于5月9日举行。</p></ins>
```

浏览器默认为`<del>`标签的内容加上删除线，为`<ins>`标签的内容加上下划线。

这两个标签都有以下属性。

- `cite`：该属性的值是一个 URL，表示该网址可以解释本次删改。
- `datetime`：表示删改发生的时间。

```html
<ins cite="./why.html" datetime="2018-05">
  <p>项目比原定时间提前两周结束。</p>
</ins>
```

### 5.20 `<dfn>`

`<dfn>`是一个行内元素，表示标签内容是一个术语（definition），本段或本句包含它的定义。

```html
<p>
通过 TCP/IP 协议连接的全球性计算机网络，叫做 <dfn>Internet</dfn>。
</p>
```

为了脚本操作的方便，可以把术语的定义写入`<dfn>`标签的`title`属性。

```html
<p>
通过 TCP/IP 协议连接的全球性计算机网络，叫做
<dfn title="全球性计算机网络">Internet</dfn>。
</p>
```

上面代码中，`title`属性的一个作用是，鼠标悬浮的时候，术语的解释会以提示的形式显示出来。

某些时候，术语本身是一个缩写，这时`<dfn>`和`<abbr>`可以结合使用。

```html
<p>
<dfn><abbr title="acquired immune deficiency syndrome">AIDS</abbr></dfn>
的全称是获得性免疫缺陷综合征。
</p>
```

### 5.21 `<ruby>`

`<ruby>`标签表示文字的语音注释，主要用于东亚文字，比如汉语拼音和日语的片假名。它默认将语音注释，以小字体显示在文字的上方。

```html
<ruby>
汉<rp>(</rp><rt>han</rt><rp>)</rp>
字<rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```

上面代码的渲染结果是，`汉字`上方有小字体的拼音`han zi`。

`<ruby>`标签是一个行内元素，也是一个容器标签。如果要使用语音注释，就必须把文字和注释都放在这个标签里面。

`<ruby>`的内部还有许多配套的标签。

**（1）`<rp>`**

`<rp>`标签的用处，是为不支持语音注释的浏览器，提供一个兼容方案。对于那些支持语音注释的浏览器，该标签的内容不显示。

`<rp>`标签一般用于放置圆括号，如果遇到不支持的浏览器，就会将语音注释显示在括号里面。

```html
<ruby>
汉<rp>(</rp><rt>han</rt><rp>)</rp>
字<rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```

上面代码在不支持语音注释的浏览器中，渲染结果为`汉(han)字(zi)`。遇到支持语音注释的浏览器，就不会显示圆括号。

**（2）`<rt>`**

`<rt>`标签用于放置语音注释。

**（3）`<rb>`**

`<rb>`标签用于划分文字单位，与语音注释一一对应。

```html
<ruby>
  <rb>汉</rb><rb>字</rb>
  <rp>(</rp>
  <rt>han</rt>
  <rt>zi</rt>
  <rp>)</rp>
</ruby>
```

上面例子中，`汉字`这两个字是写在一起的，`<rb>`标签用于每个字划分出来，跟`<rt>`标签一一对应。

**（4）`<rbc>`，`<rtc>`**

`<rbc>`标签表示一组文字，通常包含多个`<rb>`元素。`<rtc>`标签表示一组语音注释，跟`<rbc>`对应。

```html
<ruby style="ruby-position: under;">
  <rbc>
    <rb>汉</rb><rp>(</rp><rt>han</rt><rp>)</rp>
    <rb>字</rb><rp>(</rp><rt>zi</rt><rp>)</rp>
  </rbc>
  <rtc style="ruby-position: over;">
    <rp>(</rp><rt>Chinese</rt><rp>)</rp>
  </rtc>
</ruby>
```

上面例子中，`汉字`这两个字有两组语音注释，分别是汉语拼音与英语。一组语音注释放在`<rbc>`标签中，另一组语音注释放在`<rtc>`，用来对应`<rbc>`。同时，分别使用`style`属性，指定汉语拼音显示在文字下方，英语显示在文字上方。

### 5.22 `<bdo>`,`<bdi>`

大部分文字的阅读方向是从左到右，但是有些文字的方向是从右到左，比如阿拉伯语、希伯来语等。`<bdo>`标签是一个行内元素，表示文字方向与网页主体内容的方向不一致。

```html
<p>床前明月光，<bdo dir="rtl">霜上地是疑</bdo>。</p>
```

上面代码中，`<bdo>`标签里面的文字，会以相反的方向渲染，结果就是“床前明月光，疑是地上霜”。

`<bdo>`的`dir`属性，指定具体的文字方向。它有两个值，`ltr`表示从左到右，`rtl`表示从右到左。

`<bdi>`标签用于不确定文字方向的情况。比如，网页有一个部分是用户输入的内容，但是不知道输入内容的文字方向。这种情况就可以使用`<bdi>`标签，告诉浏览器，不确定文字的方向，由浏览器自己决定。

```html
<p><bdi>床前明月光，疑是地上霜。</bdi></p>
```

##6.列表标签

列表是一系列排列好的项目，主要分成两类：有序列表和无序列表。

有序列表是每个列表项前面有编号，呈现出顺序，就像下面这样。

```html
1. 列表项 A
2. 列表项 B
3. 列表项 C
```

无序列表则是列表项前面没有编号，只有一个列表符号，默认是一个圆点。

```html
· 列表项 A
· 列表项 B
· 列表项 C
```

###6.1 `<ol>`

`<ol>`标签是一个有序列表容器（ordered list），会在内部的列表项前面产生数字编号。列表项的顺序有意义时，比如排名，就会采用这个标签。

```html
<ol>
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ol>
```

上面代码会在列表项 A、B、C 前面，分别产生1、2、3的编号。

`<ol>`标签内部可以嵌套`<ol>`标签或`<ul>`标签，形成多级列表。

```html
<ol>
  <li>列表项 A</li>
  <li>列表项 B
    <ol>
      <li>列表项 B1</li>
      <li>列表项 B2</li>
      <li>列表项 B3</li>
    </ol>
  </li>
  <li>列表项 C</li>
</ol>
```

上面代码中，一个有序列表内部嵌套了另一个有序列表，渲染结果如下。

```html
1. 列表项 A
2. 列表项 B
  1. 列表项 B1
  2. 列表项 B2
  3. 列表项 B3
3. 列表项 C
```

该标签有以下属性。

**（1）reversed**

`reversed`属性产生倒序的数字列表。

```html
<ol reversed>
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ol>
```

上面代码中，列表项 A、B、C 前面，产生的编号是3、2、1。

**（2）start**

`start`属性的值是一个整数，表示数字列表的起始编号。

```html
<ol start="5">
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ol>
```

上面代码中，列表项 A、B、C 前面，产生的编号是5、6、7。

**（3）type**

`type`属性指定数字编号的样式。目前，浏览器支持以下样式。

- `a`：小写字母
- `A`：大写字母
- `i`：小写罗马数字
- `I`：大写罗马数字
- `1`：整数（默认值）

```html
<ol type="a">
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ol>
```

上面代码中，列表项 A、B、C 前面的编号，分别是英文小写字母a、b、c。

注意，即使编号是字母，`start`属性也依然使用整数。

```html
<ol type="a" start="3">
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ol>
```

上面代码中，`type`属性指定编号采用小写英文字母，`start`属性等于`3`，表示从`c`开始编号。

### 6.2 `<ul>`

`<ul>`标签是一个无序列表容器（unordered list），会在内部的列表项前面产生实心小圆点，作为列表符号。列表项的顺序无意义时，采用这个标签。

```html
<ul>
  <li>列表项 A</li>
  <li>列表项 B</li>
  <li>列表项 C</li>
</ul>
```

上面代码的渲染结果是，列表项 A、B、C 前面，分别产生一个实心小圆点，作为列表符号。

`<ul>`标签内部可以嵌套`<ul>`或`<ol>`，形成多级列表。

### 6.3 `<li>`

`<li>`表示列表项，用在`<ol>`或`<ul>`容器之中。

有序列表`<ol>`之中，`<li>`有一个`value`属性，定义当前列表项的编号，后面列表项会从这个值开始编号。

```html
<ol>
  <li>列表项 A</li>
  <li value="4">列表项 B</li>
  <li>列表项 C</li>
</ol>
```

上面代码中，`value`属性指定第二个列表项的编号是`4`，因此三个列表项的编号，分别为1、4、5。

### 6.4 `<dl>`,`<dt>`,`<dd>`

`<dl>`标签是一个块级元素，表示一组术语的列表（description list）。术语名（description term）由`<dt>`标签定义，术语解释（description detail）由`<dd>`标签定义。`<dl>`常用来定义词汇表。

```html
<dl>
  <dt>CPU</dt>
  <dd>中央处理器</dd>

  <dt>Memory</dt>
  <dd>内存</dd>

  <dt>Hard Disk</dt>
  <dd>硬盘</dd>
</dl>
```

`<dt>`和`<dd>`都是块级元素，`<dd>`默认会在`<dt>`下方缩进显示。上面代码的默认渲染结果如下。

```html
CPU
  中央处理器

Memory
  内存

Hard Disk
  硬盘
```

多个术语（`<dt>`）对应一个解释（`<dd>`），或者多个解释（`<dd>`）对应一个术语（`<dt>`），都是合法的。

```html
<dl>
  <dt>A</dt>
  <dt>B</dt>
  <dd>C</dd>

  <dt>D</dt>
  <dd>E</dd>
  <dd>F</dd>
</dl>
```

上面代码中，`A`和`B`有共同的解释`C`，而`D`有两个解释`E`和`F`。

## 7.图像标签

图片是互联网的重要组成部分，让网页变得丰富多彩。

### 7.1 `<img>`

<img>标签用于插入图片。它是单独使用的，没有闭合标签。

```html
<img src="foo.jpg">
```

上面代码在网页插入一张图片`foo.jpg`。`src`属性指定图片的网址，上例是相对 URL，表示图片与网页在同一个目录。

<img>默认是一个行内元素，与前后的文字处在同一行。

```html
<p>Hello<img src="foo.jpg">World</p>
```

上面代码的渲染结果是，文字和图片在同一行显示。

图像默认以原始大小显示。如果图片很大，又与文字处在同一行，那么图片将把当前行的行高撑高，并且图片的底边与文字的底边在同一条水平线上。

<img>可以放在<a>标签内部，使得图片变成一个可以点击的链接。

```html
<a href="example.html">
  <img src="foo.jpg">
</a>
```

上面代码中，图片可以像链接那样点击，点击后会产生跳转。

**（1）alt 属性**

`alt`属性用来设定图片的文字说明。图片不显示时（比如下载失败，或用户关闭图片加载），图片的位置上会显示该文本。

```html
<img src="foo.jpg" alt="示例图片">
```

上面代码中，`alt`是图片的说明。图片下载失败时，浏览器会在图片位置，显示文字“示例图片”。

**（2）width 属性，height 属性**

图片默认以原始大小插入网页，`width`属性和`height`属性可以指定图片显示时的宽度和高度，单位是像素或百分比。

```html
<img src="foo.jpg" width="400" height="300">
```

上面代码中，`width`属性指定图片显示的宽度为400像素，`height`属性指定显示高度为300像素。

注意，一旦设置了这两个属性，浏览器会在网页中预先留出这个大小的空间，不管图片有没有加载成功。不过，由于图片的显示大小可以用 CSS 设置，所以不建议使用这两个属性。

一种特殊情况是，`width`属性和`height`属性只设置了一个，另一个没有设置。这时，浏览器会根据图片的原始大小，自动设置对应比例的图片宽度或高度。举例来说，图片大小是 800像素 x 800像素，`width`属性设置成200，那么浏览器会自动将`height`设成200。

**（3）srcset，sizes**

详见下文的《响应式图像》部分。

**（4）referrerpolicy**

<img>导致的图片加载的 HTTP 请求，默认会带有Referer的头信息。referrerpolicy属性对这个行为进行设置。

**（5）crossorigin**

有时，图片和网页属于不同的网站，网页加载图片就会导致跨域请求，对方服务器可能要求跨域认证。`crossorigin`属性用来告诉浏览器，是否采用跨域的形式下载图片，默认是不采用。

简单说，只要打开了这个属性，HTTP 请求的头信息里面，就会加入`origin`字段，给出请求发出的域名，不打开这个属性就不加。

一旦打开该属性，它可以设为两个值。

- `anonymous`：跨域请求不带有用户凭证（通常是 Cookie）。
- `use-credentials`：跨域请求带有用户凭证。

下面是一个例子。

```html
<img src="foo.jpg" crossorigin="anonymous">
```

`crossorigin`属性如果省略值的部分，则等同于`anonymous`。

```html
<img src="foo.jpg" crossorigin>
```

**（6）loading**

浏览器的默认行为是，只要解析到`<img>`标签，就开始加载图片。对于很长的网页，这样做很浪费带宽，因为用户不一定会往下滚动，一直看到网页结束。用户很可能是点开网页，看了一会就关掉了，那些不在视口的图片加载的流量，就都浪费了。

`loading`属性改变了这个行为，可以指定图片的懒加载，即图片默认不加载，只有即将滚动进入视口，变成用户可见时才会加载，这样就节省了带宽。

`loading`属性可以取以下三个值。

> - `auto`：浏览器默认行为，等同于不使用`loading`属性。
> - `lazy`：启用懒加载。
> - `eager`：立即加载资源，无论它在页面上的哪个位置。

```html
<img src="image.png" loading="lazy" alt="…" width="200" height="200">
```

由于行内图片的懒加载，可能会导致页面布局重排，所以使用这个属性的时候，最好指定图片的高和宽。

### 7.2 `<figure>`,`<figcaption>`

<figure>标签可以理解为一个图像区块，将图像和相关信息封装在一起。<figcaption>是它的可选子元素，表示图像的文本描述，通常用于放置标题，可以出现多个。

```html
<figure>
  <img src="https://example.com/foo.jpg">
  <figcaption>示例图片</figcaption>
</figure>
```

除了图像，`<figure>`还可以封装引言、代码、诗歌等等。它等于是一个将主体内容与附加信息，封装在一起的语义容器。

```html
<figure>
  <figcaption>JavaScript 代码示例</figcaption>
  <p><code>const foo = 'hello';</code></p>
</figure>
```

### 7.3 响应式图像

网页在不同尺寸的设备上，都能产生良好的显示效果，叫做[“响应式设计”](http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html)（responsive web design）。响应式设计的网页图像，就是“响应式图像”（responsive image）。

响应式图像的解决方案有很多，JavaScript 和 CSS 都可以实现。这里只介绍语义性最好的 HTML 方法，浏览器原生支持。

#### 7.3.1 问题的由来

<img>标签用于插入网页图像，所有情况默认插入的都是同一张图像。

```html
<img src="foo.jpg">
```

上面代码在桌面端和手机上，插入的都是图像文件`foo.jpg`。

这种处理方法固然简单，但是有三大弊端。

**（1）体积**

一般来说，桌面端显示的是大尺寸的图像，文件体积较大。手机的屏幕较小，只需要小尺寸的图像，可以节省带宽，加速网页渲染。

**（2）像素密度**

桌面显示器一般是单倍像素密度，而手机的显示屏往往是多倍像素密度，即显示时多个像素合成为一个像素，这种屏幕称为 Retina 屏幕。图像文件很可能在桌面端很清晰，放到手机上会有点模糊，因为图像没有那么高的像素密度，浏览器自动把图像的每个像素复制到周围像素，满足像素密度的要求，导致图像的锐利度有所下降。

**（3）视觉风格**

桌面显示器的面积较大，图像可以容纳更多细节。手机的屏幕较小，许多细节是看不清的，需要突出重点。

![img](https://www.wangbase.com/blogimg/asset/201906/bg2019061002.jpg)

![img](https://www.wangbase.com/blogimg/asset/201906/bg2019061003.jpg)

#### 7.3.2 `<srcset>`属性

为了解决上面这些问题，HTML 语言提供了一套完整的解决方案。首先，`<img>`标签引入了`srcset`属性。

`srcset`属性用来指定多张图像，适应不同像素密度的屏幕。它的值是一个逗号分隔的字符串，每个部分都是一张图像的 URL，后面接一个空格，然后是像素密度的描述符。请看下面的例子。

```html
<img srcset="foo-320w.jpg,
             foo-480w.jpg 1.5x,
             foo-640w.jpg 2x"
     src="foo-640w.jpg">
```

上面代码中，`srcset`属性给出了三个图像 URL，适应三种不同的像素密度。

图像 URL 后面的像素密度描述符，格式是像素密度倍数 + 字母`x`。`1x`表示单倍像素密度，可以省略。浏览器根据当前设备的像素密度，选择需要加载的图像。

如果`srcset`属性都不满足条件，那么就加载`src`属性指定的默认图像。

#### 7.3.3 `<sizes>`属性

像素密度的适配，只适合显示区域一样大小的图像。如果希望不同尺寸的屏幕，显示不同大小的图像，`srcset`属性就不够用了，必须搭配`sizes`属性。

第一步，`srcset`属性列出所有可用的图像。

```html
<img srcset="foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w"
     src="foo-1280.jpg">
```

上面代码中，`srcset`属性列出四张可用的图像，每张图像的 URL 后面是一个空格，再加上宽度描述符。

宽度描述符就是图像原始的宽度，加上字符`w`。上例的四种图片的原始宽度分别为160像素、320像素、640像素和1280像素。

第二步，`sizes`属性列出不同设备的图像显示宽度。

`sizes`属性的值是一个逗号分隔的字符串，除了最后一部分，前面每个部分都是一个放在括号里面的媒体查询表达式，后面是一个空格，再加上图像的显示宽度。

```html
<img srcset="foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w"
     sizes="(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            254px"
     src="foo-1280.jpg">
```

上面代码中，`sizes`属性给出了三种屏幕条件，以及对应的图像显示宽度。宽度不超过440像素的设备，图像显示宽度为100%；宽度441像素到900像素的设备，图像显示宽度为33%；宽度900像素以上的设备，图像显示宽度为`254px`。

第三步，浏览器根据当前设备的宽度，从`sizes`属性获得图像的显示宽度，然后从`srcset`属性找出最接近该宽度的图像，进行加载。

假定当前设备的屏幕宽度是`480px`，浏览器从`sizes`属性查询得到，图片的显示宽度是`33vw`（即33%），等于`160px`。`srcset`属性里面，正好有宽度等于`160px`的图片，于是加载`foo-160.jpg`。

如果省略`sizes`属性，那么浏览器将根据实际的图像显示宽度，从`srcset`属性选择最接近的图片。一旦使用`sizes`属性，就必须与`srcset`属性搭配使用，单独使用`sizes`属性是无效的。

###7.4 `<picture>`

#### 7.4.1 响应式用法

<img>标签的srcset属性和sizes属性分别解决了像素密度和屏幕大小的适配，但如果要同时适配不同像素密度、不同大小的屏幕，就要用到<picture>标签。

`<picture>`是一个容器标签，内部使用`<source>`和`<img>`，指定不同情况下加载的图像。

```html
<picture>
  <source media="(max-width: 500px)" srcset="cat-vertical.jpg">
  <source media="(min-width: 501px)" srcset="cat-horizontal.jpg">
  <img src="cat.jpg" alt="cat">
</picture>
```

上面代码中，`<picture>`标签内部有两个`<source>`标签和一个`<img>`标签。

`<picture>`内部的`<source>`标签，主要使用`media`属性和`srcset`属性。`media`属性给出媒体查询表达式，`srcset`属性就是`<img>`标签的`srcset`属性，给出加载的图像文件。`sizes`属性其实这里也可以用，但由于有了`media`属性，就没有必要了。

浏览器按照`<source>`标签出现的顺序，依次判断当前设备是否满足`media`属性的媒体查询表达式，如果满足就加载`srcset`属性指定的图片文件，并且不再执行后面的`<source>`标签和`<img>`标签。

<img>标签是默认情况下加载的图像，用来满足上面所有<source>都不匹配的情况，或者不支持<picture>的老式浏览器。

上面例子中，设备宽度如果不超过`500px`，就加载竖屏的图像，否则加载横屏的图像。

下面给出一个例子，同时考虑屏幕尺寸和像素密度的适配。

```html
<picture>
  <source srcset="homepage-person@desktop.png,
                  homepage-person@desktop-2x.png 2x"
          media="(min-width: 990px)">
  <source srcset="homepage-person@tablet.png,
                  homepage-person@tablet-2x.png 2x"
          media="(min-width: 750px)">
  <img srcset="homepage-person@mobile.png,
               homepage-person@mobile-2x.png 2x"
       alt="Shopify Merchant, Corrine Anestopoulos">
</picture>
```

上面代码中，`<source>`标签的`media`属性给出屏幕尺寸的适配条件，每个条件都用`srcset`属性，再给出两种像素密度的图像 URL。

#### 7.4.2 图像格式的选择

除了响应式图像，`<picture>`标签还可以用来选择不同格式的图像。比如，如果当前浏览器支持 Webp 格式，就加载这种格式的图像，否则加载 PNG 图像。

```html
<picture>
  <source type="image/svg+xml" srcset="logo.xml">
  <source type="image/webp" srcset="logo.webp"> 
  <img src="logo.png" alt="ACME Corp">
</picture>
```

上面代码中，`<source>`标签的`type`属性给出图像的 MIME 类型，`srcset`是对应的图像 URL。

浏览器按照`<source>`标签出现的顺序，依次检查是否支持`type`属性指定的图像格式，如果支持就加载图像，并且不再检查后面的`<source>`标签了。上面例子中，图像加载优先顺序依次为 svg 格式、webp 格式和 png 格式。

## 8. `<a>`

### 8.1 简介

链接（hyperlink）是互联网的核心。它允许用户在页面上，从一个网址跳转到另一个网址，从而把所有资源联系在一起。

<a>标签就代表一个可以跳转的链接。它不仅可以跳转到其他页面，也可以跳转到文本、图像、文件等资源，甚至当前页面的某个位置。可以这样说，所有互联网上的资源，都可以通过<a>访问。

下面就是一个典型的链接。

```html
<a href="https://wikipedia.org/">维基百科</a>
```

上面代码就定义了一个超级链接。浏览器显示“维基百科”，文字下面默认会有下划线，表示这是一个链接。用户点击后，浏览器跳转到`href`属性指定的网址。

<a>标签内部不仅可以放置文字，也可以放置其他元素，比如段落、图像、多媒体等等。

```html
<a href="https://www.example.com/">
  <img src="https://www.example.com/foo.jpg">
</a>
```

上面代码中，`<a>`标签内部就是一个图像。用户点击图像，就会跳转到指定网址。

### 8.2 属性

`<a>`标签有如下属性

####8.2.1 href

`href`属性给出链接指向的网址。它的值应该是一个 URL 或者锚点。

上文已经给出了完整 URL 的例子，下面是锚点的例子。

```html
<a href="#demo">示例</a>
```

上面代码中，`href`属性的值是`#`加上锚点名称。点击后，浏览器会自动滚动，停在当前页面里面`demo`锚点所在的位置。

#### 8.2.2 hreflang

`hreflang`属性给出链接指向的网址所使用的语言，纯粹是提示性的，没有实际功能，主要供搜索引擎使用。

```html
<a
  href="https://www.example.com"
  hreflang="en"
>示例网址</a>
```

上面代码表明，`href`属性指向的网址的语言是英语。

如果某个资源有多种语言的不同版本，可以将`hreflang`设为`x-default`，表示哪一个链接是默认版本。

```html
<a href="https://example.com" hreflang="x-default">English</a>
<a href="https://example.com/de" hreflang="de">German</a>
```

上面示例中，`hreflang`设为`x-defalut`表示该链接为默认版本。

`hreflang`属性所用的语言代码，跟通用的`lang`属性一样，可以参考《属性》一章的`lang`属性的介绍。

####8.2.3 title

`<title>`属性给出链接的说明信息。鼠标悬停在链接上方时，浏览器会将这个属性的值，以提示块的形式显示出来。

```html
<a
  href="https://www.example.com/"
  title="hello"
>示例</a>。
```

上面代码中，用户鼠标停留在链接上面，会出现文字提示`hello`。

#### 8.2.4 target

`<target>`属性指定如何展示打开的链接。它可以是在指定的窗口打开，也可以在`<iframe>`里面打开

```
<p><a href="http://foo.com" target="test">foo</a></p>
<p><a href="http://bar.com" target="test">bar</a></p>
```

上面代码中，两个链接都在名叫`test`的窗口打开。首先点击链接`foo`，浏览器发现没有叫做`test`的窗口，就新建一个窗口，起名为`test`，在该窗口打开`foo.com`。然后，用户又点击链接`bar`，由于已经存在`test`窗口，浏览器就在该窗口打开`bar.com`，取代里面已经打开的`foo.com`。

`target`属性的值也可以是以下四个关键字之一。

- `_self`：当前窗口打开，这是默认值。
- `_blank`：新窗口打开。
- `_parent`：上层窗口打开，这通常用于从父窗口打开的子窗口，或者`<iframe>`里面的链接。如果当前窗口没有上层窗口，这个值等同于`_self`。
- `_top`：顶层窗口打开。如果当前窗口就是顶层窗口，这个值等同于`_self`。

```html
<a
  href="https://www.example.com"
  target="_blank"
>示例链接</a>
```

上面代码点击后，浏览器会新建一个窗口，在该窗口打开链接，并且新窗口没有名字。

注意，使用`target`属性的时候，最好跟`rel="noreferrer"`一起使用，这样可以避免安全风险。

#### 8.2.5 rel

`rel`属性说明链接与当前页面的关系。

```
<a href="help.html" rel="help">帮助</a>
```

上面代码的`rel`属性，说明链接是当前页面的帮助文档。

下面是一些常见的`rel`属性的值。

- `alternate`：当前文档的另一种形式，比如翻译。
- `author`：作者链接。
- `bookmark`：用作书签的永久地址。
- `external`：当前文档的外部参考文档。
- `help`：帮助链接。
- `license`：许可证链接。
- `next`：系列文档的下一篇。
- `nofollow`：告诉搜索引擎忽略该链接，主要用于用户提交的内容，防止有人企图通过添加链接，提高该链接的搜索排名。
- `noreferrer`：告诉浏览器打开链接时，不要将当前网址作为 HTTP 头信息的`Referer`字段发送出去，这样可以隐藏点击的来源。
- `noopener`：告诉浏览器打开链接时，不让链接窗口通过 JavaScript 的`window.opener`属性引用原始窗口，这样就提高了安全性。
- `prev`：系列文档的上一篇。
- `search`：文档的搜索链接。
- `tag`：文档的标签链接。

#### 8.2.6 referrerpolicy

`referrerpolicy`属性用于精确设定点击链接时，浏览器发送 HTTP 头信息的`Referer`字段的行为。

该属性可以取下面八个值：`no-referrer`、`no-referrer-when-downgrade`、`origin`、`origin-when-cross-origin`、`unsafe-url`、`same-origin`、`strict-origin`、`strict-origin-when-cross-origin`。

其中，`no-referrer`表示不发送`Referer`字段，`same-origin`表示同源时才发送`Referer`字段，`origin`表示只发送源信息（协议+域名+端口）。其他几项的解释，请查阅 HTTP 文档。

#### 8.2.7 ping

`ping`属性指定一个网址，用户点击的时候，会向该网址发出一个 POST 请求，通常用于跟踪用户的行为。

```html
<a href="http://localhost:3000/other" ping="http://localhost:3000/log">
  Go to Other Page
</a>
```

上面示例中，用户点击链接时，除了发生跳转，还会向`http://localhost:3000/log`发送一个 POST 请求。服务端收到这个请求以后，就会知道用户点击了这个链接。

这个请求的 HTTP 标头，包含了`ping-from`属性（点击行为发生的页面）和`ping-to`属性（`href`属性所指向的页面）。

```html
headers: {
  'ping-from': 'http://localhost:3000/',
  'ping-to': 'http://localhost:3000/other'
  'content-type': 'text/ping'
  // ...other headers
},
```

注意，`ping`属性只对链接有效，对其他的交互行为无效，比如按钮点击或表单提交。另外，Firefox 浏览器不支持该属性。并且，也无法让它发送任何的自定义数据。

#### 8.2.8 type

`type`属性给出链接 URL 的 MIME 类型，比如到底是网页，还是图像或文件。它也是纯粹提示性的属性，没有实际功能。

```html
<a
  href="smile.jpg"
  type="image/jpeg"
>示例图片</a>
```

上面代码中，`type`属性提示这是一张图片。

#### 8.2.9 download

`download`属性表明当前链接用于下载，而不是跳转到另一个 URL。

```html
<a href="demo.txt" download>下载</a>
```

上面代码点击后，会出现下载对话框。

注意，`download`属性只在链接与网址同源时，才会生效。也就是说，链接应该与网址属于同一个网站。

如果`download`属性设置了值，那么这个值就是下载的文件名。

```html
<a
  href="foo.exe"
  download="bar.exe"
>点击下载</a>
```

上面代码中，下载文件的原始文件名是`foo.exe`。点击后，下载对话框提示的文件名是`bar.exe`。

注意，如果链接点击后，服务器的 HTTP 回应的头信息设置了`Content-Disposition`字段，并且该字段的值与`download`属性不一致，那么该字段优先，下载时将显示其设置的文件名。

`download`属性还有一个用途，就是有些地址不是真实网址，而是数据网址，比如`data:`开头的网址。这时，`download`属性可以为虚拟网址指定下载的文件名。

```html
<a href="data:,Hello%2C%20World!">点击</a>
```

上面链接点击后，会打开一个虚拟网页，上面显示`Hello World!`。

```html
<a
  href="data:,Hello%2C%20World!"
  download="hello.txt"
>点击</a>
```

上面链接点击后，下载的`hello.txt`文件内容就是“Hello, World!”。

### 8.3 邮件链接

链接也可以指向一个邮件地址，使用`mailto`协议。用户点击后，浏览器会打开本机默认的邮件程序，让用户向指定的地址发送邮件。

```
<a href="mailto:contact@example.com">联系我们</a>
```

上面代码中，链接就指向邮件地址。点击后，浏览器会打开一个邮件地址，让你可以向`contact@example.com`发送邮件。

除了邮箱，邮件协议还允许指定其他几个邮件要素。

- `subject`：主题
- `cc`：抄送
- `bcc`：密送
- `body`：邮件内容

使用方法是将这些邮件要素，以查询字符串的方式，附加在邮箱地址后面。

```html
<a
  href="mailto:foo@bar.com?cc=test@test.com&subject=The%20subject&body=The%20body"
>发送邮件</a>
```

上面代码中，邮件链接里面不仅包含了邮箱地址，还包含了`cc`、`subject`、`body`等邮件要素。这些要素的值需要经过 URL 转义，比如空格转成`%20`。

不指定邮箱也是允许的，就像下面这样。这时用户自己在邮件程序里面，填写想要发送的邮箱，通常用于邮件分享网页。

```html
<a href="mailto:">告诉朋友</a>
```

### 8.4 电话链接

如果是手机浏览的页面，还可以使用`tel`协议，创建电话链接。用户点击该链接，会唤起电话，可以进行拨号。

```html
<a href="tel:13312345678">13312345678</a>
```

上面代码在手机中，点击链接会唤起拨号界面，可以直接拨打指定号码。

## 9. link

###9.1 简介

`<link>`标签主要用于将当前网页与相关的外部资源联系起来，通常放在`<head>`元素里面。最常见的用途就是加载 CSS 样式表。

```html
<link rel="stylesheet" type="text/css" href="theme.css">
```

上面代码为网页加载样式表`theme.css`。

除了默认样式表，网页还可以加载替代样式表，即默认不生效、需要用户手动切换的样式表。

```html
<link href="default.css" rel="stylesheet" title="Default Style">
<link href="fancy.css" rel="alternate stylesheet" title="Fancy">
<link href="basic.css" rel="alternate stylesheet" title="Basic">
```

上面代码中，`default.css`是默认样式表，默认就会生效。`fancy.css`和`basic.css`是替换样式表（`rel="alternate stylesheet"`），默认不生效。`title`属性在这里是必需的，用来在浏览器菜单里面列出这些样式表的名字，供用户选择，以替代默认样式表。

`<link>`还可以加载网站的 favicon 图标文件。

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon">
```

手机访问时，网站通常需要提供不同分辨率的图标文件。

```html
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png">
```

上面代码指定 iPhone 设备需要的114像素和72像素的图标。

`<link>`也用于提供文档的相关链接，比如下面是给出文档的 RSS Feed 地址。

```html
<link rel="alternate" type="application/atom+xml" href="/blog/news/atom
```

### 9.2 href属性

`href`属性表示`<link>`标签所链接的资源。

### 9.3 rel属性

`rel`属性表示外部资源与当前文档之间的关系，是`<link>`标签的必需属性，可以视为对`href`属性所链接资源的说明。

它可以但不限于取以下值。

- `alternate`：文档的另一种表现形式的链接，比如打印版。
- `author`：文档作者的链接。
- `dns-prefetch`：要求浏览器提前执行指定网址的 DNS 查询。
- `help`：帮助文档的链接。
- `icon`：加载文档的图标文件。
- `license`：许可证链接。
- `next`：系列文档下一篇的链接。
- `pingback`：接收当前文档 pingback 请求的网址。
- `preconnect`：要求浏览器提前与给定服务器，建立 HTTP 连接。
- `prefetch`：要求浏览器提前下载并缓存指定资源，供下一个页面使用。它的优先级较低，浏览器可以不下载。
- `preload`：要求浏览器提前下载并缓存指定资源，当前页面稍后就会用到。它的优先级较高，浏览器必须立即下载。
- `prerender`：要求浏览器提前渲染指定链接。这样的话，用户稍后打开该链接，就会立刻显示，感觉非常快。
- `prev`：表示当前文档是系列文档的一篇，这里给出上一篇文档的链接。
- `search`：提供当前网页的搜索链接。
- `stylesheet`：加载一张样式表。

下面是一些示例。

```html
<!-- 作者信息 -->
<link rel="author" href="humans.txt">

<!-- 版权信息 -->
<link rel="license" href="copyright.html">

<!-- 另一个语言的版本 -->
<link rel="alternate" href="https://es.example.com/" hreflang="es">

<!-- 联系方式 -->
<link rel="me" href="https://google.com/profiles/someone" type="text/html">
<link rel="me" href="mailto:name@example.com">
<link rel="me" href="sms:+15035550125">

<!-- 历史资料 -->
<link rel="archives" href="http://example.com/archives/">

<!-- 目录 -->
<link rel="index" href="http://example.com/article/">

<!-- 导航 -->
<link rel="first" href="http://example.com/article/">
<link rel="last" href="http://example.com/article/?page=42">
<link rel="prev" href="http://example.com/article/?page=1">
<link rel="next" href="http://example.com/article/?page=3">
```

### 9.4 hreflang属性

`hreflang`属性用来表示`href`属性链接资源的所用语言，通常指当前页面的其他语言版本。

```html
<link href="https://example.com/de" rel="alternate" hreflang="de" />
```

上面示例中，`hreflang`表示`href`属性所链接页面使用德语，即当前页面的德语版本。

如果一个页面有多个语言的版本，`hreflang`属性可以设为`x-default`，表示哪一个页面是默认版本。

```html
<link href="https://example.com" rel="alternate" hreflang="x-default" />
<link href="https://example.com/de" rel="alternate" hreflang="de" />
```

上面示例中，`hreflang`设为`x-default`表示该页面为默认版本。

####9.5 资源的预加载

某些情况下，你需要浏览器预加载某些资源，也就是先把资源缓存下来，等到使用的时候，就不用再从网上下载了，立即就能使用。预处理指令可以做到这一点。

预加载主要有下面五种类型。

### 9.5.1 `<link rel="preload">`

`<link rel="preload">`告诉浏览器尽快下载并缓存资源（如脚本或样式表），该指令优先级较高，浏览器肯定会执行。当加载页面几秒钟后需要该资源时，它会很有用。下载后，浏览器不会对资源执行任何操作，脚本未执行，样式表未应用。它只是缓存，当其他东西需要它时，它立即可用。

```html
<link rel="preload" href="image.png" as="image">
```

`rel="preload"`除了优先级较高，还有两个优点：一是允许指定预加载资源的类型，二是允许`onload`事件的回调函数。下面是`rel="preload"`配合`as`属性，告诉浏览器预处理资源的类型，以便正确处理。

```html
<link rel="preload" href="style.css" as="style">
<link rel="preload" href="main.js" as="script">
```

上面代码要求浏览器提前下载并缓存`style.css`和`main.js`。

`as`属性指定加载资源的类型，它的值一般有下面几种。

- "script"
- "style"
- "image"
- "media"
- "document"

如果不指定`as`属性，或者它的值是浏览器不认识的，那么浏览器会以较低的优先级下载这个资源。

有时还需要`type`属性，进一步明确  类型。

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4">
```

上面代码要求浏览器提前下载视频文件，并且说明这是 MP4 编码。

下面是预下载字体文件的例子。

```html
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

注意，所有预下载的资源，只是下载到浏览器的缓存，并没有执行。如果希望资源预下载后立刻执行，可以参考下面的写法。

```html
<link rel="preload" as="style" href="async_style.css" onload="this.rel='stylesheet'">
```

上面代码中，`onload`指定的回调函数会在脚本下载完成后执行，立即插入页面。

#### 9.5.2 `<link rel="prefetch">`

`<link rel="prefetch">`的使用场合是，如果后续的页面需要某个资源，并且希望预加载该资源，以便加速页面渲染。该指令不是强制性的，优先级较低，浏览器不一定会执行。这意味着，浏览器可以不下载该资源，比如连接速度很慢时。

```html
<link rel="prefetch" href="https://www.example.com/">
```

####9.5.3 `<link rel="preconnect">`

`<link rel="preconnect">`要求浏览器提前与某个域名建立 TCP 连接。当你知道，很快就会请求该域名时，这会很有帮助。

```html
<link rel="preconnect" href="https://www.example.com/">
```

####9.5.4 `<link rel="dns-prefetch">`

`<link rel="dns-prefetch">`要求浏览器提前执行某个域名的 DNS 解析。

```html
<link rel="dns-prefetch" href="//example.com/">
```

#### 9.5.5 `<link rel="prerender">`

`<link rel="prerender">`要求浏览器加载某个网页，并且提前渲染它。用户点击指向该网页的链接时，就会立即呈现该页面。如果确定用户下一步会访问该页面，这会很有帮助。

```html
<link rel="prerender" href="http://example.com/">
```

### 9.6 media属性

`media`属性给出外部资源生效的媒介条件。

```html
<link href="print.css" rel="stylesheet" media="print">
<link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">
```

上面代码中，打印时加载`print.css`，移动设备访问时（设备宽度小于600像素）加载`mobile.css`。

下面是使用`media`属性实现条件加载的例子。

```html
<link rel="preload" as="image" href="map.png" media="(max-width: 600px)">
<link rel="preload" as="script" href="map.js" media="(min-width: 601px)">
```

上面代码中，如果屏幕宽度在600像素以下，则只加载第一个资源，否则就加载第二个资源。

### 9.7 其他属性

`<link>`标签的其他属性如下。

- `crossorigin`：加载外部资源的跨域设置。
- `href`：外部资源的网址。
- `referrerpolicy`：加载时`Referer`头信息字段的处理方法。
- `as`：`rel="preload"`或`rel="prefetch"`时，设置外部资源的类型。
- `type`：外部资源的 MIME 类型，目前仅用于`rel="preload"`或`rel="prefetch"`的情况。
- `title`：加载样式表时，用来标识样式表的名称。
- `sizes`：用来声明图标文件的尺寸，比如加载苹果手机的图标文件。

## 10. script，noscript

`<script>`标签用于在网页插入脚本，`<noscript>`标签用于指定浏览器不支持脚本时的显示内容。

###10.1`<script>`

<script>用于加载脚本代码，目前主要是加载 JavaScript 代码。

```
<script>
console.log('hello world');
</script>
```

上面代码嵌入网页，会立即执行。

<script>也可以加载外部脚本，src属性给出外部脚本的地址。

```html
<script src="javascript.js"></script>
```

上面代码会加载`javascript.js`脚本文件，并执行。

`type`属性给出脚本的类型，默认是 JavaScript 代码，所以可省略。完整的写法其实是下面这样。

```html
<script type="text/javascript" src="javascript.js"></script>
```

`type`属性也可以设成`module`，表示这是一个 ES6 模块，不是传统脚本。

```html
<script type="module" src="main.js"></script>
```

对于那些不支持 ES6 模块的浏览器，可以设置`nomodule`属性。支持 ES6 模块的浏览器，会不加载指定的脚本。这个属性通常与`type="module"`配合使用，作为老式浏览器的回退方案。

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

<script>还有下面一些其他属性，大部分跟 JavaScript 语言有关，可以参考相关的 JavaScript 教程。

- `async`：该属性指定 JavaScript 代码为异步执行，不是造成阻塞效果，JavaScript 代码默认是同步执行。
- `defer`：该属性指定 JavaScript 代码不是立即执行，而是页面解析完成后执行。
- `crossorigin`：如果采用这个属性，就会采用跨域的方式加载外部脚本，即 HTTP 请求的头信息会加上`origin`字段。
- `integrity`：给出外部脚本的哈希值，防止脚本被篡改。只有哈希值相符的外部脚本，才会执行。
- `nonce`：一个密码随机数，由服务器在 HTTP 头信息里面给出，每次加载脚本都不一样。它相当于给出了内嵌脚本的白名单，只有在白名单内的脚本才能执行。
- `referrerpolicy`：HTTP 请求的`Referer`字段的处理方法。

### 10.2 `<noscript>`

`<noscript>`标签用于浏览器不支持或关闭 JavaScript 时，所要显示的内容。用户关闭 JavaScript 可能是为了节省带宽，以延长手机电池寿命，或者为了防止追踪，保护隐私。

```html
<noscript>
  您的浏览器不能执行 JavaScript 语言，页面无法正常显示。
</noscript>
```

上面这段代码，只有浏览器不能执行 JavaScript 代码时才会显示，否则就不会显示。

## 11.多媒体标签

除了图像，网页还可以放置视频和音频。

### 11.1 `<video>`

`<video>`标签是一个块级元素，用于放置视频。如果浏览器支持加载的视频格式，就会显示一个播放器，否则显示`<video>`内部的子元素。

```
<video src="example.mp4" controls>
  <p>你的浏览器不支持 HTML5 视频，请下载<a href="example.mp4">视频文件</a>。</p>
</video>
```

上面代码中，如果浏览器不支持该种格式的视频，就会显示`<video>`内部的文字提示。

<video>有以下属性。

- `src`：视频文件的网址。
- `controls`：播放器是否显示控制栏。该属性是布尔属性，不用赋值，只要写上属性名，就表示打开。如果不想使用浏览器默认的播放器，而想使用自定义播放器，就不要使用该属性。
- `width`：视频播放器的宽度，单位像素。
- `height`：视频播放器的高度，单位像素。
- `autoplay`：视频是否自动播放，该属性为布尔属性。
- `loop`：视频是否循环播放，该属性为布尔属性。
- `muted`：是否默认静音，该属性为布尔属性。
- `poster`：视频播放器的封面图片的 URL。
- `preload`：视频播放之前，是否缓冲视频文件。这个属性仅适合没有设置`autoplay`的情况。它有三个值，分别是`none`（不缓冲）、`metadata`（仅仅缓冲视频文件的元数据）、`auto`（可以缓冲整个文件）。
- `playsinline`：iPhone 的 Safari 浏览器播放视频时，会自动全屏，该属性可以禁止这种行为。该属性为布尔属性。
- `crossorigin`：是否采用跨域的方式加载视频。它可以取两个值，分别是`anonymous`（跨域请求时，不发送用户凭证，主要是 Cookie），`use-credentials`（跨域时发送用户凭证）。
- `currentTime`：指定当前播放位置（双精度浮点数，单位为秒）。如果尚未开始播放，则会从这个属性指定的位置开始播放。
- `duration`：该属性只读，指示时间轴上的持续播放时间（总长度），值为双精度浮点数（单位为秒）。如果是流媒体，没有已知的结束时间，属性值为`+Infinity`。

下面是一个例子。

```html
<video width="400" height="400"
       autoplay loop muted
       poster="poster.png">
</video>
```

上面代码中，视频播放器的大小是 400 x 400，会自动播放和循环播放，并且静音，还带有封面图。这是网站首页背景视频的常见写法。

HTML 标准没有规定浏览器需要支持哪些视频格式，完全由浏览器厂商自己决定。为了避免浏览器不支持视频格式，可以使用`<source>`标签，放置同一个视频的多种格式。

```html
<video controls>
  <source src="example.mp4" type="video/mp4">
  <source src="example.webm" type="video/webm">
  <p>你的浏览器不支持 HTML5 视频，请下载<a href="example.mp4">视频文件</a>。</p>
</video>
```

上面代码中，`<source>`标签的`type`属性的值是视频文件的 MIME 类型，上例指定了两种格式的视频文件：MP4 和 WebM。如果浏览器支持 MP4，就加载 MP4 格式的视频，不再往下执行了。如果不支持 MP4，就检查是否支持 WebM，如果还是不支持，则显示提示。

### 11.2 `<audio>`

.<audio>标签是一个块级元素，用于放置音频，用法与<video>标签基本一致。

```html
<audio controls>
  <source src="foo.mp3" type="audio/mp3">
  <source src="foo.ogg" type="audio/ogg">
  <p>你的浏览器不支持 HTML5 音频，请直接下载<a href="foo.mp3">音频文件</a>。</p>
</audio>
```

上面代码中，`<audio>`标签内部使用`<source>`标签，指定了两种音频格式：优先使用 MP3 格式，如果浏览器不支持则使用 Ogg 格式。如果浏览器不能播放音频，则提供下载链接。

.<audio>标签的属性与<video>标签类似，参见上一节。

- `autoplay`：是否自动播放，布尔属性。
- `controls`：是否显示播放工具栏，布尔属性。如果不设置，浏览器不显示播放界面，通常用于背景音乐。
- `crossorigin`：是否使用跨域方式请求。
- `loop`：是否循环播放，布尔属性。
- `muted`：是否静音，布尔属性。
- `preload`：音频文件的缓冲设置。
- `src`：音频文件网址。

### 11.3 `<track>`

`<track>`标签用于指定视频的字幕，格式是 WebVTT （`.vtt`文件），放置在`<video>`标签内部。它是一个单独使用的标签，没有结束标签。

```html
<video controls src="sample.mp4">
   <track label="英文" kind="subtitles" src="subtitles_en.vtt" srclang="en">
   <track label="中文" kind="subtitles" src="subtitles_cn.vtt" srclang="cn" default>
</video>
```

上面代码指定视频文件的英文字幕和中文字幕。

`<track>`标签有以下属性。

- `label`：播放器显示的字幕名称，供用户选择。
- `kind`：字幕的类型，默认是`subtitles`，表示将原始声音成翻译外国文字，比如英文视频提供中文字幕。另一个常见的值是`captions`，表示原始声音的文字描述，通常是视频原始使用的语言，比如英文视频提供英文字幕。
- `src`：vtt 字幕文件的网址。
- `srclang`：字幕的语言，必须是有效的语言代码。
- `default`：是否默认打开，布尔属性。

### 11.4 `<source>`

`<source>`标签用于`<picture>`、`<video>`、`<audio>`的内部，用于指定一项外部资源。单标签是单独使用的，没有结束标签。

它有如下属性，具体示例请参见相应的容器标签。

- `type`：指定外部资源的 MIME 类型。
- `src`：指定源文件，用于`<video>`和`<audio>`。
- `srcset`：指定不同条件下加载的图像文件，用于`<picture>`。
- `media`：指定媒体查询表达式，用于`<picture>`。
- `sizes`：指定不同设备的显示大小，用于`<picture>`，必须跟`srcset`搭配使用。

### 11.5 `<embed>`

`<embed>`标签用于嵌入外部内容，这个外部内容通常由浏览器插件负责控制。由于浏览器的默认插件都不一致，很可能不是所有浏览器的用户都能访问这部分内容，建议谨慎使用。

下面是嵌入视频播放器的例子。

```html
<embed type="video/webm"
       src="/media/examples/flower.mp4"
       width="250"
       height="200">
```

上面代码嵌入的视频，将由浏览器插件负责控制。如果浏览器没有安装 MP4 插件，视频就无法播放。

`<embed>`标签具有如下的通用属性。

- `height`：显示高度，单位为像素，不允许百分比。
- `width`：显示宽度，单位为像素，不允许百分比。
- `src`：嵌入的资源的 URL。
- `type`：嵌入资源的 MIME 类型。

浏览器通过`type`属性得到嵌入资源的 MIME 类型，一旦该种类型已经被某个插件注册了，就会启动该插件，负责处理嵌入的资源。

下面是 QuickTime 插件播放 MOV 视频文件的例子。

```html
<embed type="video/quicktime" src="movie.mov" width="640" height="480">
```

下面是启动 Flash 插件的例子。

```html
<embed src="whoosh.swf" quality="medium"
       bgcolor="#ffffff" width="550" height="400"
       name="whoosh" align="middle" allowScriptAccess="sameDomain"
       allowFullScreen="false" type="application/x-shockwave-flash"
       pluginspage="http://www.macromedia.com/go/getflashplayer">
```

上面代码中，如果浏览器没有安装 Flash 插件，就会提示去`pluginspage`属性指定的网址下载。

### 11.6 `<object>`, `<param>`

`<object>`标签作用跟`<embed>`相似，也是插入外部资源，由浏览器插件处理。它可以视为`<embed>`的替代品，有标准化行为，只限于插入少数几种通用资源，==没有历史遗留问题，因此更推荐使用。==

下面是插入 PDF 文件的例子。

```html
<object type="application/pdf"
    data="/media/examples/In-CC0.pdf"
    width="250"
    height="200">
</object>
```

上面代码中，如果浏览器安装了 PDF 插件，就会在网页显示 PDF 浏览窗口。

`<object>`具有如下的通用属性。

- `data`：嵌入的资源的 URL。
- `form`：当前网页中相关联表单的`id`属性（如果有的话）。
- `height`：资源的显示高度，单位为像素，不能使用百分比。
- `width`：资源的显示宽度，单位为像素，不能使用百分比。
- `type`：资源的 MIME 类型。
- `typemustmatch`：布尔属性，表示`data`属性与`type`属性是否必须匹配。

下面是插入 Flash 影片的例子。

```html
<object data="movie.swf"
  type="application/x-shockwave-flash"></object>
```

`<object>`标签是一个容器元素，内部可以使用`<param>`标签，给出插件所需要的运行参数。

```html
<object data="movie.swf" type="application/x-shockwave-flash">
  <param name="foo" value="bar">
</object>
```

##12 iframe

`<iframe>`标签用于在网页里面嵌入其他网页。

### 12.1 基本用法

`<iframe>`标签生成一个指定区域，在该区域中嵌入其他网页。它是一个容器元素，如果浏览器不支持`<iframe>`，就会显示内部的子元素。

```html
<iframe src="https://www.example.com"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p><a href="https://www.example.com">点击打开嵌入页面</a></p>
</iframe>
```

上面的代码在当前网页嵌入`https://www.example.com`，显示区域的宽度是`100%`，高度是`500`像素。如果当前浏览器不支持`<iframe>`，则会显示一个链接，让用户点击。

浏览器普遍支持`<iframe>`，所以内部的子元素可以不写。

`<iframe>`的属性如下。

- `allowfullscreen`：允许嵌入的网页全屏显示，需要全屏 API 的支持，请参考相关的 JavaScript 教程。
- `frameborder`：是否绘制边框，`0`为不绘制，`1`为绘制（默认值）。建议尽量少用这个属性，而是在 CSS 里面设置样式。
- `src`：嵌入的网页的 URL。
- `width`：显示区域的宽度。
- `height`：显示区域的高度。
- `sandbox`：设置嵌入的网页的权限，详见下文。
- `importance`：浏览器下载嵌入的网页的优先级，可以设置三个值。`high`表示高优先级，`low`表示低优先级，`auto`表示由浏览器自行决定。
- `name`：内嵌窗口的名称，可以用于`<a>`、`<form>`、`<base>`的`target`属性。
- `referrerpolicy`：请求嵌入网页时，HTTP 请求的`Referer`字段的设置。参见`<a>`标签的介绍。

### 12.2 sandbox属性

嵌入的网页默认具有正常权限，比如执行脚本、提交表单、弹出窗口等。如果嵌入的网页是其他网站的页面，你不了解对方会执行什么操作，因此就存在安全风险。为了限制`<iframe>`的风险，HTML 提供了`sandbox`属性，允许设置嵌入的网页的权限，等同于提供了一个隔离层，即“沙箱”。

`sandbox`可以当作布尔属性使用，表示打开所有限制。

```html
<iframe src="https://www.example.com" sandbox>
</iframe>
```

`sandbox`属性可以设置具体的值，表示逐项打开限制。未设置某一项，就表示不具有该权限。

- `allow-forms`：允许提交表单。
- `allow-modals`：允许提示框，即允许执行`window.alert()`等会产生弹出提示框的 JavaScript 方法。
- `allow-popups`：允许嵌入的网页使用`window.open()`方法弹出窗口。
- `allow-popups-to-escape-sandbox`：允许弹出窗口不受沙箱的限制。
- `allow-orientation-lock`：允许嵌入的网页用脚本锁定屏幕的方向，即横屏或竖屏。
- `allow-pointer-lock`：允许嵌入的网页使用 Pointer Lock API，锁定鼠标的移动。
- `allow-presentation`：允许嵌入的网页使用 Presentation API。
- `allow-same-origin`：不打开该项限制，将使得所有加载的网页都视为跨域。
- `allow-scripts`：允许嵌入的网页运行脚本（但不创建弹出窗口）。
- `allow-storage-access-by-user-activation`：`sandbox`属性同时设置了这个值和`allow-same-origin`的情况下，允许`<iframe>`嵌入的第三方网页通过用户发起`document.requestStorageAccess()`请求，经由 Storage Access API 访问父窗口的 Cookie。
- `allow-top-navigation`：允许嵌入的网页对顶级窗口进行导航。
- `allow-top-navigation-by-user-activation`：允许嵌入的网页对顶级窗口进行导航，但必须由用户激活。
- `allow-downloads-without-user-activation`：允许在没有用户激活的情况下，嵌入的网页启动下载。

注意，不要同时设置`allow-scripts`和`allow-same-origin`属性，这将使得嵌入的网页可以改变或删除`sandbox`属性。

### 12.3 loading属性

`<iframe>`指定的网页会立即加载，有时这不上希望的行为。`<iframe>`滚动进入视口以后再加载，这样会比较节省带宽。

`loading`属性可以触发`<iframe>`的懒加载。该属性可以取以下三个值。

- `auto`: 浏览器的默认行为，与不使用`loading`属性效果相同。
- `lazy`: `<iframe>`的懒加载，即将滚动进入视口时开始加载。
- `eager`: 立即加载资源，无论在页面上的位置如何。

```
<iframe src="https://example.com" loading="lazy"></iframe>
```

上面代码会启用`<iframe>`的懒加载。

有一点需要注意，如果`<iframe>`是隐藏的，则`loading`属性无效，将会立即加载。只要满足以下任一个条件，Chrome 浏览器就会认为`<iframe>`是隐藏的。

> - `<iframe>`的宽度和高度为4像素或更小。
> - 样式设为`display: none`或`visibility: hidden`。
> - 使用定位坐标为负`X`或负`Y`，将`<iframe`>放置在屏幕外。

## 13. 表格标签

表格（table）以行（row）和列（column）的形式展示数据。

### 13.1 `<table>`,`<caption>`

`<table>`是一个块级容器标签，所有表格内容都要放在这个标签里面。

```html
<table>
  ... ...
</table>
```

`<caption>`总是`<table>`里面的第一个子元素，表示表格的标题。该元素是可选的。

```html
<table>
  <caption>示例表格</caption>
</table>
```

### 13.2 `<thead>`、`<tbody>`、`<tfoot>`

`<thead>`、`<tbody>`、`<tfoot>`都是块级容器元素，且都是`<table>`的一级子元素，分别表示表头、表体和表尾。

```html
<table>
  <thead>... ...</thead>
  <tbody>... ...</tbody>
  <tfoot>... ...</tfoot>
</table>
```

这三个元素都是可选的。如果使用了`<thead>`，那么`<tbody>`和`<tfoot>`一定在`<thead>`的后面。如果使用了`<tbody>`，那么`<tfoot>`一定在`<tbody>`后面。

大型表格内部可以使用多个`<tbody>`，表示连续的多个部分。

### 13.3 `<colgroup>`,`<col>`

`<colgroup>`是`<table>`的一级子元素，用来包含一组列的定义。`<col>`是`<colgroup>`的子元素，用来定义表格的一列。

```html
<table>
  <colgroup>
    <col>
    <col>
    <col>
  </colgroup>
</table>
```

上面代码表明表格有3列。

`<col>`不仅是一个单独使用的标签，没有结束标志，而且还是一个空元素，没有子元素。它的主要作用，除了申明表格结构，还可以为表格附加样式。

```html
<table>
  <colgroup>
    <col class="c1">
    <col class="c2">
    <col class="c3">
  </colgroup>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
</table>
```

上面代码中，`<colgroup>`声明表格有三列，每一列有自己的 class，可以使用 CSS 针对每个 class 设定样式，会对整个表格生效。

`<col>`有一个`span`属性，值为正整数，默认为`1`。如果大于1，就表示该列的宽度包含连续的多列。

```html
<table>
  <colgroup>
    <col>
    <col span="2">
    <col>
  </colgroup>
</table>
```

上面代码中，表格的表头定义了3列，实际数据有4列。表头的第2列会连续跨2列。

### 13.4 `<tr>`

`<tr>`标签表示表格的一行（table row）。如果表格有`<thead>`、`<tbody>`、`<tfoot>`，那么`<tr>`就放在这些容器元素之中，否则直接放在`<table>`的下一级。

```html
<table>
  <tr>...</tr>
  <tr>...</tr>
  <tr>...</tr>
</table>
```

上面代码表示表格共有3行。

### 13.5 `<th>`,`<td>`

`<th>`和`<td>`都用来定义表格的单元格。其中，`<th>`是标题单元格，`<td>`是数据单元格。

```html
<table>
  <tr>
    <th>学号</th><th>姓名</th>
  </tr>
  <tr>
    <td>001</td><td>张三</td>
  </tr>
  <tr>
    <td>002</td><td>李四</td>
  </tr>
</table>
```

上面代码中，表格一共有三行。第一行是标题行，所以使用`<th>`；第二行和第三行是数据行，所以使用`<td>`。

####13.5.1 `colspan`属性，`rowspan`属性

单元格会有跨越多行或多列的情况，这要通过`colspan`属性和`rowspan`属性设置，前者表示单元格跨越的栏数，后者表示单元格跨越的行数。它们的值都是一个非负整数，默认为1。

```
<table>
  <tr>
    <td colspan="2">A</td><td>B</td>
  </tr>
  <tr>
    <td>A</td><td>B</td><td>C</td>
  </tr>
</table>
```

上面代码中，第一行的第一个单元格会跨两列。

#### 13.5.2 `headers`属性

如果表格很大，单元格很多，源码里面会看不清，哪个单元格对应哪个表头，这时就可以使用`headers`属性。

```html
<table>
  <tr>
    <th id="no">学号</th><th id="names">姓名</th>
  </tr>
  <tr>
    <td headers="no">001</td><td headers="names">张三</td>
  </tr>
  <tr>
    <td headers="no">002</td><td headers="names">李四</td>
  </tr>
</table>
```

上面代码中，标题栏的`<th>`设置了`id`属性，后面的`<td>`单元格的`headers`属性就对应这些`id`属性的值，因此就能看出来这些单元格对应哪个标题栏。

`headers`属性的值总是对应`<th>`标签的`id`属性的值。由于一个单元格可以对应多个标题栏（跨行的情况），所以`headers`属性可以是一个空格分隔的字符串，对应多个`id`属性的值。

#### 13.5.3 `scope`属性

`scope`属性只有`<th>`标签支持，一般不在`<td>`标签使用，表示该`<th>`单元格到底是栏的标题，还是列的标题。

```html
<table>
  <tr>
    <th scope="col">姓名</th>
    <th scope="col">学号</th>
    <th scope="col">性别</th>
  </tr>
  <tr>
    <th scope="row">张三</th>
    <td>001</td>
    <td>男</td>
  </tr>
  <tr>
    <th scope="row">李四</th>
    <td>002</td>
    <td>男</td>
  </tr>
</table>
```

上面代码中，第一行的标题栏都是列标题，所以`<th>`的`scope`属性为`col`，第二行和第三行的第一列是行标题，所以`<th>`标签的`scope`属性为`row`。

`scope`属性可以取下面这些值。

- `row`：该行的所有单元格，都与该标题单元格相关。
- `col`：该列的所有单元格，都与该标题单元格相关。
- `rowgroup`：多行组成的一个行组的所有单元格，都与该标题单元格相关，可以与`rowspan`属性配合使用。
- `colgroup`：多列组成的一个列组的所有单元格，都与该标题单元格相关，可以与`colspan`属性配合使用。
- `auto`：默认值，表示由浏览器自行决定。

下面是一个`colgroup`属性和`rowgroup`属性的例子。

```html
<table>
  <thead>
    <tr>
      <th scope="col">海报名称</th>
      <th scope="col">颜色</th>
      <th colspan="3" scope="colgroup">尺寸</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3" scope="rowgroup">Zodiac</th>
      <th scope="row">Full color</th>
      <td>A2</td>
      <td>A3</td>
      <td>A4</td>
    </tr>
    <tr>
      <th scope="row">Black and white</th>
      <td>A1</td>
      <td>A2</td>
      <td>A3</td>
    </tr>
    <tr>
      <th scope="row">Sepia</th>
      <td>A3</td>
      <td>A4</td>
      <td>A5</td>
    </tr>
  </tbody>
</table>
```

上面的例子中，列标题“尺寸”的`scope`属性为`colgroup`，表示这个标题单元格对应多列（本例为3列）；行标题的`scope`属性为`rowgroup`，表示这个标题单元格对应多行（本例为3行）。

渲染结果就是下面的样子。

| 海报名称        | 颜色       | 尺寸 |      |      |
| --------------- | ---------- | ---- | ---- | ---- |
| Zodiac          | Full color | A2   | A3   | A4   |
| Black and white | A1         | A2   | A3   |      |
| Sepia           | A3         | A4   | A5   |      |

## 14.表单标签

表单（form）是用户输入信息与网页互动的一种形式。大多数情况下，用户提交的信息会发给服务器，比如网站的搜索栏就是表单。

表单由一种或多种的小部件组成，比如输入框、按钮、单选框或复选框。这些小部件称为控件（controls）。

### 14.1 `<form>`

#### 14.1.1 简介

`<form>`标签用来定义一个表单，所有表单内容放到这个容器元素之中。

```html
<form>
  <!-- 各种表单控件-->
</form>
```

上面代码就是表单的基本形式。

下面是一个比较常见的例子。

```html
<form action="https://example.com/api" method="post">
  <label for="POST-name">用户名：</label>
  <input id="POST-name" type="text" name="user">
  <input type="submit" value="提交">
</form>
```

上面代码就是一个表单，一共包含三个控件：一个`<label>`标签，一个文本输入框，一个提交按钮。其中，文本输入框的`name`属性是`user`，表示将向服务器发送一个键名为`user`的键值对，键值就是这个控件的`value`属性，等于用户输入的值。

用户在文本输入框里面，输入用户名，比如`foobar`，然后点击提交按钮，浏览器就会向服务器`https://example.com/api`发送一个 POST 请求，发送`user=foobar`这样一段数据。

`<form>`有以下属性。

- `accept-charset`：服务器接受的字符编码列表，使用空格分隔，默认与网页编码相同。
- `action`：服务器接收数据的 URL。
- `autocomplete`：如果用户没有填写某个控件，浏览器是否可以自动填写该值。它的可能取值分别为`off`（不自动填写）和`on`（自动填写）。
- `method`：提交数据的 HTTP 方法，可能的值有`post`（表单数据作为 HTTP 数据体发送），`get`（表单数据作为 URL 的查询字符串发送），`dialog`（表单位于`<dialog>`内部使用）。
- `enctype`：当`method`属性等于`post`时，该属性指定提交给服务器的 MIME 类型。可能的值为`application/x-www-form-urlencoded`（默认值），`multipart/form-data`（文件上传的情况），`text/plain`。
- `name`：表单的名称，应该在网页中是唯一的。注意，如果一个控件没有设置`name`属性，那么这个控件的值就不会作为键值对，向服务器发送。
- `novalidate`：布尔属性，表单提交时是否取消验证。
- `target`：在哪个窗口展示服务器返回的数据，可能的值有`_self`（当前窗口），`_blank`（新建窗口），`_parent`（父窗口），`_top`（顶层窗口），`<iframe>`标签的`name`属性（即表单返回结果展示在`<iframe>`窗口）。

#### 14.1.2 enctype属性

`<form>`表单的`enctype`属性，指定了采用 POST 方法提交数据时，浏览器给出的数据的 MIME 类型。该属性可以取以下值。

（1）`application/x-www-form-urlencoded`

`application/x-www-form-urlencoded`是默认类型，控件名和控件值都要转义（空格转为`+`号，非数字和非字母转为`%HH`的形式，换行转为CR LF），控件名和控件值之间用`=`分隔。控件按照出现顺序排列，控件之间用`&`分隔。

（2）`multipart/form-data`

`multipart/form-data`主要用于文件上传。这个类型上传大文件时，会将文件分成多块传送，每一块的 HTTP 头信息都有`Content-Disposition`属性，值为`form-data`，以及一个`name`属性，值为控件名。

```html
Content-Disposition: form-data; name="mycontrol"
```

下面是上传文件的表单。

```html
<form action="https://example.com/api"
      enctype="multipart/form-data"
      method="post">
  用户名：<input type="text" name="submit-name"><br>
  文件：<input type="file" name="files"><br>
  <input type="submit" value="上传"> <input type="reset" value="清除">
</form>
```

上面代码中，输入用户名`Larry`，选中一个`file1.txt`文件，然后点击“上传”。浏览器发送的实际数据如下。

```html
Content-Type: multipart/form-data; boundary=--AaB03x

--AaB03x
Content-Disposition: form-data; name="submit-name"

Larry
--AaB03x
Content-Disposition: form-data; name="files"; filename="file1.txt"
Content-Type: text/plain

... contents of file1.txt ...
--AaB03x--
```

上面代码中，浏览器将这个表单发成多个数据块。最上面使用`Content-Type`字段告诉服务器，数据格式是`multipart/form-data`（即多个数据块），每个数据块的分隔标志是`--AaB03x`。每个数据块的第一行是`Content-Disposition`，其中的`name`字段表示这个数据块的控件名，数据体则是该控件的数据值，比如第一个数据块的`name`属性是`submit-name`控件，数据体是该控件的值`Larry`。第二个数据块是控件`files`，由于该控件是上传文件，所以还要用`filename`属性给出文件名`file1.txt`，数据体是`file1.txt`的内容。

### 14.2 `<fieldset>`,`<legend>`

`<fieldset>`标签是一个块级容器标签，表示控件的集合，用于将一组相关控件组合成一组。

```html
<form>
  <fieldset>
    <p>年龄：<input type="text" name="age"></p>
    <p>性别：<input type="text" name="gender"></p>
  </fieldset>
</form>
```

上面代码中，两个输入框是一组，它们的外面会显示一个方框。

`<fieldset>`有以下属性。

- `disabled`：布尔属性，一旦设置会使得`<fieldset>`内部包含的控件都不可用，都变成灰色状态。
- `form`：指定控件组所属的`<form>`，它的值等于`<form>`的`id`属性。
- `name`：该控件组的名称。

`<legend>`标签用来设置`<fieldset>`控件组的标题，通常是`<fieldset>`内部的第一个元素，会嵌入显示在控件组的上边框里面。

```html
<fieldset>
  <legend>学生情况登记</legend>
  <p>年龄：<input type="text" name="age"></p>
  <p>性别：<input type="text" name="gender"></p>
</fieldset>
```

上面代码中，这个控件组的标题会，嵌入显示在`<fieldset>`的上边框。

### 14.3 `<label>`

`<label>`标签是一个行内元素，提供控件的文字说明，帮助用户理解控件的目的。

```html
<label for="user">用户名：</label>
<input type="text" name="user" id="user">
```

上面代码中，输入框前面会有文字说明“用户名：”。

`<label>`的一大优势是增加了控件的可用性。有些控件比较小（比如单选框），不容易点击，那么点击对应的`<label>`标签，也能选中该控件。点击`<label>`，就相当于控件本身的`click`事件。

`<label>`的`for`属性关联相对应的控件，==它的值是对应控件的`id`属性==。所以，控件最好设置`id`属性。

控件也可以放在`<label>`之中，这时不需要`for`属性和`id`属性。

```html
<label>用户名：
  <input type="text" name="user">
</label>
```

`<label>`的属性如下。

- `for`：关联控件的`id`属性。
- `form`：关联表单的`id`属性。设置了该属性后，`<label>`可以放置在页面的任何位置，否则只能放在`<form>`内部。

一个控件可以有多个关联的`<label>`标签。

```html
<label for="username">用户名：</label>
<input type="text" id="username" name="username">
<label for="username"><abbr title="required">*</abbr></label>
```

上面代码中，`<input>`有两个关联的`<label>`。

### 14.4 `<input>`

#### 14.4.1 简介

`<input>`标签是一个行内元素，用来接收用户的输入。它是一个单独使用的标签，没有结束标志。

它有多种类型，取决于`type`属性的值，默认值是`text`，表示一个输入框。

```html
<input>
<!-- 等同于 -->
<input type="text">
```

上面代码会生成一个单行的输入框，用户可以在里面输入文本。

`<input>`的属性非常多，有些属性是某个类型专用的，放在下文的“类型”部分介绍。这里介绍一些所有类型的共同属性。

- `autofocus`：布尔属性，是否在页面加载时自动获得焦点。
- `disabled`：布尔属性，是否禁用该控件。一旦设置，该控件将变灰，用户可以看到，但是无法操作。
- `form`：关联表单的`id`属性。设置了该属性后，控件可以放置在页面的任何位置，否则只能放在`<form>`内部。
- `list`：关联的`<datalist>`的`id`属性，设置该控件相关的数据列表，详见后文。
- `name`：控件的名称，主要用于向服务器提交数据时，控件键值对的键名。注意，只有设置了`name`属性的控件，才会向服务器提交，不设置就不会提交。
- `readonly`：布尔属性，是否为只读。
- `required`：布尔属性，是否为必填。
- `type`：控件类型，详见下文。
- `value`：控件的值。

#### 14.4.2 类型

`type`属性决定了`<input>`的形式。该属性可以取以下值。

**（1）text**

`type="text"`是普通的文本输入框，用来输入单行文本。如果用户输入换行符，换行符会自动从输入中删除。

```html
<input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10">
```

`text`输入框有以下配套属性。

- `maxlength`：可以输入的最大字符数，值为一个非负整数。
- `minlength`：可以输入的最小字符数，值为一个非负整数，且必须小于`maxlength`。
- `pattern`：用户输入必须匹配的正则表达式，比如要求用户输入4个～8个英文字符，可以写成`pattern="[a-z]{4,8}"`。如果用户输入不符合要求，浏览器会弹出提示，不会提交表单。
- `placeholder`：输入字段为空时，用于提示的示例值。只要用户没有任何字符，该提示就会出现，否则会消失。
- `readonly`：布尔属性，表示该输入框是只读的，用户只能看，不能输入。
- `size`：表示输入框的显示长度有多少个字符宽，它的值是一个正整数，默认等于20。超过这个数字的字符，必须移动光标才能看到。
- `spellcheck`：是否对用户输入启用拼写检查，可能的值为`true`或`false`。

**（2）search**

`type="search"`是一个用于搜索的文本输入框，基本等同于`type="text"`。某些浏览器会在输入的时候，在输入框的尾部显示一个删除按钮，点击就会删除所有输入，让用户从头开始输入。

下面是一个例子。

```html
<form>
  <input type="search" id="mySearch" name="q"
    placeholder="输入搜索词……" required>
  <input type="submit" value="搜索">
</form>
```

**（3）button**

`type="button"`是没有默认行为的按钮，通常脚本指定`click`事件的监听函数来使用。

```html
<input type="button" value="点击">
```

建议尽量不使用这个类型，而使用`<button>`标签代替，一则语义更清晰，二则`<button>`标签内部可以插入图片或其他 HTML 代码。

**（4）submit**

`type="submit"`是表单的提交按钮。用户点击这个按钮，就会把表单提交给服务器。

```html
<input type="submit" value="提交">
```

如果不指定`value`属性，浏览器会在提交按钮上显示默认的文字，通常是`Submit`。

该类型有以下配套属性，用来覆盖`<form>`标签的相应设置。

- `formaction`：提交表单数据的服务器 URL。
- `formenctype`：表单数据的编码类型。
- `formmethod`：提交表单使用的 HTTP 方法（`get`或`post`）。
- `formnovalidate`：一个布尔值，表示数据提交给服务器之前，是否要忽略表单验证。
- `formtarget`：收到服务器返回的数据后，在哪一个窗口显示。

**（5）image**

`type="image"`表示将一个图像文件作为提交按钮，行为和用法与`type="submit"`完全一致。

```html
<input type="image" alt="登陆" src="login-button.png">
```

上面代码中，图像文件是一个可以点击的按钮，点击后会提交数据到服务器。

该类型有以下配套属性。

- `alt`：图像无法加载时显示的替代字符串。
- `src`：加载的图像 URL。
- `height`：图像的显示高度，单位为像素。
- `width`：图像的显示宽度，单位为像素。
- `formaction`：提交表单数据的服务器 URL。
- `formenctype`：表单数据的编码类型。
- `formmethod`：提交表单使用的 HTTP 方法（`get`或`post`）。
- `formnovalidate`：一个布尔值，表示数据提交给服务器之前，是否要忽略表单验证。
- `formtarget`：收到服务器返回的数据后，在哪一个窗口显示。

用户点击图像按钮提交时，会额外提交两个参数`x`和`y`到服务器，表示鼠标的点击位置，比如`x=52&y=55`。`x`是横坐标，`y`是纵坐标，都以图像左上角作为原点`(0, 0)`。如果图像按钮设置了`name`属性，比如`name="position"`，那么将以该值作为坐标的前缀，比如`position.x=52&position.y=55`。这个功能通常用来地图类型的操作，让服务器知道用户点击了地图的哪个部分。

**（6）reset**

`type="reset"`是一个重置按钮，用户点击以后，所有表格控件重置为初始值。

```html
<input type="reset" value="重置">
```

如果不设置`value`属性，浏览器会在按钮上面加上默认文字，通常是`Reset`。

这个控件用处不大，用户点错了还会使得所有已经输入的值都被重置，建议不要使用。

**（7）checkbox**

`type="checkbox"`是复选框，允许选择或取消选择该选项。

```html
<input type="checkbox" id="agreement" name="agreement" checked>
<label for="agreement">是否同意</label>
```

上面代码会在文字前面，显示一个可以点击的选择框，点击可以选中，再次点击可以取消。上面代码中，`checked`属性表示默认选中。

`value`属性的默认值是`on`。也就是说，如果没有设置`value`属性，以上例来说，选中复选框时，会提交`agreement=on`。如果没有选中，提交时不会有该项。

多个相关的复选框，可以放在`<fieldset>`里面。

```html
<fieldset>
  <legend>你的兴趣</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">编码</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">音乐</label>
  </div>
</fieldset>
```

上面代码中，如果用户同时选中两个复选框，提交的时候就会有两个`name`属性，比如`interest=coding&interest=music`。

**（8）radio**

`type="radio"`是单选框，表示一组选择之中，只能选中一项。单选框通常为一个小圆圈，选中时会被填充或突出显示。

```html
<fieldset>
  <legend>性别</legend>
  <div>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">男</label>
  </div>
  <div>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">女</label>
  </div>
</fieldset>
```

上面代码中，性别只能在两个选项之中，选择一项。

注意，多个单选框的`name`属性的值，应该都是一致的。提交到服务器的就是选中的那个值。

该类型的配套属性如下。

- `checked`：布尔属性，表示是否默认选中当前项。
- `value`：用户选中该项时，提交到服务器的值，默认为`on`。

**（9）email**

`type="email"`是一个只能输入电子邮箱的文本输入框。表单提交之前，浏览器会自动验证是否符合电子邮箱的格式，如果不符合就会显示提示，无法提交到服务器。

```html
<input type="email" pattern=".+@foobar.com" size="30" required>
```

上面代码会生成一个必填的文本框，只能输入后缀为`foobar.com`的邮箱地址。

该类型有一个`multiple`的布尔属性，一旦设置，就表示该输入框可以输入多个逗号分隔的电子邮箱。

```html
<input id="emailAddress" type="email" multiple required>
```

注意，如果同时设置了`multiple`属性和`required`属性，零个电子邮箱是允许的，也就是该输入框允许为空。

该类型的配套属性如下。

- `maxlength`：可以输入的最大字符数。
- `minlength`：可以输入的最少字符数。
- `multiple`：布尔属性，是否允许输入多个以逗号分隔的电子邮箱。
- `pattern`：输入必须匹配的正则表达式。
- `placeholder`：输入为空时的显示文本。
- `readonly`：布尔属性，该输入框是否只读。
- `size`：一个非负整数，表示输入框的显示长度为多少个字符。
- `spellcheck`：是否对输入内容启用拼写检查，可能的值为`true`或`false`。

该类型还可以搭配`<datalist>`标签，提供输入的备选项。

```html
<input type="email" size="40" list="defaultEmails">

<datalist id="defaultEmails">
  <option value="jbond007@mi6.defence.gov.uk">
  <option value="jbourne@unknown.net">
  <option value="nfury@shield.org">
  <option value="tony@starkindustries.com">
  <option value="hulk@grrrrrrrr.arg">
</datalist>
```

上面代码中，输入焦点进入输入框以后，会显示一个下拉列表，里面有五个参考项，供用户参考。

**（10）password**

`type="password"`是一个密码输入框。用户的输入会被遮挡，字符通常显示星号（`*`）或点（`·`）。

```html
<input type="password" id="pass" name="password"
           minlength="8" required>
```

浏览器对该类型输入框的显示，会有所差异。一种常见的处理方法是，用户每输入一个字符，先在输入框里面显示一秒钟，然后再遮挡该字符。

如果用户输入内容包含换行符（`U+000A`）和回车符（`U+000D`），浏览器会自动将这两个字符过滤掉。

该类型的配套属性如下。

- `maxlength`：可以输入的最大字符数。
- `minlength`：可以输入的最少字符数。
- `pattern`：输入必须匹配的正则表达式。
- `placeholder`：输入为空时的显示文本。
- `readonly`：布尔属性，该输入框是否只读。
- `size`：一个非负整数，表示输入框的显示长度为多少个字符。
- `autocomplete`：是否允许自动填充，可能的值有`on`（允许自动填充）、`off`（不允许自动填充）、`current-password`（填入当前网站保存的密码）、`new-password`（自动生成一个随机密码）。
- `inputmode`：允许用户输入的数据类型，可能的值有`none`（不使用系统输入法）、`text`（标准文本输入）、`decimal`（数字，包含小数）、`numeric`（数字0-9）等。

**（11）file**

`type="file"`是一个文件选择框，允许用户选择一个或多个文件，常用于文件上传功能。

```html
<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg">
```

该类型有以下属性。

- `accept`：允许选择的文件类型，使用逗号分隔，可以使用 MIME 类型（比如`image/jpeg`），也可以使用后缀名（比如`.doc`），还可以使用`audio/*`（任何音频文件）、`video/*`（任何视频文件）、`image/*`（任何图像文件）等表示法。
- `capture`：用于捕获图像或视频数据的源，可能的值有`user`（面向用户的摄像头或麦克风），`environment`（外接的摄像头或麦克风）。
- `multiple`：布尔属性，是否允许用户选择多个文件。

**（12）hidden**

`type="hidden"`是一个不显示在页面的控件，用户无法输入它的值，主要用来向服务器传递一些隐藏信息。比如，CSRF 攻击会伪造表单数据，那么使用这个控件，可以为每个表单生成一个独一无二的隐藏编号，防止伪造表单提交。

```html
<input id="prodId" name="prodId" type="hidden" value="xm234jq">
```

上面这个控件，页面上是看不见的。用户提交表单的时候，浏览器会将`prodId=xm234jq`发给服务器。

**（13）number**

`type="number"`是一个数字输入框，只能输入数字。浏览器通常会在输入框的最右侧，显示一个可以点击的上下箭头，点击向上箭头，数字会递增，点击向下箭头，数字会递减。

```html
<input type="number" id="tentacles" name="tentacles"
       min="10" max="100">
```

上面代码指定数字输入框，最小可以输入10，最大可以输入100。

该类型可以接受任何数值，包括小数和整数。可以通过`step`属性，限定只接受整数。

该类型有以下配套属性。

- `max`：允许输入的最大数值。
- `min`：允许输入的最小数值。
- `placeholder`：用户输入为空时，显示的示例值。
- `readonly`：布尔属性，表示该控件是否为只读。
- `step`：点击向上和向下箭头时，数值每次递减的步长值。如果用户输入的值，不符合步长值的设定，浏览器会自动四舍五入到最近似的值。默认的步长值是`1`，如果初始的`value`属性设为`1.5`，那么点击向上箭头得到`2.5`，点击向下箭头得到`0.5`。

**（14）range**

`type="range"`是一个滑块，用户拖动滑块，选择给定范围之中的一个数值。因为拖动产生的值是不精确的，如果需要精确数值，不建议使用这个控件。常见的例子是调节音量。

```html
<input type="range" id="start" name="volume"
         min="0" max="11">
```

上面代码会产生一个最小值为`0`、最大值为`11`的滑块区域。用户拖动滑块，选择想要的音量。

该类型的配套属性如下，用法与`type="number"`一致。

- `max`：允许的最大值，默认为100。
- `min`：允许的最小值，默认为0。
- `step`：步长值，默认为1。

`value`属性的初始值就是滑块的默认位置。如果没有设置`value`属性，滑块默认就会停在最大值和最小值中间。如果`max`属性、`min`属性、`value`属性都没有设置，那么`value`属性为50。

该类型与`<datalist>`标签配合使用，可以在滑动区域产生刻度。

```html
<input type="range" list="tickmarks">

<datalist id="tickmarks">
  <option value="0" label="0%">
  <option value="10">
  <option value="20">
  <option value="30">
  <option value="40">
  <option value="50" label="50%">
  <option value="60">
  <option value="70">
  <option value="80">
  <option value="90">
  <option value="100" label="100%">
</datalist>
```

上面代码会在0～100之间产生11个刻度。其中，`0%`、`50%`和`100%`三个位置会有文字提示，不过浏览器很可能不支持。

注意，浏览器生成的都是水平滑块。如果想要生成垂直滑块，可以使用 CSS 改变滑块区域的方向。

**（15）url**

`type="url"`是一个只能输入网址的文本框。提交表单之前，浏览器会自动检查网址格式是否正确，如果不正确，就会无法提交。

```html
<input type="url" name="url" id="url"
       placeholder="https://example.com"
       pattern="https://.*" size="30"
       required>
```

上面代码的`pattern`属性指定输入的网址只能使用 HTTPS 协议。

注意，该类型规定，不带有协议的网址是无效的，比如`foo.com`是无效的，`http://foo.com`是有效的。

该类型的配套属性如下。

- `maxlength`：允许的最大字符数。
- `minlength`：允许的最少字符串。
- `pattern`：输入内容必须匹配的正则表达式。
- `placeholder`：输入为空时显示的示例文本。
- `readonly`：布尔属性，表示该控件的内容是否只读。
- `size`：一个非负整数，表示该输入框显示宽度为多少个字符。
- `spellcheck`：是否启动拼写检查，可能的值为`true`（启用）和`false`（不启用）。

该类型与`<datalist>`标签搭配使用，可以形成下拉列表供用户选择。随着用户不断键入，会缩小显示范围，只显示匹配的备选项。

```html
<input id="myURL" name="myURL" type="url"
       list="defaultURLs">

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/" label="MDN Web Docs">
  <option value="http://www.google.com/" label="Google">
  <option value="http://www.microsoft.com/" label="Microsoft">
  <option value="https://www.mozilla.org/" label="Mozilla">
  <option value="http://w3.org/" label="W3C">
</datalist>
```

上面代码中，`<option>`的`label`属性表示文本标签，显示在备选下拉框的右侧，网址显示在左侧。

**（16）tel**

`type="tel"`是一个只能输入电话号码的输入框。由于全世界的电话号码格式都不相同，因此浏览器没有默认的验证模式，大多数时候需要自定义验证。

```html
<input type="tel" id="phone" name="phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required>

<small>Format: 123-456-7890</small>
```

上面代码定义了一个只能输入10位电话号码的输入框。

该类型的配套属性如下。

- `maxlength`：允许的最大字符数。
- `minlength`：允许的最少字符串。
- `pattern`：输入内容必须匹配的正则表达式。
- `placeholder`：输入为空时显示的示例文本。
- `readonly`：布尔属性，表示该控件的内容是否只读。
- `size`：一个非负整数，表示该输入框显示宽度为多少个字符。

**（17）color**

`type="color"`是一个选择颜色的控件，它的值一律都是`#rrggbb`格式。

```html
<input type="color" id="background" name="background"
           value="#e66465">
```

上面代码在 Chrome 浏览器中，会显示一个`#e66465`的色块。点击色块，就会出现一个拾色器，供用户选择颜色。

如果没有指定`value`属性的初始值，默认值为`#000000`（黑色）。

**（18）date**

`type="date"`是一个只能输入日期的输入框，用户可以输入年月日，但是不能输入时分秒。输入格式是`YYYY-MM-DD`。

```html
<input type="date" id="start" name="start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31">
```

上面代码会显示一个输入框，默认日期是2018年7月22日。用户点击以后，会日期选择器，供用户选择新的日期。

该类型有以下配套属性。

- `max`：可以允许的最晚日期，格式为`yyyy-MM-dd`。
- `min`：可以允许的最早日期，格式为`yyyy-MM-dd`。
- `step`：步长值，一个数字，以天为单位。

**（19）time**

`type="time"`是一个只能输入时间的输入框，可以输入时分秒，不能输入年月日。日期格式是24小时制的`hh:mm`，如果包括秒数，格式则是`hh:mm:ss`。日期选择器的形式则随浏览器不同而不同。

```html
<input type="time" id="appt" name="appt"
       min="9:00" max="18:00" required>

<small>营业时间上午9点到下午6点</small>
```

该类型有以下配套属性。

- `max`：允许的最晚时间。
- `min`：允许的最早时间。
- `readonly`：布尔属性，表示用户是否不可以编辑时间。
- `step`：步长值，单位为秒。

```html
<input id="appt" type="time" name="appt" step="2">
```

上面代码中，调节控件的话，时间每次改变的幅度是2秒钟。

**（20）month**

`type="month"`是一个只能输入年份和月份的输入框，格式为`YYYY-MM`。

```html
<input type="month" id="start" name="start"
       min="2018-03" value="2018-05">
```

该类型有以下配套属性。

- `max`：允许的最晚时间，格式为`yyyy-MM`。
- `min`：允许的最早时间，格式为`yyyy-MM`。
- `readonly`：布尔属性，表示用户是否不可以编辑时间。
- `step`：步长值，单位为月。

**（21）week**

`type="week"`是一个输入一年中第几周的输入框。格式为`yyyy-Www`，比如`2018-W18`表示2018年第18周。

```html
<input type="week" name="week" id="camp-week"
       min="2018-W18" max="2018-W26" required>
```

该类型有以下配套属性。

- `max`：允许的最晚时间，格式为`yyyy-Www`。
- `min`：允许的最早时间，格式为`yyyy-Www`。
- `readonly`：布尔属性，表示用户是否不可以编辑时间。
- `step`：步长值，单位为周。

**（22）datetime-local**

`type="datetime-local"`是一个时间输入框，让用户输入年月日和时分，格式为`yyyy-MM-ddThh:mm`。注意，该控件不支持秒。

```html
<input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30"
       min="2018-06-07T00:00" max="2018-06-14T00:00">
```

该类型有以下配套属性。

- `max`：允许的最晚时间，格式为`yyyy-MM-ddThh:mm`。
- `min`：允许的最早时间，格式为`yyyy-MM-ddThh:mm`。
- `step`：步长值，单位为秒，默认值是60。

### 14.5 `<button>`

`<button>`标签会生成一个可以点击的按钮，没有默认行为，通常需要用`type`属性或脚本指定按钮的功能。

```html
<button>点击</button>
```

上面代码会产生一个按钮，上面的文字就是“点击”。

`<button>`内部不仅放置文字，还可以放置图像，这可以形成图像按钮。

```html
<button name="search" type="submit">
  <img src="search.gif">搜索
</button>
```

`<button>`具有以下属性。

- `autofocus`：布尔属性，表示网页加载时，焦点就在这个按钮。网页里面只能有一个元素，具有这个属性。
- `disabled`：布尔属性，表示按钮不可用，会导致按钮变灰，不可点击。
- `name`：按钮的名称（与`value`属性配合使用），将以`name=value`的形式，随表单一起提交到服务器。
- `value`：按钮的值（与`name`属性配合使用），将以`name=value`的形式，随表单一起提交到服务器。
- `type`：按钮的类型，可能的值有三种：`submit`（点击后将数据提交给服务器），`reset`（将所有控件的值重置为初始值），`button`（没有默认行为，由脚本指定按钮的行为）。
- `form`：指定按钮关联的`<form>`表单，值为`<form>`的`id`属性。如果省略该属性，默认关联按钮所在父表单。
- `formaction`：数据提交到服务器的目标 URL，会覆盖`<form>`元素的`action`属性。
- `formenctype`：数据提交到服务器的编码方式，会覆盖`<form>`元素的`enctype`属性。可能的值有三种：`application/x-www-form-urlencoded`（默认值），`multipart/form-data`（只用于文件上传），`text/plain`。
- `formmethod`：数据提交到服务器使用的 HTTP 方法，会覆盖`<form>`元素的`method`属性，可能的值为`post`或`get`。
- `formnovalidate`：布尔属性，数据提交到服务器时关闭本地验证，会覆盖`<form>`元素的`novalidate`属性。
- `formtarget`：数据提交到服务器后，展示服务器返回数据的窗口，会覆盖`<form>`元素的`target`属性。可能的值有`_self`（当前窗口），`_blank`（新的空窗口）、`_parent`（父窗口）、`_top`（顶层窗口）。

### 14.6 `<select>`

`<select>`标签用于生成一个下拉菜单。

```html
<label for="pet-select">宠物：</label>

<select id="pet-select" name="pet-select">
  <option value="">--请选择一项--</option>
  <option value="dog">狗</option>
  <option value="cat">猫</option>
  <option value="others">其他</option>
</select>
```

上面代码中，`<select>`生成一个下拉菜单，菜单标题是“--请选择一项--”，最右侧有一个下拉箭头。点击下拉箭头，会显示三个菜单项，供用户点击选择。

下拉菜单的菜单项由`<option>`标签给出，每个`<option>`代表可以选择的一个值。选中的`<option>`的`value`属性，就是`<select>`控件发送的服务器的值。

`<option>`有一个布尔属性`selected`，一旦设置，就表示该项是默认选中的菜单项。

```html
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

上面代码中，第二项`Second Value`是默认选中的。页面加载的时候，会直接显示在下拉菜单上。

`<select>`有如下属性。

- `autofocus`：布尔属性，页面加载时是否自动获得焦点。
- `disabled`：布尔属性，是否禁用当前控件。
- `form`：关联表单的`id`属性。
- `multiple`：布尔属性，是否可以选择多个菜单项。默认情况下，只能选择一项。一旦设置，多数浏览器会显示一个滚动列表框。用户可能需要按住`Shift`或其他功能键，选中多项。
- `name`：控件名。
- `required`：布尔属性，是否为必填控件。
- `size`：设置了`multiple`属性时，页面显示时一次可见的行数，其他行需要滚动查看。

### 14.7 `<option>`, `<optgroup>`

`<option>`标签用在`<select>`、`<optgroup>`、`<datalist>`里面，表示一个菜单项，参见`<select>`的示例。

它有如下属性。

- `disabled`：布尔属性，是否禁用该项。
- `label`：该项的说明。如果省略，则等于该项的文本内容。
- `selected`：布尔属性，是否为默认值。显然，一组菜单中，只能有一个菜单项设置该属性。
- `value`：该项提交到服务器的值。如果省略，则等于该项的文本内容。

`<optgroup>`表示菜单项的分组，通常用在`<select>`内部。

```html
<label>宠物：
  <select name="pets" multiple size="4">
    <optgroup label="四条腿的宠物">
      <option value="dog">狗</option>
      <option value="cat">猫</option>
    </optgroup>
    <optgroup label="鸟类">
      <option value="parrot">鹦鹉</option>
      <option value="thrush">画眉</option>
    </optgroup>
  </select>
</label>
```

上面代码中，`<select>`是一个下拉菜单，它的内部使用`<optgroup>`将菜单项分成两组。每组有自己的标题，会加粗显示，但是用户无法选中。

它的属性如下。

- `disabled`：布尔设置，是否禁用该组。一旦设置，该组所有的菜单项都不可选。
- `label`：菜单项分组的标题。

### 14.8 `<datalist>`

`<datalist>`标签是一个容器标签，用于为指定控件提供一组相关数据，通常用于生成输入提示。它的内部使用`<option>`，生成每个菜单项。

```html
<label for="ice-cream-choice">冰淇淋：</label>
<input type="text" list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">

<datalist id="ice-cream-flavors">
  <option value="巧克力">
  <option value="椰子">
  <option value="薄荷">
  <option value="草莓">
  <option value="香草">
</datalist>
```

上面代码中，`<input>`生成一个文本输入框，用户可以输入文本。`<input>`的`list`属性指定关联的`<datalist>`的`id`属性。`<datalist>`的数据列表用于输入建议，用户点击输入框的时候，会显示一个下拉菜单，里面是建议的输入项。并且还会自动匹配用户已经输入的字符，缩小可选的范围，比如用户输入“香”，则只会显示“香草”这一项。

注意，`<option>`在这里可以不需要闭合标签。

`<option>`标签还可以加入`label`属性，作为说明文字。Chrome 浏览器会将其显示在`value`的下一行。

```html
<datalist id="ide">
  <option value="Brackets" label="by Adobe">
  <option value="Coda" label="by Panic">
</datalist>
```

上面代码的渲染结果是，Chrome 浏览器会在下拉列表显示`value`值（比如`Brackets`），然后在其下方以小字显示`label`值（比如`by Adobe`）。

### 14.9 `<textarea>`

`<textarea>`是一个块级元素，用来生成多行的文本框。

```html
<textarea id="story" name="story"
          rows="5" cols="33">
这是一个很长的故事。
</textarea>
```

上面代码会生成一个长度为5行，宽度为33个字符的文本框。

该标签有如下属性。

- `autofocus`：布尔属性，是否自动获得焦点。
- `cols`：文本框的宽度，单位为字符，默认值为20。
- `dir`：设定文本方向，默认为从左到右（`dir="ltr"`），也可以设为从右到左（`dir="rtl"`），或者让浏览器根据用户输入自动调整（`dir="auto"`）。
- `disabled`：布尔属性，是否禁用该控件。
- `form`：关联表单的`id`属性。
- `maxlength`：允许输入的最大字符数。如果未指定此值，用户可以输入无限数量的字符。
- `minlength`：允许输入的最小字符数。
- `name`：控件的名称。
- `placeholder`：输入为空时显示的提示文本。
- `readonly`：布尔属性，控件是否为只读。
- `required`：布尔属性，控件是否为必填。
- `rows`：文本框的高度，单位为行。
- `spellcheck`：是否打开浏览器的拼写检查。可能的值有`true`（打开），`default`（由父元素或网页设置决定），`false`（关闭）。
- `wrap`：输入的文本是否自动换行。可能的值有`hard`（浏览器自动插入换行符`CR + LF`，使得每行不超过控件的宽度），`soft`（输入内容超过宽度时自动换行，但不会加入新的换行符，并且浏览器保证所有换行符都是`CR + LR`，这是默认值），`off`（关闭自动换行，单行长度超过宽度时，会出现水平滚动条）。

### 14.10 `<output>`

`<output>`标签是一个行内元素，用于显示用户操作的结果。

```html
<input type="number" name="a" value="10"> +
<input type="number" name="b" value="10"> =
<output name="result">20</output>
```

该标签有如下属性。

- `for`：关联控件的`id`属性，表示为该控件的操作结果。
- `form`：关联表单的`id`属性。
- `name`：控件的名称。

### 14.11 `<progress>`

`<progress>`标签是一个行内元素，表示任务的完成进度。浏览器通常会将显示为进度条。

```html
<progress id="file" max="100" value="70"> 70% </progress>
```

该标签有如下属性。

- `max`：进度条的最大值，应该是一个大于`0`的浮点数。默认值为1。
- `value`：进度条的当前值。它必须是`0`和`max`属性之间的一个有效浮点数。如果省略了`max`属性，该值则必须在`0`和`1`之间。如果省略了`value`属性，则进度条会出现滚动，表明正在进行中，无法知道完成的进度。

### 14.12 `<meter>`

`<meter>`标签是一个行内元素，表示指示器，用来显示已知范围内的一个值，很适合用于任务的当前进度、磁盘已用空间、充电量等带有比例性质的场合。浏览器通常会将其显示为一个不会滚动的指示条。

```html
<p>烤箱的当前温度是<meter min="200" max="500"
  value="350"> 350 度</meter>。</p>
```

上面代码会显示一个指示条，左侧表示`200`，右侧表示`500`，当前位置停留在`350`。

注意，`<meter>`元素的子元素，正常情况下不会显示。只有在浏览器不支持`<meter>`时才会显示。

该标签有如下属性。

- `min`：范围的下限，必须小于`max`属性。如果省略，则默认为`0`。
- `max`：范围的上限，必须大于`min`属性。如果省略，则默认为`1`。
- `value`：当前值，必须在`min`属性和`max`属性之间。如果省略，则默认为`0`。
- `low`：表示“低端”的上限门槛值，必须大于`min`属性，小于`high`属性和`max`属性。如果省略，则等于`min`属性。
- `high`：表示“高端”的下限门槛值，必须小于`max`属性，大于`low`属性和`min`属性。如果省略，则等于`max`属性。
- `optimum`：指定最佳值，必须在`min`属性和`max`属性之间。它应该与`low`属性和`high`属性一起使用，表示最佳范围。如果`optimum`小于`low`属性，则表示“低端”是最佳范围；如果大于`high`属性，则表示“高端”是最佳范围；如果在`low`和`high`之间，则表示“中间地带”是最佳范围。如果省略，则等于`min`和`max`的中间值。
- `form`：关联表单的`id`属性。

Chrome 浏览器使用三种颜色，表示指示条所处的位置。较好情况时，当前位置为绿色；一般情况时，当前位置为黄色；较差情况时，当前位置为红色。

```html
<meter id="fuel" name="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value="50">
    at 50/100
</meter>
```

上面代码中，指示条可以分成三段：0 ～ 32，33 ～ 65，66 ～ 100。由于`optimum`属性是`80`，因此`66 ～ 100`是较好情况，`33 ～ 65`是一般情况，`0 ～ 32`是较差情况。浏览器因此会根据`value`属性，将当前位置显示为不同颜色，小于`33`时显示红色，大于`65`时显示绿色，两者之间显示黄色。

## 15. 其他标签

本章介绍一些最新引入标准的标签。

### 15.1 `<dialog>`

#### 15.1.1 基本用法

`<dialog>`标签表示一个可以关闭的对话框。

```html
<dialog>
  Hello world
</dialog>
```

上面就是一个最简单的对话框。

默认情况下，对话框是隐藏的，不会在网页上显示。如果要让对话框显示，必须加上`open`属性。

```html
<dialog open>
  Hello world
</dialog>
```

上面代码会在网页显示一个方框，内容是`Hello world`。

`<dialog>`元素里面，可以放入其他 HTML 元素。

```html
<dialog open>
  <form method="dialog">
    <input type="text">
    <button type="submit" value="foo">提交</button>
  </form>
</dialog>
```

上面的对话框里面，有一个输入框和提交按钮。

注意，上例中`<form>`的`method`属性设为`dialog`，这时点击提交按钮，对话框就会消失。但是，表单不会提交到服务器，浏览器会将表单元素的`returnValue`属性设为 Submit 按钮的`value`属性（上例是`foo`）。

#### 15.1.2 JavaScript API

`<dialog>`元素的 JavaScript API 提供`Dialog.showModal()`和`Dialog.close()`两个方法，用于打开/关闭对话框。

```javascript
const modal = document.querySelector('dialog');

// 对话框显示，相当于增加 open 属性
modal.showModal();

// 对话框关闭，相当于移除 open 属性
modal.close();
```

开发者可以提供关闭按钮，让其调用`Dialog.close()`方法，关闭对话框。

`Dialog.close()`方法可以接受一个字符串作为参数，用于传递信息。`<dialog>`接口的`returnValue`属性可以读取这个字符串，否则`returnValue`属性等于提交按钮的`value`属性。

```javascript
modal.close('Accepted');
modal.returnValue // "Accepted"
```

`Dialog.showModal()`方法唤起对话框时，会有一个透明层，阻止用户与对话框外部的内容互动。CSS 提供了一个 Dialog 元素的`::backdrop`伪类，用于选中这个透明层，因此可以编写样式让透明层变得可见。

```css
dialog {
  padding: 0;
  border: 0;
  border-radius: 0.6rem;
  box-shadow: 0 0 1em black;
}

dialog::backdrop {
  /* make the backdrop a semi-transparent black */
  background-color: rgba(0, 0, 0, 0.4);
}
```

上面代码不仅为`<dialog>`指定了样式，还将对话框的透明层变成了灰色透明。

`<dialog>`元素还有一个`Dialog.show()`方法，也能唤起对话框，但是没有透明层，用户可以与对话框外部的内容互动。

#### 15.1.3 事件

`<dialog>`元素有两个事件，可以监听。

- `close`：对话框关闭时触发
- `cancel`：用户按下`esc`键关闭对话框时触发

如果希望用户点击透明层，就关闭对话框，可以用下面的代码。

```javascript
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close('cancelled');
  }
});
```

### 15.2 `<details>`，`<summary>`

#### 15.2.1 基本用法

`<details>`标签用来折叠内容，浏览器会折叠显示该标签的内容。

```html
<details>
这是一段解释文本。
</details>
```

上面的代码在浏览器里面，会折叠起来，显示`Details`，前面有一个三角形，就像下面这样。

```
▶ Details
```

用户点击这段文本，折叠的文本就会展开，显示详细内容。

```
▼ Details
这是一段解释文本。
```

再点击一下，展开的文本又会重新折叠起来。

<details>标签的open属性，用于默认打开折叠。

```html
<details open>
这是一段解释文本。
</details>
```

上面代码默认打开折叠。

`<summary>`标签用来定制折叠内容的标题。

```html
<details>
  <summary>这是标题</summary>
  这是一段解释文本。
</details>
```

上面的代码显示结果如下。

```
▶ 这是标题
```

点击后，展示的效果如下。

```
▼ 这是标题
这是一段解释文本。
```

通过 CSS 设置`summary::-webkit-details-marker`，可以改变标题前面的三角箭头。

```css
summary::-webkit-details-marker {
  background: url(https://example.com/foo.svg);
  color: transparent;
}
```

下面的样式是另一种替换箭头的方法。

```css
summary::-webkit-details-marker {
  display: none;
}
summary:before {
  content: "\2714";
  color: #696f7c;
  margin-right: 5px;
}
```

#### 15.2.2 JavaScript API

`Details`元素的`open`属性返回`<details>`当前是打开还是关闭。

```javascript
const details = document.querySelector('details');

if (detail.open === true) {
  // 展开状态
} else {
  // 折叠状态
}
```

`Details`元素有一个`toggle`事件，打开或关闭折叠时，都会触发这个事件。

```javascript
details.addEventListener('toggle', event => {
  if (details.open) {
    /* 展开状况 */
  } else {
    /* 折叠状态 */
  }
});
```
