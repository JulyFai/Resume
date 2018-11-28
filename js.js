/**
 * Created by yang on 2018/11/21.
 */

function view() {
    return {
        w: document.documentElement.clientWidth || document.body.clientWidth,
        h: document.documentElement.clientHeight || document.body.clientHeight
    };
}
var viewHeight = function () {
    var section = document.getElementsByTagName("section");
    var iheight = view().h;
    section[0].style.height = iheight;
    for (var i = 0; i < section.length; i++) {
        section[i].style.height = iheight + "px";
    }
};
viewHeight();

$(function () {
    $(".navBarUl").children("li:gt(0)").click(function () {
        alert("thanks!")
    })
});


var tagSwitch = function () {
    var next = document.getElementsByClassName("scroll");
    var con = document.getElementsByTagName("section");
    var tag = document.getElementsByTagName("aside")[0].children;
    con[0].style.display = "block";
    tag[0].className = "curA";
    for (var i = 0; i < tag.length; i++) {
        tag[i].index = i;
        tag[i].onclick = function () {
            for (var j = 0; j < tag.length; j++) {
                tag[j].className = "";
                con[j].style.display = "none";
            }
            tag[this.index].className = "curA";
            con[this.index].style.display = "block";
        }
    }
    for (var i = 0; i < next.length; i++) {
        next[i].index = i;
        tag[i].index = i;
        next[i].onclick = function () {
            for (var j = 0; j < next.length; j++) {
                tag[j].className = "";
                con[j].style.display = "none";
            }
            tag[this.index + 1].className = "curA";
            con[this.index + 1].style.display = "block";
        }
    }
};
tagSwitch();

//canvas
function my$(obj) {
    return document.getElementById(obj);
}

var canvasHtml5 = my$("html5").getContext("2d");
var canvasCss3 = my$("css3").getContext("2d");
var canvasJs = my$("js").getContext("2d");
var canvasJq = my$("jq").getContext("2d");
var canWidth = 160;
var radius = 70;
var canHtml5 = function () {
    var deg = 0;
    var html5T = function (deg) {
        var r = deg * Math.PI / 180;
        canvasHtml5.clearRect(0, 0, canWidth, canWidth);//在给定矩形内清空一个矩形
        canvasHtml5.beginPath();//开始一条路径，或重置当前的路径
        canvasHtml5.strokeStyle = "#F1652A";//颜色
        canvasHtml5.lineWidth = 10;//线宽
        canvasHtml5.arc(canWidth / 2, canWidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //画圆
        canvasHtml5.stroke();
    };
    var timeId = setInterval(function () {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            html5T(deg);
            if (deg > 252) {
                clearInterval(timeId);
            }
        }
    }, 20);
};
var canCss3 = function () {
    var deg = 0;
    var css3Go = function (deg) {
        var r = deg * Math.PI / 180;
        canvasCss3.clearRect(0, 0, canWidth, canWidth);//在给定矩形内清空一个矩形
        canvasCss3.beginPath();//开始一条路径，或重置当前的路径
        canvasCss3.strokeStyle = "#3955F2";//颜色
        canvasCss3.lineWidth = 10;//线宽
        canvasCss3.arc(canWidth / 2, canWidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //画圆
        canvasCss3.stroke();
    };
    var timeId = setInterval(function () {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            css3Go(deg);
            if (deg > 252) {
                clearInterval(timeId);
            }
        }
    }, 20);
};
var canJs = function () {
    var deg = 0;
    var jsGo = function (deg) {
        var r = deg * Math.PI / 180;
        canvasJs.clearRect(0, 0, canWidth, canWidth);//在给定矩形内清空一个矩形
        canvasJs.beginPath();//开始一条路径，或重置当前的路径
        canvasJs.strokeStyle = "#77F215";//颜色
        canvasJs.lineWidth = 10;//线宽
        canvasJs.arc(canWidth / 2, canWidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //画圆
        canvasJs.stroke();
    };
    var timeId = setInterval(function () {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            jsGo(deg);
            if (deg > 216) {
                clearInterval(timeId);
            }
        }
    }, 20);
};
var canJq = function () {
    var deg = 0;
    var jqGo = function (deg) {
        var r = deg * Math.PI / 180;
        canvasJq.clearRect(0, 0, canWidth, canWidth);//在给定矩形内清空一个矩形
        canvasJq.beginPath();//开始一条路径，或重置当前的路径
        canvasJq.strokeStyle = "#C700F2";//颜色
        canvasJq.lineWidth = 10;//线宽
        canvasJq.arc(canWidth / 2, canWidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //画圆
        canvasJq.stroke();
    };
    var timeId = setInterval(function () {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            jqGo(deg);
            if (deg > 252) {
                clearInterval(timeId);
            }
        }
    }, 20);
};
canHtml5();
canCss3();
canJs();
canJq();


//滚动条

var scrollFunc = function (e) {
    var con = document.getElementsByTagName("section");
    var tag = document.getElementsByTagName("aside")[0].children;

    var direct = 0;
    e = e || window.event;
    if (e.wheelDelta > 0) { //当滑轮向上滚动时
        for (var i = 1; i < tag.length; i++) {
            if (tag[i].className == "curA") {
                tag[i].className = "";
                con[i].style.display = "none";
                tag[i - 1].className = "curA";
                con[i - 1].style.display = "block";
                break;
            }
        }
    }
    if (e.wheelDelta < 0) { //当滑轮向下滚动时

        for (var i = 0; i < tag.length - 1; i++) {
            var n = 0;
            if (tag[i].className == "curA") {
                tag[i].className = "";
                con[i].style.display = "none";
                n = i + 1;
                tag[n].className = "curA";
                con[n].style.display = "block";
                break;
            }
        }

    }
};
// 给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
document.onmousewheel = scrollFunc;