$(document).ready(function(){
    // $("#slider ul li").eq(1).hide();
    // $("#slider ul li").eq(2).hide();

    $("#slider ul li:nth-child(2)").hide();
    $("#slider ul li:nth-child(3)").hide();

    setInterval(function(){

        $("#slider ul li:first-of-type").fadeOut();
        $("#slider ul li:nth-child(2)").fadeIn();
        $("#slider ul").append($("#slider ul li:first-of-type"));
        
    }, 2000);
    
    

});