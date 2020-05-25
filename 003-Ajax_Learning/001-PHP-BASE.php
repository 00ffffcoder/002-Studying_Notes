<?php
// 1.JS中有两种注释, 【php 注释跟其一样】
// 1.1 单行注释：//
// 1.2 多行注释：/**/


// 2.JS中如何定义变量?
//var num = 10;
//-----【php中定义变量】-----：
$num = 10;

// 3.JS中如何打印内容?
//console.log();
// 注意点: 后端编写的代码不能直接运行, 只能放到服务器对应的文件夹下, 通过服务器运行
// 如何通过服务器运行: 通过ip地址找到服务器对应的文件夹, 然后再找到对应的文件运行
//-----【php中打印】-----：
//打印普通类型：  echo $num;
//打印数组、对象：print_r($arr);  print_r($dict);

// 4.JS中如何定义集合
// 4.1数组
// 4.2字典(对象)
//var arr = [1, 3, 5];
// arr[0];
//-----【php中定义数组】-----：
$arr = array(1, 3, 5);
print_r($arr);
echo "<br>";  //换行
echo $arr[1]; //取值并打印

//var dict = {"name":"lnj", "age":"33"};
// dict["name"];
//-----【php中定义对象】-----：
$dict = array("name"=>"alan", "age"=>"17");
print_r($dict);
echo  "<br>";  //换行
echo $dict["name"];  //取值并打印

// 5.JS中的分支循环语句
// if/switch/三目/for/while
$age = 16;
if($age >= 18){
    echo "成年人";
}else{
    echo "未成年人";
}

//三元运算
$res = ($age >= 18) ? "成年人" : "未成年人";
echo $res;

//switch
switch ($age){
    case -1:
        echo "非人类";
        break;
    case 18:
        echo "成年人";
        break;
    default:
        echo "未成年人";
        break;
}

//for
$arr = array(1, 3, 5);
for($i = 0; $i < count($arr); $i++){
     echo $arr[$i];
     echo "<br>";
}

//while
$index = 0;
while ($index < count($arr)){
    echo $arr[$index];
    echo "<br>";
    $index++;
}



?>