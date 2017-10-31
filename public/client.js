var $ = require('jquery');
var marked = require('marked');

$(document).ready(function(){
  $('.input').keyup(function(){
    marked($('.input').val(), function(err, content){
      $('.output').html(content);
    })
  })
  console.log(marked("**This** is some _text_"))
})