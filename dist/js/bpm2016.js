/*!
 * BPM2016 v1.0.0 (http://zafree.github.io/bpm2016)
 * Copyright 2015-2016 Zafree
 */

(function() {

  var init, isMobile, setupExamples, setupHero, _Drop;

  _Drop = Drop.createContext({
    classPrefix: 'drop'
  });

  isMobile = $(window).width() < 567;

  init = function() {
    return setupExamples();
  };

  setupExamples = function() {
    return $('.awesome-card').each(function() {
      var $awesome, $target, content, drop, openOn, theme;
      $awesome = $(this);
      theme = $awesome.data('theme');
      openOn = $awesome.data('open-on') || 'click';
      $target = $awesome.find('.drop-target');
      $target.addClass(theme);
      content = $awesome.find('.drop-content').html();
      return drop = new _Drop({
        target: $target[0],
        classes: theme,
        position: 'bottom center',
        constrainToWindow: true,
        constrainToScrollParent: false,
        openOn: openOn,
        content: content
      });
    });
  };

  init();

}).call(this);
;$(document).ready(function() {

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
