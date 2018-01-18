$(function(){
 var formArea = $('#contact input, #contact textarea')
 formArea.blur(function(){
  var $val = $(this).val();

  if($val === ''){
   $(this).parents('dl').addClass('error');
  }else if($(this).attr('name') == 'mail' && !$val.match(/^[a-zA-Z0-9]+[-\w\.]@+[a-zA-Z0-9]+[-\w\.]$/)){
   $(this).parents('dl').addClass('error');
  }else{
   $(this).parents('dl').removeClass('error');
  }
  // submitボタン
  var flg = true;
  var formAry = formArea.serializeArray();
  for(i=0; i<formAry.length; i++){
   if(formAry[i].value === ''){
    flg = false;
   }
  }
  if(flg === true){
   $('input.submit').removeClass('off');
   $('input.submit').prop('disabled', false);
  }else{
   $('input.submit').addClass('off');
   $('input.submit').prop('disabled', true);
  }
 });
});
