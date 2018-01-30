$(document).ready(function(){

    var $topButton = $(".top-button");

   $($topButton).hide();

   $(window).on("scroll", function(){
       if($(window).scrollTop() > 350){
        $($topButton).show("slow");
       }
       else{
        $($topButton).hide("slow");
       }
   });

   $topButton.on("click", function(){
        $("html, body").animate({scrollTop: 0}, "slow");
   });

});