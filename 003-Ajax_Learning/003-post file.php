<?php
echo "hello php";
echo "<br>";

//$_POST，$_FILES 均为php的超全局变量

print_r($_POST);  // 打印：Array ( )
echo "<br>";

print_r($_FILES); // 打印出数组，显示文件详细信息
echo "<br>";

// 1.获取上传文件对应的字典
$fileInfo = $_FILES["uploadFile"];
//print_r($fileInfo);
// 2.获取上传文件的名称
$fileName = $fileInfo["name"];
// 3.获取上传文件保存的临时路径
$filePath = $fileInfo["tmp_name"];

echo $fileName;
echo "<br>";
echo $filePath;

// 4.将上传的文件从临时文件夹移动到指定文件夹： 字符串拼接用 .  而不是 + 
move_uploaded_file($filePath, "./files/".$fileName);

?>