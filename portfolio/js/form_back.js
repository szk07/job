$(function(){
 var formArea = $('#contact input, #contact textarea');
 var formAry = formArea.serializeArray();
 var $submit = $('input.submit');
 var mailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 formArea.blur(function(){
  //formArea判定
  var $dl = $(this).parents('dl')
  if(
   $(this).val() === ''
   || ($(this).attr('name') == 'mail' && !$(this).val().match(mailCheck))
  ){
   addError($dl);
  }else{
   rmError($dl);
  }
  //submit判定
  var flg = true;
  for(i=0; i<formAry.length; i++){
   if(
    formAry[i].value === ''
    || (formAry[i]['name'] == 'mail' && !formAry[i].value.match(mailCheck))
   ){
    flg = false;
   }
  }
  if(flg === true){
   valid();
  }else{
   invalid();
  }
 });

 //formArea処理
 function addError($dl){
  $dl.addClass('error');
  $dl.find('span').remove();
  $dl.find('dt').append('<span>必須項目です。</span>');
 }
 function rmError($dl){
  $dl.removeClass('error');
  $dl.find('span').remove();
 }
 //submit処理
 function valid(){
  $submit.removeClass('off');
  $submit.prop('disabled', false);
 }
 function invalid(){
  $submit.addClass('off');
  $submit.prop('disabled', true);
 }
});
