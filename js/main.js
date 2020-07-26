const responsive ={
  0:{
    items: 1
  },
  320:{
    items: 1
  },
  550:{
    items: 2
  },
  940:{
    items: 3
  }
}

$(document).ready(function(){

$nav = $(".nav");
$toggleCollapse = $(".toggle-collapse");

/* click event on toggle menu*/
$toggleCollapse.click(function(){
  $nav.toggleClass("collapse");
})


// owl-carousel for blog..
$(".owl-carousel").owlCarousel({
  loop:true,
  autoplay: true,
  autoplayTimeout: 2700,
  dots: false,
  nav: true,
  navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")],
  responsive: responsive
});



// Click to scroll top..
$(".move-up span").click(function(){
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
})


//AOS Instance...
AOS.init();

});
