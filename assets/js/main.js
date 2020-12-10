$( document ).ready(function() {
   //-------------js integrations starts here----------------------

    //----01. Loder Js------------------------------
    $(window).on("load", function () {
      $("#loader").fadeOut(1000);
    });
    //----02. sticky Nav  Js------------------------------
    window.onscroll = function () {
      stickyfunction();
    };
    var navbar = document.getElementById("header");
    var terget = document.getElementById("terget");
    var sticky = terget.offsetTop;
    
    function stickyfunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }

    //---03. activation for scroll spy---
    $(".scrollspy").scrollWatchMapTo(".main-nav-ul>li");
    //----03. search popup  Js------------------------------
    $( ".dextop-search-icon" ).click(function() {
      $( ".dextop-search-icon" ).fadeToggle( );
      $( ".destop-search-popup" ).fadeToggle( );
    });
    $('.search-close').click(function(){
      $( ".dextop-search-icon" ).fadeToggle( );
      $( ".destop-search-popup" ).fadeToggle( );
    });
    //----04. activation for home slider(slik)--------------
    $('.homeslide').slick({
        autoplay: true,
        slidesToShow: 1,
        infinite: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        
      });

      //05. counter activation----------------
      $('.counter').counterUp();

      //06. mixiup activation----------------
      var mixerConfig =document.querySelector('.menu-item-container');
      var mixer = mixitup(mixerConfig);
      //----Responsive 01.  manue open---  
      $('.mobile-menue-bar-icon').click(function(){
        $( ".mobile-menue-bar-icon" ).fadeToggle(1000 );
        $( ".main-nav" ).fadeToggle(1000 );
        
      });

      //07.Lightbox----------------
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true,
        'fitImagesInViewport': true,
      });

      //----Responsive 01.  manue close---  
      $('.mobile-menue-close-icon').click(function(){
        $( ".mobile-menue-bar-icon" ).fadeToggle( 1000);
        $( ".main-nav" ).fadeToggle(1000 );
        
      });

       //----Responsive 02. search popup  Js---------------------------
       $('.mobile-search-bag-Toggle').click(function(){
        $( ".dextop-search-icon" ).fadeToggle( );
        $( ".dextop-sopping-bag" ).fadeToggle( );
        $( ".mobile-search-bag-Toggle" ).toggleClass('hide');
      });
//-------------js integrations starts here----------------------
});
