$(document).ready(function() {

  // preloader
  $(window).load(function(){
    setTimeout(function(){
      $('#preloader').fadeOut(500,function(){});
    }, 4000);
	});
  
  // bootstrap tooltip option
  $('[data-toggle="tooltip"]').tooltip();

  // Returns height of browser viewport
  $(window).resize(function() {
    $('.windowscreen').css('height', window.innerHeight+'px');
  });

  //scrollTo
  $('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {gap:{y:-60}});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

	// skrollr
  var g=skrollr.init();
  // disable mobile skrollr
  if (g.isMobile()) {
    g.destroy();
  }
  $(window).trigger("resize"),
  g.refresh();

  // Headroom init
	var elem = document.querySelector(".headroom");
	var headroom = new Headroom(elem, {
		"offset" : 100,
		"tolerance" : 5
	});
	headroom.init();

  (function() {
    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
      new SelectFx(el);
    });
  })();

});
