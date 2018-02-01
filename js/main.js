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

   $(".header a").on("click", function(evt){
      evt.preventDefault();

      var $navId = $(this).attr("id");
      var $section;

      switch($navId){
        case "homeNav":
          $section = "#section-1";
          goToSection($section);
          break;

        case "aboutNav":
        $section = "#section-2";
        goToSection($section);
          break;

        case "serviceNav":
        $section = "#section-3";
        goToSection($section);
          break;

        case "contactNav":
        $section = "#section-4";
        goToSection($section);
          break;

        default:
          alert("nothing here");
      }
   });

   function goToSection(section){
      var sectionLoc = $(section).offset().top;
      var headerHeight = $(".header").css("height").slice(0,-2);
      $("html, body").animate({scrollTop: (sectionLoc - headerHeight)}, 1200);
   }

});