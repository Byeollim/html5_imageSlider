$(document).ready(function(){
    //마우스 오버(Event)가 되면 Loop를 중단하는 이미지 슬라이더

    $("#slider ul li").eq(1).hide().next().hide();

    var loop;
    
    //Element에서 마우스가 떠났을 때
    function start(){
        loop = setInterval(function(){
            $("#slider ul li:first-of-type").fadeOut(2000).next().fadeIn(1000).end().appendTo("#slider ul");
        }, 3000);
    }

    //Element에 마우스가 들어 왔을 때
    function stop(){
        clearInterval(loop);
    }

    start();
    
    $("#slider ul li").hover(function(){
        stop();
    }, function(){
        start();
    });

});