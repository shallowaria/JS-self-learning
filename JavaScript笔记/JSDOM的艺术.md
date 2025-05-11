[图灵程序设计丛书]JavaScript DOM编程艺术 (Jeremy Keith Jeffrey Sambells) (Z-Library) (高亮: 28; 标注: 0)

───────────────

▪ createTextNode的语怯与createElement很相似: 
document.createTextNode(text)

▪ 在使用 appendChild方法时，不必非得使用一些变量来引用父节点和子节点。事实上，完全 
把上面这条语句写成下面这样: 
document.getElementByld("testdiv").appendChild( document.createEleme时("p"))j 
可以看到，上面这样的代码很难阅读和理解。像下面这样多写几行，从长远来看是值得的: 
var para = document.createElement("p"); 
var testdiv = document.getElementByld("testdiv"); 
testdiv.appendChild(para);

▪ parent.appendChild(child)

▪ document.createElement(nodeName)

▪ 在需要把一大段HTML内容插入一份文档时， innerHTML属性可以让你又快又简单地完成这 
一任务。不过， innerHTML属性不会返回任何对刚插入的内容的引用。如果想对刚插入的内容进 
行处理，则需要使用DOM提供的那些精确的方法和属性。 
innerHTML属性要比 document.write()方格更值得推荐。使用 1nner、HTML属性，你就可以把 
JavaScript代码从标记中分离出来。用不着再在标记的标签。

▪ links[i] .onclick = function() { }
这条语句定义了一个匿名函数。这是一种在代码执行时创建函数的办法。具体到上面这条语' 
句，它把 1 i nks[;]元素的 onclick事件处理函数指定为这个匿名函数。这个匿名函数里的所有语 
句将在 1 inks[i]元素所对应的链接被点击时执行。 
1 inks[ i]元素的值会随着变量 1的递增而变化。如果假设 l inks集合里包含4个元素，那么第 
一个元素将是links[O]，最后一个元素是links[3]。 
我传递给showPic函数的参数是关键字th怡，它代表此时此刻与onclick方法相关联的那个 
元素。也就是说， this在这里代表 1 inks，而 links[i]又对应着 1 inks节点列表里的某个特定 
fA节点: 
showPic(this);

▪ 把充当循环计数器的变量命名为 "i"是一种传统做法。字母 "i"在这里的含义是"increment，许多程序设计语言里都习惯使用 "i"作为递增的变量的名字。

▪ 把 href属性设置为一个真实存在的值不过是举手之劳，但图片库却因此能够平稳退化。虽 
说没有启用JavaScript功能的用户需要在浏览器里点击"后退"按钮才能重新看到我的图片清单， 
但这总比根本看不到要好得多吧。

▪ 通常，为了 
与非精简版本区分开，最好在精简副本的文件名中加上min字样

▪ 口 childNodes 
口 nodeType 
口 nodeValue 
口 firstChild 
口 lastChild

▪ 口 getElementByld 
口 getElementsByTagName 
口 getElementByClassName 
口 getAttribute 
口 setAtt ribute

▪ 如果想改变一个文本节点的值，那就使用DOM提供的 nodeValue属性，它用来得到(和设 
置)一个节点的值 : 
node.nodeValue 
但这里有个大家必须注意的细节:在用nodeValue属性获取description对象的值肘，得到的 
并不是包含在这个段落里的文本。可以用下面这条alert语句来验证这一点: 
alert (description.nodeValue)j 
· 
这个调用将返回一个null值。

元素本身的nodeValue属性是一个空值，而你真正需要的是 

元素所包含的文本的值。 
包含在

元素里的文本是另一种节点，它是

元素的第一个子节点。因此，你想要得到的 
其实是它的第一个子节点的nodeValue属性值。

▪ node.firstChild 
这种写泣与下面的写怯完全等价: 
node.childNodes[o] · 
这不仅更加简短，还更加具有可读性。 
DOM还提供了一个与之对应的lastChild属性: 
node.lastChild

▪ nodeType属性总共有 1 2种可取值，但其中仅有3种具有实用价值。 
口元素节点的nodeType属性值是1。 
口属性节点的nodeType属性值是2。 
口文本节点的nodeType属性值是3。

▪ 加事件处理函数的语怯如 
下所示: 
event = ("Java5cript s tatementμ)" 
请注意， J avaScript代码包含在一对引号之间。我们可以把任意数量的JavaScript语句放在这 
对引号之间，只要把各条语句用分号隔开即可。 
下面这样onclick事件就可以调用 showPic方泣了: 
onc1ick =飞howPic(this)j"

▪ 这里有一个非常值得关注的细节:通过setAttribute对文档做出修改后，在通过浏览器的 
úew source (查看源代码)选项去查看文档的源代码时看到的仍将是改变前的属性值，也就是说， 
~tAttri bute做出的修改不会反映在文档本身的源代码里。这种"表里不一"的现象源自DOM 
的工作模式:先加载文档的静态内容，再动态刷新，动态刷新不影响文档的静态内容。这正是 
DOM的真正威力:对页面内容进行刷新却不需要在浏览器里刷新页面。

▪ 每个节点都是一个对象。

▪ alert(document.getElementsByClassName("important sale").length)j 
你会看到警告框中显示 1，表示只有一个元素匹配，因为只有一个元素同时带有" important" 
和.sale"类名。住意，即使在元素的class属性中，类名的顺序是" sa le import"而非参数中指定的 
古丰()rt sa 1 e" ，也照样会匹配该元素。不仅类名的实际顺序不重要，就算元素还带有更多类名也 
量有关系。

▪ 文档中的每一个元素都是一个对象。利用DOM提供的方站能得到任何一个对象。

▪ 为了使用Person对象来描述一个特定的人，需要创建一个Person对象的实例 (instance)。实 
例是对象的具体个体。例如，你和我都是人，都可以用Person对象来描述g但你和我是两个不同 
-的个体，很可能有着不同的属性(例如，你和我的年龄可能不一样)。因此，你和我对应着两个 
不同的Person对象一一它们虽然都是Person对象，但它们是两个不同的实例。

▪ 你已经见过如何用mood和age等变量来存放诸如"心情"和"年龄"之类的值。如果它们是 
某个对象的属性
假如Person对象还关联着一些诸如walk和sleep之类的函数，这些函数就是这个对象的 
方法，而我们必须使用如下所示的记号来访问它们: 
Person. walk () 
Person. sleep() 
把这些属性和方法全部集合在一起，我们就得到了一个Person对象。 
为了使用Person对象来描述一个特定的人，需要创建一个Person对象的实例 (instance)。实 
例是对象的具体个体。例如，你和我都是人，都可以用Person对象来描述g但你和我是两个不同 
-的个体，很可能有着不同的属性(例如，你和我的年龄可能不一样)。因此，你和我对应着两个 
不同的Person对象一一它们虽然都是Person对象，但它们是两个不同的实例。 
为给定对象创建一个新实例需要使用new关键字，如下所示: 
var jeremy = new Person; 
上面这条语句将创建出Person对象的一个新实例jeremy。
对象、属性、方法和实例等概念比较抽象，为了让大家对这些概念有一个直观的认识，我在 
这里用虚构的Person对象作为例子。 JavaScript里并没有 Person对象。

▪ 属性是隶属于某个特定对象的变量: 
口方法是只有某个特定对象才能调用的函数。

▪ 在命名变量时，我用下划线来分隔各个单词g在命 
名函数时，我从第二个单词开始把每个单词的第一个字母写成大写形式(也就是所谓的驼峰命名 
法)。我这么做是为了能够一眼看出哪些名字是变量，哪些名字是函数。与变量的情况一样， 
JavaScript语言也不允许函数的名字里包含空格。驼峰命名法可以在不违反这一规定的前提下， 
把变量和函数的名字以一种既简单又明确的方式区分开来。

▪ 在JavaScript脚本中，如果程序员在对某个变量赋值之前未声明，赋值操作将自动声明该变 
量。

▪ 解释型程序设计语言不需要编译器一一它们仅需要解释器。对于JavaScript语言，在互联网 
环境下， Web浏览器负责完成有关的解释和执行工作。浏览器中的JavaScript解释器将直接读入 
源代码并执行。浏览器中如果没有解释器， JavaScript代码就无法执行。 
用编译型语言编写的代码有错误，这些错误在代码编译阶段就能被发现。而解释型语言代 
码中的错误只能等到解释器执行到有关代码时才能被发现。 
与解释型语言相比，编译型语言往往速度更快，可移植性更好，但它们的学习曲线也往往相 
当陡峭。 
JavaScript的优点之一就是相当容易入门，但千万不要因此小看JavaScript，其实它能完成许 
多相当复杂的编程任务。不过，本章主要介绍它最基本的语法和用法。

▪ 解释型程序设计语言不需要编译器一一它们仅需要解释器。对于JavaScript语言，在互联网 
环境下， Web浏览器负责完成有关的解释和执行工作。浏览器中的JavaScript解释器将直接读入 
源代码并执行。浏览器中如果没有解释器， JavaScript代码就无法执行。

▪ 什么是DOM?简单地说，DOM是一套对文档的内容进行抽象和概念化的方法。 
在现实世界里，人们对所谓的"世界对象模型"都不会陌生。例如，当用"汽车"、"房子" 
和"树"

▪ DOM是一种API (应用编程接口)。简单地说， API就是一组已经得到有关各方共同认可的 
基本约定。在现实世界中，相当于API的例子包括(但不限于)摩尔斯码、国际时区、化学元素 
周期表。

