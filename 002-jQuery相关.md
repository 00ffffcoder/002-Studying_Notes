# jQuery相关

### $1. 什么是 jQuery ？

- jQuery是一个**JavaScript函数库**。
- jQuery是一个轻量级的"写的少，做的多"的JavaScript库。
- jQuery库包含以下功能：
  - HTML 元素选取
  - HTML 元素操作
  - CSS 操作
  - HTML 事件函数
  - JavaScript 特效和动画
  - HTML DOM 遍历和修改
  - AJAX
  - Utilities

### $2. jQuery版本 

- [1.x](https://link.jianshu.com?t=https%3A%2F%2Fcode.jquery.com%2F)：兼容ie678，但相对其它版本文件较大，官方只做BUG维护，功能不再新增，最终版本：1.12.4 (2016年5月20日).
- [2.x](https://link.jianshu.com?t=https%3A%2F%2Fcode.jquery.com%2F)：不兼容ie678，相对1.x文件较小，官方只做BUG维护，功能不再新增，最终版本：2.2.4 (2016年5月20日)
- [3.x](https://link.jianshu.com?t=https%3A%2F%2Fcode.jquery.com%2F)：不兼容ie678，只支持最新的浏览器，很多老的jQuery插件不支持这个版本，相对1.x文件较小，提供不包含Ajax/动画API版本。

### $3. jQuery基础语法

-  jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作。
- 基础语法： **$(selector).action()**
  - 美元符号定义 jQuery；
  - 选择符（selector）"查询"和"查找" HTML 元素；
  - jQuery 的 action() 执行对元素的操作；

- 实例:
  - **$(this).hide()** - 隐藏当前元素；
  - **$("p").hide()** - 隐藏所有 <p> 元素；
  - **$("p.test").hide()** - 隐藏所有 class="test" 的 <p> 元素；
  - **$("#test").hide()** - 隐藏 id="test" 的元素；

### $4. jQuery入口函数

-  jQuery 函数位于一个 document ready 函数中：

  ```
  $(document).ready(function(){
   
     // jQuery 代码...
   
  });
  
  //或者简写成：
  $(function(){
   
     // jQuery 代码...
   
  });
  ```

-  jQuery 函数在 html 所有标签(DOM)都加载之后，就会去执行，不会等待图片加载。JavaScript 的 window.onload 事件是等到所有标签(DOM)，以及外部图片之类的文件加载完后，才会执行。

- 原生JS的入口函数只能执行一次，执行多次则后写的覆盖之前的。jQuert入口函数可执行多次不覆盖。

### $5. jQuery冲突问题

- 如果<head>标签内又同时引入了其他含有jquery函数的js文件，会发生`$ `符号冲突问题，即后引入的可能显示不了。解决办法：

  - 调换引用顺序

  - 释放`$ `符号的使用权：

    ```
    jQuery.noConflict();
    //后引用的全文不要用 $ 符号，用 jQuery代替
    
    //再或者自定义，用自定义变量代替 $ 符号
    var aaa = jQuery.noConflict();
    aaa(function (){
     //jQuery代码....
    })
    ```

### $6. jQuery核心函数

**$()  就代表调用jQuery的核心函数**

（1）接收一个函数，即为入口函数；

（2）接收一个字符串
	（2.1）接收一个字符串选择器 , 返回的是jQuery对象，对象中保存了找到的DOM元素；

​	（2.2）接收一个字符串代码片段, 返回的是jQuery对象，对象中保存了创建的DOM元素

```
var $box1 = $('.box1');
$p = $('<p>我是 p 标签</p>');
$box1.append($p);
```

（3）接收一个DOM元素， 则会将其包装成jQuery对象并返回

```
var span =  document.getElementsByTagName('span')[0];
var $span = $(span);
console.log("$span",$span);
```

#### 【注】jQuery对象：jQuery对象就是一个伪数组：

​	有0到length-1的属性（下标），并且有length属性

### $7. 静态方法和实例方法

（1）静态方法：直接用类添加；调用则直接通过类名调用；

```
function Aclass(){
}
Aclass.staticMethod = function (){
  //这是添加静态方法
}
Aclass.staticMethod(); //调用静态方法
```

（2）实例方法：**用类的原型来添加**；需要创建实例（对象），通过类的实例调用

```
Aclass.prototype.instanceMethod = function (){
  //这是添加实例方法
}
var a = new Aclass(); 
a.instanceMethod(); //调用实例方法
```

### $7. jQuery静态方法

（1）==$.each()方法==

- 原生的JS中的`forEach`方法只能遍历数组，不能遍历伪数组！

  ```
  [1,3,5,7,9].forEach(function (value,index){
  	console.log(index,value);
  })
  ```

- jQuery 的each方法同时可以遍历伪数组！但注意：

  - 第1个参数：要遍历的数组/伪数组  {0:1 , 1:3, 2:5, 3:7, 4:9}  ；
  - 第2个参数：**回调函数function，其参数第一位为索引，第二位是遍历的值！**

  ```
  $.each([1,3,5,7,9], function (index,value){
  	console.log(index,value);
  })
  ```

（2）==$.map()方法==

- 原生的JS中的`map`方法只能遍历数组，不能遍历伪数组！

- jQuery 的`map`方法同时可以遍历伪数组！但注意：

  - 第1个参数：要遍历的数组/伪数组 {0:1 , 1:3, 2:5, 3:7, 4:9}  ；
  - 第2个参数：**回调函数function，其参数第一位是遍历的值，第二位为索引！**

  ```
  $.map([1,3,5,7,9], function (value,index){
  	console.log(index,value);
  })
  ```

- $.each() 默认返回值：遍历谁就返回谁；不支持在回调函数中处理元素；

- $.map() 默认返回值：空数组；  可以在回调函数中用return处理元素，最后返回一个新数组！

（3）==$.trim()方法==

- 作用：跟原生JS的一样，去除字符串前后的空格；不会改变原始字符串。

  ```
  //原生JS中的trim() 方法（IE9+）
  var str = "       aaaaaa        ";
  alert(str.trim());
  
  //$.trim()
  alert($.trim(str));
  ```

（3）==$.isWindow()方法==

- 作用：用于判断指定参数是否是一个window窗口对象。返回布尔值；

  ```
  console.log($.isWindow(window));  //true
  ```

（4）==$.isArray()方法==

- 作用： 判断指定参数是否是一个真数组，返回布尔值；伪数组都是false

  ```
  console.log($.isArray([]));  //true
  ```

（5）==$.isFunction()方法==

- 作用： 判断指定参数是否是一个函数，返回布尔值。

  ```
  console.log($.isFunction(jQuery));  //true
  ```

  **jQuery 框架本质上是一个函数**

（6）==$.holdReady()方法==

- 作用： 暂停入口函数ready执行；

-  jQuery 函数在 html 所有标签(DOM)都加载之后，就会立即执行。有时需求，等待某图片/插件加载完再运行。因此需要暂停ready执行。

  ```
  $.holdReady(true);  // 暂停ready
  $(document).ready(function (){
  	alert('ready')
  })
  ```

- 重新恢复ready：    **$.holdReady(false);** 

------

### $8. jQuery选择器

（1）==$.("#id")==   

- #id选择器 ： 根据给定的ID**匹配一个元素**。

- 如果选择器中包含特殊字符，可以用**两个斜杠**转义。

```
<span id="foo:bar"></span>
<span id="foo[bar]"></span>
<span id="foo.bar"></span>
$.("#foo\\:bar");
$.("#foo\\[bar\\]");
$.("#foo\\.bar");
```

（2）==$.(".class")==   

- .class选择器 ： 根据给定的类**匹配一个或多个元素**。

- 一个元素可以有多个类，只要有一个符合就能被匹配到。匹配到的组成一个类数组对象。

（3）==$.("elementTag")==   

- element选择器 ： 根据给定的元素名**匹配所有该标签元素**

- 一个用于搜索的元素。指向 DOM 节点的标签名。匹配到的组成一个类数组对象。

```
$("div"); //查找所有 DIV 元素。
```

（4）==$.("*")==   

- *选择器 ： 匹配所有元素。匹配到的组成一个类数组对象。

（5）更多实例：

| 语法                     | 描述                                                    |
| ------------------------ | :------------------------------------------------------ |
| $("p.intro")             | 选取 class 为 intro 的 <p> 元素                         |
| $("p:first")             | 选取第一个 <p> 元素                                     |
| $("ul li:first")         | 选取第一个 <ul> 元素的第一个 <li> 元素                  |
| $("ul li:first-child")   | 选取每个 <ul> 元素的第一个 <li> 元素                    |
| $("[href]")              | 选取带有 href 属性的元素                                |
| $("a[target='_blank']")  | 选取所有 target 属性值等于 "_blank" 的 <a> 元素         |
| $("a[target!='_blank']") | 选取所有 target 属性值不等于 "_blank" 的 <a> 元素       |
| $(":button")             | 选取所有 type="button" 的 <input> 元素 和 <button> 元素 |
| $("tr:even")             | 选取偶数位置的 <tr> 元素                                |
| $("tr:odd")              | 选取奇数位置的 <tr> 元素                                |

```
$('input[name=first]') // 选择name属性等于first的input元素
$('#ul1 li span') //选择id为为ul1元素下的所有li下的span元素
$('#ul1 li:first') //选择id为ul1元素下的第1个li
$('#ul1 li:odd') //选择id为ul1元素下的li的奇数行
$('#ul1 li:eq(2)') //选择id为ul1元素下的第3个li
$('#ul1 li:gt(2)') // 选择id为ul1元素下的前3个之后的所有li
$('#myForm :input') // 选择id为myForm的表单中的input元素
```

- ==内容过滤选择器==：

  ```
  $("div:contains('John')");  //查找所有文本内容有 "John" 的 div 元素；
  
  $("div:empty"); // 查找所有不包含任何子元素或者文本的 空div元素；
  
  $("div:parent"); //查找所有含有任意子元素或者文本的 div元素 ；
  
  $("div:has(p)"); //查找所有含有 p 元素的的  div元素 ；
  ```


### $9. jQuery属性相关方法

- ==$("DOMelement").attr (name|pro|key,   val|fn)==

  - 只输入一个参数：表示获取属性节点的值

    ```
    $("img").attr("src");  //返回文档中所有图像的src属性值。
    ```

  - 输入两个参数：表示设置属性节点的值

    ```
    $("img").attr("src","test.jpg"); //为所有图像设置src属性。
    ```

  - 【注意】

    - 如果是获取：无论匹配到多少元素，只会返回第一个元素指定的属性节点值
    - 如果是设置：匹配到多少个元素，就设置多少个元素。若设置的属性节点（参数1）不存在，系统自动新增。
    - 官方推荐：操作DOM属性节点时，具有true和false两个属性的属性节点，比如**checked, selected, 或 disabled状态**，请使用`.prop()`方法。

- ==$("DOMelement"). removeAttr(name)==

  - 删除所有匹配到的元素的指定属性节点；

    ```
    $("img").removeAttr("src");  //将文档中图像的src属性删除
    ```

  - 删除多个属性，属性中间必须用空格隔开。removeAttr(name1  name2)

- ==$("DOMelement"). prop(name|pro|key,val|fn)==

  - 用法和 `attr() `一样
  - 适合设置元素（如复选框）**checked, selected, 或 disabled状态**

  ```
  //禁用和选中所有页面上的复选框。
  $("input[type='checkbox']").prop("disabled", false);
  $("input[type='checkbox']").prop("checked", true);
  ```

- ==$("DOMelement"). removeProp(name)==

  - 用来删除由`.prop()`方法设置的属性集

- **jQuery CSS类操作相关方法**

  - 给元素添加类： ==**$('div').addClass(class1  class2 );**==

  - 给元素删除类：==**$('div').removeClass(class1  class2  );**==
  - 切换类，存在类就删除它，不存在就添加：==**$('div').toggleClass(class1  class2 );**==

- **添加和获取 HTML代码/文本/值**

  - **html(val|fn)**：取得第一个匹配元素的html内容，包括标签。跟原生JS的innerHTML一样！

    ```
    $("p").html("Hello <b>world</b>!"); //设置
    console.log($("p").html()); //获取
    ```

  - **text(val|fn)**：取得所有匹配元素的文本内容。跟原生JS的innerText一样！

    ```
    $("p").text("Hello world!"); //设置
    console.log($("p").text()); //获取
    ```

  - **val(val|fn)**：获得匹配元素的当前值。

    ```
    $("input").val("hello world!");//设置文本框的值
    console.log($("input").val()); //获取文本框的值
    ```

    如果多选，将返回一个数组，其包含所选的值。

### $10. jQuery 中CSS相关方法

- 设置css样式：

  - 逐个设置：

  ```
  $("div").css("width","100px");
  $("div").css("height","200px");
  $("div").css("color","red");
  ```

  - 链式设置：大于三步，建议分开

  ```
  $("div").css("width","100px").css("height","200px").css("color","red");
  ```

  - **批量设置：推荐**

    ```
    $("div").css({
    	"width":"100px",
    	"height":"200px",
    	"color":"red"
    });
    ```

  - 获取CSS样式值

    ```
    console.log($("div").css("width"));
    ```

- 设置尺寸：

  - **width([val|fn])**：设定CSS中 'width' 的值，可以是字符串或者数字，还可以是一个函数，返回要设置的数值。

    ```
    $("div").width(20);  //设置
    $("div").width(); //返回的是width数值。
    ```

  - **height([val|fn])**

  - **innerHeight()**

  - **innerWidth()**：获取第一个匹配元素内部区域宽度（包括补白、不包括边框）。

  - **outerHeight([soptions])**

  - **outerWidth([options])**：获取第一个匹配元素外部宽度（默认包括补白和边框）。option设置为 true 时，计算边距在内。

- 设置位置

  - **offset([coordinates])**：设置/获取 元素距离**窗口**的偏移距离

    ```
    $("div").offset({left:50,top:50});  //设置
    $("div").offset().left    //获取
    ```

  - **position()**：只能获取 元素距离**最近定位元素**的偏移距离

    ```
    $("div").position().left    //获取
    $("div").css({left:"10px"});  //用css来设置
    ```

  - **scrollTop([val])**：获取/设置 滚动条的偏移位

    ```
    $("div").scrollTop()    //获取
    $("div").scrollTop(300);  //设置
    ```

    对于获取/设置  网页的滚动条偏移位，要考虑兼容ie

    ```
    console.log($("body").scrollTop()+$("html").scrollTop());  //获取
    $("html,body").scrollTop(300);  //设置
    ```

  - **scrollLeft([val])**

    

### $11. jQuery 中事件相关方法

#### 1.jQuery 中两种绑定事件的方式：

##### （1）.eventName(fn)

​	特点：编码效率略高；部分事件jQuery没有实现，不能添加；添加多个相同或不同类型事件，不会覆盖

```
$('button').click(function (){ //鼠标点击元素时会发生 
	alert("button click 1");
})
$('button').mousedown(function (){//仅需鼠标按下，而不需要松开即可发生。
	alert("button mousedown");
})
$('button').mouseenter(function (){ //鼠标指针穿过元素时会发生 
	alert("button mouseenter");
})
$('button').mouseleave(function (){ //鼠标指针离开元素时会发生 
	alert("button mouseleave");
})
```

##### （2）.on(eventName, fn)

​	特点：编码效率略低；但所有JS事件都可以实现；添加多个相同或不同类型事件，不会覆盖

```
$("p").on("click", function(){
	alert( $(this).text() );
});
```

#### 2.jQuery 中解绑事件的方式：**.off( )**

```
function test1(){
	alert("button click 1");
}
function test2(){
	alert("button click 2");
}

$('button').click(test1);
$('button').click(test2);
```

（1）不带参数：移除该元素所有事件；`$('button').off(); `

（2）带1个参数：移除该元素指定类型事件；`$('button').off("click"); `

（3）带2个参数：移除该元素指定类型的指定事件；`$('button').off("click",test1); `

#### 3.jQuery 中事件冒泡和默认行为：

（1）事件冒泡：触发子元素事件，父元素、父父元素等的相同类型事件也触发；

```
$('.son').click(function (){
	alert("son");
})
$('.father').click(function (){
	alert("father");
})
```

（2）取消事件冒泡方法：**子元素内设置：**

```
//方法1
$('.son').click(function (){
	alert("son");
	return false; 
})
//方法2
$('.son').click(function (event){
	alert("son");
	event.stopPropagation(); 
})
```

（3）默认行为：<a>标签和<form>表单提交，都会产生自动跳转，这些都是默认行为

阻止默认行为：

```
//方法1
$('a').click(function (){
	alert("a");
	return false; 
})
//方法2
$('a').click(function (event){
	alert("a");
	event.preventDefault(); 
})
```

#### 4.jQuery 中事件自动触发：

##### （1）.trigger(type,[data])

```
$('.son').click(function (){
	alert("son");
})
$('.son').trigger("click"); //不用点击，自动触发事件，有冒泡，也自动触发

//<a href="http://i.co"><span>注册</span></a>
$("span']").click(function (){
	alert("span");
})
$("span").trigger("click"); //自动a标签默认行为，注意没有span标签则不会自动触发

$("input[type='submit']").click(function (){
	alert("submit");
})
$("input[type='submit']").trigger("click"); //自动触发事件，会跳转页面，即默认行为也触发
```

==特点： 会触发事件冒泡；会触发超链接、表单默认行为==

##### （2）.triggerHandler(type, [data])

==特点：不会触发事件冒泡；不会触发超链接、表单默认行为==

##### （3）trigger另外用处：自定义事件

自定义事件必须用 on  来绑定 ， 用  trigger 来触发

```
$('.son').on("myClick",function (){
	alert("son");
})
$('.son').trigger("myClick"); 
```

##### （4）trigger另外用处：事件命名空间

多人协同开发项目，可能给一个元素绑定了重复事件，为了区分，才有了事件命名空间:

必须用 on  来绑定 ， 用  trigger 来触发

```
$('.son').on("click.zhanshan",function (){
	alert("1");
})
$('.son').on("click.lisi",function (){
	alert("2");
})
$('.father').on("click.zhanshan",function (){
	alert("3");
})
$('.father').on("click.lisi",function (){
	alert("4");
})
$('.son').trigger("click.lisi"); //结果 ： 2  4
$('.son').trigger("click"); //结果 ： 1  2  3  4
```



#### 5.jQuery 中事件委托：

==事件委托：对于动态显示的元素（新增的/触发事件才出来的）无法一开始就对其监听，只能委托其父级/祖父级元素完成事件绑定。用到了  **.delegate( )**  方法==

jQuery中，如果通过核心函数找到的元素不止一个，添加事件时，所有该元素都会被添加一个事件。

```
// 点击按钮，新增一个li
$("button").click(function (){
	$("ul").append("<li>我是新增的li</li>");
})
// 所有原生的li绑定事件，触发点击就打印内容
$("ul>li").click(function (){
	console.log($(this).html());
})
```

注意：上述代码，对于新增的<li>，并不会有点击事件

要想新增的和原来的<li>都绑定点击事件，则需要**事件委托**：在<ul>上绑定：

```
$("ul").delegate("li","click",function (){
	console.log($(this).html());
})
```



#### 5.jQuery 中鼠标移入/移出：

- mouseover / mouseout  事件，从父元素移入/移出子元素 也会触发 父元素的事件。

- mouseenter / mouseleave  事件，从父元素移入/移出子元素 **不会**触发 父元素的事件。**推荐使用这个**！

- hover  事件：同时监听鼠标 移入/移出

  ```
  $(".father").hover({
  	function (){console.log("移入")},
  	function (){console.log("移出")}
  })
  ```

  

### $12. jQuery 中动画效果

#### （1）基本效果： .show()    .hide()    .toggle()

- 三者参数：
  - **speed**:  三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
  - **fn**:  在动画完成时执行的函数，每个元素执行一次。
- 动画显示；动画隐藏；切换显示（有就隐藏，没有就显示）

```
$("div").show(1000,function (){
	alert("显示完毕!");
})
$("div").hide(1000,function (){
	alert("隐藏完毕!");
})
$("div").toggle(1000,function (){
	alert("切换完毕!");
})
```

#### （2）滑动效果： .slideDown()   .slideUp()    .slideToggle()

- 参数同上
- 作用：向下滑动显示动画； 向上滑动隐藏动画； 滑动切换动画

#### （4）注意：在jQuery中，触发一个事件就执行动画，为了避免拥堵，建议在执行动画前先调用  .stop() 方法，然后再执行动画。







