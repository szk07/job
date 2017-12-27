/* HeaderSize */
$(window).on('load resize', function(){
  var wh = $(window).height();
  var wf = ($(window).width()<678) ? 30 : 40;
  $('header').css('height', (wh-wf)+'px');
});
