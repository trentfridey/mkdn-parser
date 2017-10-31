var $ = require('jquery');
var marked = require('marked');

$(document).ready(function(){
  $(".input").on('change',function(){
    console.log($('.input').val());
  })
  console.log(marked("**This** is some _text_"))
})