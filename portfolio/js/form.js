$('input, textarea').blur(function(){
  $(this).parents('dl').addClass('error');
});
