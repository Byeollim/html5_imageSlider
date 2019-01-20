$(document).ready(function(){
    $("#slider ul li").eq(1).hide();
    $("#slider ul li").eq(2).hide();

    // $("#slider ul li:nth-child(2)").hide();
    // $("#slider ul li:nth-child(3)").hide();

    setInterval(function(){
        $("#slider ul li:first-of-type").fadeOut(2000).next().fadeIn(1000).end().appendTo($("#slider ul"));
        // $("#slider ul li:first-of-type").fadeOut(2000);
        // $("#slider ul li:nth-child(2)").fadeIn(1000);
        // $("#slider ul").append($("#slider ul li:first-of-type"));
        
    }, 3000);
    
    

});