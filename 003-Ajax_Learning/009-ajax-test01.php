<?php
// 注意: 执行结果中有中文, 必须在php文件顶部设置
// header("content-type:text/html; charset=utf-8");

// //如果php中需要返回XML数据，也必须在php文件顶部设置：
// header("content-type:text/xml; charset=utf-8");
// //file_get_contents() 函数是用于将文件的内容读入到一个字符串中的首选方法。
// echo file_get_contents("009-test01-xml.xml");




//如果php中需要返回JSON数据,上面都注释掉：
echo file_get_contents("009-ajax-test01-JSON.txt");


?>