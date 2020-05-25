/*

封装Ajax 方法

 */

function changeObjToStr(dataObj){
	/*参数dataObj:
    {
        "userName":"Alan",
        "userPwd":"123456",
        "time":"21342343343"
    }
    */
    dataObj = dataObj || {}; // 如果没有传参, 为了添加随机因子,必须自己创建一个对象
    dataObj.time = new Date().getTime();
    let res = [];
    for(let key in dataObj){
        // 在URL中是不可以出现中文的, 如果出现了中文需要转码。例如百度搜索，中文关键字其实都先转码再上传请求。
        // 可以调用 encodeURIComponent() 方法来转码；
        // URL中只可以出现字母/数字/下划线/ASCII码；
        res.push(encodeURIComponent(key)+"="+encodeURIComponent(dataObj[key])); // [userName=Alan, userPwd=123456,time=1231322123];
    }
    return res.join("&"); // userName=Alan&userPwd=123456&time=1231322123

}



function ajax(option){
	var xmlhttp,timer;


	// 0.将对象转换为字符串
    const str = changeObjToStr(option.data); // 格式成为：key=value&key=value;
	
	// 1.创建一个异步对象。考虑兼容低版本ie问题：
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	// 2.设置请求方式和请求地址
    /*xmlhttp.open（）参数：
        method：请求的类型；GET 或 POST
        url：文件在服务器上的位置
        async：true（异步）或 false（同步）

        【兼容问题】
        在IE浏览器中, 如果通过Ajax发送GET请求, 那么IE浏览器认为同一个URL只有一个结果。
        如果请求得url对应文件内容改变，后续再请求响应数据还是原来的。
        【解决办法】
		请求的URL每次不同：url尾部加上Math.random()， 或者new Date().getTime()
        
    */
   	if (option.type.toLowerCase() === "get") {
   		xmlhttp.open(option.type.toUpperCase(), option.url+"?"+str, true);
		// 3.发送请求
		xmlhttp.send();

   	}else{
   		xmlhttp.open(option.type.toUpperCase(), option.url, true);

		// 注意点: 以下代码必须放到open和send之间
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		// 3.发送请求
		xmlhttp.send(str);
   	}
	

	// 4.监听状态的变化
	xmlhttp.onreadystatechange=function (){
		/*xmlhttp.readyState: 
            0: 请求未初始化
            1: 服务器连接已建立
            2: 请求已接收
            3: 请求处理中
            4: 请求已完成，且响应已就绪
        */
        if(xmlhttp.readyState === 4){
        	clearInterval(timer);

            // 判断是否请求成功: xmlhttp.status状态码
            if(xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304){
                // 5.处理返回的结果
                // console.log("接收到服务器返回的数据");
               	// console.log(xmlhttp.responseText);
               	option.success(xmlhttp);
            }else{
                // console.log("没有接收到服务器返回的数据");
                option.error(xmlhttp);
            }

        }
	}
 	

 	// 关于请求超时问题： 判断外界是否传入了超时时间
	if(option.timeout){
        timer = setInterval(function () {
            console.log("请求超时，中断请求");
            xmlhttp.abort(); //中断请求
            clearInterval(timer);
        }, option.timeout);
    }


}
