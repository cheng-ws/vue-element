export default {
    setSession: function (name, value, type) {
        if (type) {
            sessionStorage.setItem(name, JSON.stringify(value));
        } else {
            sessionStorage.setItem(name, value);
        }
    },
    getSession: function (name, type) {
        if (type) {
            return JSON.parse(sessionStorage.getItem(name));
        } else {
            return sessionStorage.getItem(name);
        }
    },
    removeSession: function (name) {
        sessionStorage.removeItem(name);
    },
    //格式化输出
    outPut (status = 200, data = {}, msg = '') {
        return {status, data, msg};
    },
    //1.进入全屏
    launchFullscreen: function (element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullScreen();
        }
    },
// launchFullscreen(document.documentElement);
// launchFullscreen(document.getElementById("id")); //某个元素进入全屏
//2.退出全屏
    exitFullscreen: function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    },
//3.全屏事件
// document.addEventListener("fullscreenchange", function (e) {
//     console.log(e);
//     if (document.fullscreenElement) {
//         console.log("进入全屏");
//     } else {
//         console.log("退出全屏");
//     }
// });

};