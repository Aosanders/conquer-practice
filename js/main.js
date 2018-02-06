$(document).ready(function(){

   $(window).on("scroll", navHighlight);

// TOP BUTTON FUNCTIONALITY
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

// NAV BAR PAGE CLICK FUNCTIONALITY

   $(".header a").on("click", function(evt){
      evt.preventDefault();

      $(".header a").filter(".current-nav").removeClass("current-nav");
      $(this).toggleClass("current-nav")

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
      $(window).off("scroll", navHighlight);
      $("html, body").animate({scrollTop: (sectionLoc - headerHeight)}, 1200, function(){$(window).on("scroll", navHighlight)});
   }


// NAV BAR SCROLL FUNCTIONALITY
    function navHighlight(){
      var headerHeight = parseInt($(".header").css("height").slice(0,-2));
      //console.log(headerHeight);
      var windScroll = parseInt($(window).scrollTop());
      //console.log(windScroll);
      var windScroll = (windScroll + headerHeight + 50);
      //console.log(windScroll);
      if(windScroll >= $("#section-1").offset().top && windScroll < $("#section-2").offset().top){
        //console.log($("#section-1").offset().top);
        $(".header a").filter(".current-nav").removeClass("current-nav");
        $("#homeNav").addClass("current-nav");
      }
      else if(windScroll >= $("#section-2").offset().top && windScroll < $("#section-3").offset().top){
       // console.log($("#section-2").offset().top);
        $(".header a").filter(".current-nav").removeClass("current-nav");
        $("#aboutNav").addClass("current-nav");
      }
      else if(windScroll >= $("#section-3").offset().top && windScroll < $("#section-4").offset().top){
        //console.log($("#section-3").offset().top);
        $(".header a").filter(".current-nav").removeClass("current-nav");
        $("#serviceNav").addClass("current-nav");
      }
      else if(windScroll >= $("#section-4").offset().top){
       // console.log($("#section-4").offset().top);
        $(".header a").filter(".current-nav").removeClass("current-nav");
        $("#contactNav").addClass("current-nav");
      }

    }
});