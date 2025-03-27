1.布局定位属性：display/position/float/clear/visibility/overflow
2.自身属性:width/height/margin/padding/border/background
3.文本属性:color/font/text-decoration/text-align/vertical-align/white-space/break-word
4.其他属性（CSS3）:content/cursor/border-radius/box-shadow/text-shadow/background:linear-gradient
如:
.irl {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
}

页面布局思路：
1.确定页面的版心（可视区）宽度。
2.分析页面中的行模块，以及每个行模块中的列模块，页面布局第一准则
3.一行中的列模块经常浮动布局，先确定每个列的大小，之后确定列的位置，页面布局第二准则
<a href="../CSS笔记/浮动/传统网页布局的三种方式：.md">
4.制作 HTML 结构。先结构后样式
5.先理清布局结构再写代码