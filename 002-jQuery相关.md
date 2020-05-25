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

- 如果选择器中包含特殊字符，可以用两个斜杠转义。

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

