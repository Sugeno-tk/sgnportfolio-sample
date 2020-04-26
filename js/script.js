(function($) {
  $(function() {
    $('#nav-toggle').on('click', function() {
      $('body').toggleClass('open');
    });
  });

  $(function() {
    $('#global-nav').on('click', function() {
      $('body').toggleClass('close').removeClass('open').removeClass('close');
    });
  });
})(jQuery);
