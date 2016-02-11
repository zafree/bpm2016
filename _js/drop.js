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
