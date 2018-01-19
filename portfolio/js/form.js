$(function(){
 var formArea = $('#contact input, #contact textarea');
 var $submit = $('input.submit');
 var mailCheck = /^[a-zA-Z0-9]+[-\w\.]@+[a-zA-Z0-9]+[-\w\.]$/;

 formArea.blur(function(){
  var $val = $(this).val();

  if(
   $val === ''
   || ($(this).attr('name') == 'mail' && !$val.match(mailCheck))
  ){
   $(this).parents('dl').addClass('error');
  }else{
   $(this).parents('dl').removeClass('error');
  }

  //submitボタン
  var flg = true;
  var formAry = formArea.serializeArray();
  for(i=0; i<formAry.length; i++){
   if(
    formAry[i].value === ''
    || (formAry[i]['name'] == 'mail' && !formAry[i].value.match(mailCheck))
   ){
    flg = false;
   }
  }

  if(flg === true){
   $submit.removeClass('off');
   $submit.prop('disabled', false);
  }else{
   $submit.addClass('off');
   $submit.prop('disabled', true);
  }
 });
});
