// function FormModel(x){
//  this.val = '';
//  this.obs = {
//   valid: [],
//   invalid: []
//  };
// }
//
// FormModel.prototype.on = function(event, func){
//  this.obs[event].push(func);
// };
// FormModel.prototype.trigger = function(event){
//  $.each(this.obs[event], function(){
//   this();
//  });
// };

$(function(){
 $('input, textarea').blur(function(){
  if($(this).val() === ''){
   $(this).parents('dl').addClass('error');
  }else{
   $(this).parents('dl').removeClass('error');
  }
  // submitボタン
  var flg = true;
  var formAry = $('input, textarea').serializeArray();
  for(i=0; i<formAry.length; i++){
   if(formAry[i].value === ''){
    flg = false;
   }
  }
  if(flg === true){
   $('input.submit').removeClass('off');
   $('input.submit').removeAttr('disabled');
  }
 });
});
