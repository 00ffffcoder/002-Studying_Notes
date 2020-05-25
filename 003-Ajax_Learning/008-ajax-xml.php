<?php
// 注意: 执行结果中有中文, 必须在php文件顶部设置
// header("content-type:text/html; charset=utf-8");

//如果php中需要返回XML数据，也必须在php文件顶部设置：
header("content-type:text/xml; charset=utf-8");

echo file_get_contents("008-xml.xml");
//file_get_contents() 函数是用于将文件的内容读入到一个字符串中的首选方法。







?>