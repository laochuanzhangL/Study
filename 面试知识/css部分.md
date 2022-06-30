
### 1、一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度
- 方案1：
   - .sub { height: calc(100%-100px); }
- 方案2：
   - .container { position:relative; }
   - .sub { position: absolute; top: 100px; bottom: 0; }
- 方案3：
   - .container { display:flex; flex-direction:column; }
   - .sub { flex:1; }

### 2、font-style 属性 oblique 是什么意思
font-style: oblique; 使没有 italic 属性的文字实现倾斜

### 3、设置元素浮动后，该元素的 display 值会如何变化
设置元素浮动后，该元素的 display 值自动变成 block


### 4、你对 line-height 是如何理解的

- line-height 指一行字的高度，包含了字间距，实际上是下一行基线到上一行基线距离
- 如果一个标签没有定义 height 属性，那么其最终表现的高度是由 line-height 决定的
- 一个容器没有设置高度，那么撑开容器高度的是 line-height 而不是容器内的文字内容
- 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中
- line-height 和 height 都能撑开一个高度，height 会触发 haslayout，而 line-height 不会


### 5、伪元素和伪类的区别和作用

- 伪元素 -- 在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。
- 它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：
```css
p::before {content:"第一章：";}
p::after {content:"Hot!";}
p::first-line {background:red;}
p::first-letter {font-size:30px;}
```

- 伪类 -- 将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：
```css
a:hover {color: #FF00FF}
p:first-child {color: red}
```

### 6、抽离样式模块怎么写，说出思路

- CSS可以拆分成2部分：公共CSS 和 业务CSS：
   - 网站的配色，字体，交互提取出为公共CSS。这部分CSS命名不应涉及具体的业务
   - 对于业务CSS，需要有统一的命名，使用公用的前缀。可以参考面向对象的CSS

### 7、display: none;与visibility: hidden;的区别

- 联系：它们都能让元素不可见
- 区别：
   - display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见
   - display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式
   - 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘。
   - 读屏器不会读取display: none;元素内容；会读取visibility: hidden;元素内容

### <br />8、link与@import的区别
**1.从属关系区别**<br />@import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。<br />**2.加载顺序区别**<br />加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。<br />**3.兼容性区别**<br />@import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。<br />**4.DOM可控性区别**<br />可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。<br />**5.权重区别(该项有争议，下文将详解)**<br />link引入的样式权重大于@import引入的样式.

### 9、css的权重优先级
!important > 行内样式 > ID > 类、伪类、属性 > 标签名 > 继承 > 通配符

| **选择器** | **权重** |
| --- | --- |
| 通配符 | 0 |
| 标签 | 1 |
| 类/伪类/属性 | 10 |
| ID | 100 |
| 行内样式 | 1000 |
| important | 1/0(无穷大) |

<br />

### 10、stylus/sass/less区别

- 均具有“变量”、“混合”、“嵌套”、“继承”、“颜色混合”五大基本特性
- Scss和LESS语法较为严谨，LESS要求一定要使用大括号“{}”，Scss和Stylus可以通过缩进表示层次与嵌套关系
- Scss无全局变量的概念，LESS和Stylus有类似于其它语言的作用域概念
- Sass是基于Ruby语言的，而LESS和Stylus可以基于NodeJS NPM下载相应库后进行编译；
