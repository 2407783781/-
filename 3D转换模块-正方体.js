function bm(yuan) {
    var m1=yuan.getAttribute("href");
    var run=document.getElementById("bf");
    run.setAttribute("src",m1);
    var t1=yuan.getAttribute("title");
    var text=document.getElementById("text")
    text.childNodes[0].nodeValue=t1;
}
function xh() {
    var xh=document.getElementsByTagName("a");
    for (var i=0;i<3;i++){
        var source=xh[i].getAttribute("href");
        var url=document.getElementsByTagName("audio")[0];
        url.setAttribute("src",source);
        var name=xh[i].getAttribute("title");
        var text=document.getElementById("text")
        text.childNodes[0].nodeValue=name;
        console.log(i);
    }
}