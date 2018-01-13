$(function(){
  $('input, textarea').blur(function(){
    if($(this).val() === ''){
      $(this).parents('dl').addClass('error');
    }
  });
});
