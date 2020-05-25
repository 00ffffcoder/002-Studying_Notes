 function addCookie(key, value, day, path, domain) {
    // 1.处理默认保存的路径
    const index = window.location.pathname.lastIndexOf("/")
    const currentPath = window.location.pathname.slice(0, index);
    path = path || currentPath;

    // 2.处理默认保存的domain
    domain = domain || document.domain;

    // 3.处理默认的过期时间
    if(!day){
        document.cookie = key + "=" + value + ";path=" + path + ";domain=" + domain + ";";
    }else{
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key+"="+value+";expires="+date.toGMTString()+";path="+path+";domain="+domain+";";
    }
}

function getCookie(key) {
    // console.log(document.cookie);
    let res = document.cookie.split(";");
    // console.log(res);
    for(let i = 0; i < res.length; i++){
        // console.log(res[i]);
        let temp = res[i].split("=");
        // console.log(temp);
        if(temp[0].trim() === key){
            return temp[1];
        }
    }
}


// 默认情况下只能删除默认路径中保存的cookie, 如果想删除指定路径保存的cookie, 那么必须在删除的时候指定路径才可以
function delCookie(key, path) {
    addCookie(key, getCookie(key), -1, path);
}
// delCookie("name", "/");