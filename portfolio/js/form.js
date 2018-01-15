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
  if()
  $('#contact [name=myname]').val();
 });

 // .each(function(){
 //  // すべてのinput・テキストエリアで空白がなかったら実行したい
 //  if($(this).val() !== ''){
 //   $('input.submit').removeClass('off');
 //   $('input.submit').removeAttr('disabled');
 //  }
 // });
});
