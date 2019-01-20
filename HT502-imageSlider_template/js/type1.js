$(document).ready(function(){

    var $items = $("#slider ul .item");
    console.log($items);

    var currentIndex = 0;

    //setTimeout(function(){}, 1000) 시간 지연 함수
    //setInterval 시간 주기로 계속 실행 
    setInterval(function(){
        if(currentIndex > 2) {
            currentIndex = 0;
        }
        console.log($items.hasClass("active"));

        $items.removeClass("active");
        $items.eq(currentIndex++).addClass("active");

        console.log(currentIndex);

    }, 2000);

});