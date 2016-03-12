setInterval(function(){
	var d=new Date();
	var h=d.getHours();
	var m=d.getMinutes();
	var s=d.getSeconds();
document.getElementById("clock").textContent=[h,m,s].map(function(a){return a<10?'0'+a:a}).join(':');

document.getElementById("clock").style.background= 'hsla('+(s*6)+','+(m*10/6)+'%,'+(h*25/6)+'%,0)';}, 0);


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 0) {
        $(".main-header").addClass("change-color");
    } else {
        $(".main-header").removeClass("change-color");
    }
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
