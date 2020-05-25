<?php
// 注意: 执行结果中有中文, 必须在php文件顶部设置
header("content-type:text/html; charset=utf-8");


// sleep(5); //在此处停留5秒，模拟请求超时用
echo "hello, already get the ajax requset!";
echo "<br>";

if ($_GET){
	// echo $_GET["userName"];
	// echo "<br>";
	// echo $_GET["userPwd"];
	// echo "<br>";
	// echo $_GET["time"];
	// echo "<br>";
	echo "This is the GET response Text!";
	print_r($_GET);
}else if ($_POST) {
	echo "This is the POST response Text!";
	print_r($_POST);
}


?>