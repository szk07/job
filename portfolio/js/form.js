$(function(){
 var formArea = $('#contact input, #contact textarea');
 var $submit = $('input.submit');
 var mailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 formArea.blur(function(){
  //formArea判定
  var $val = $(this).val();
  var $dl = $(this).parents('dl');
  if(!$val){
   var ms = '必須項目です。';
   inputError($dl, ms);
  }else if($(this).attr('name')=='mail' && !$val.match(mailCheck)){
   var ms = 'アドレスの形式が正しくありません。';
   mailError($dl, ms);
  }else{
   rmError($dl);
  }
  //submit判定
  var formAry = formArea.serializeArray();
  var flg = true;
  for(i=0; i<formAry.length; i++){
   if(!formAry[i].value || (formAry[i]['name']=='mail' && !formAry[i].value.match(mailCheck))){
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
 function inputError($dl, ms){
  $dl.addClass('error');
  $dl.find('span').remove();
  $dl.find('dt').append('<span>'+ms+'</span>').hide().fadeIn(300);
 }
 function mailError($dl, ms){
  $dl.addClass('error');
  $dl.find('span').remove();
  $dl.find('dt').append('<span>'+ms+'</span>').hide().fadeIn(300);
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
