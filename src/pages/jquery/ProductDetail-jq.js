import $ from 'jquery';

$(function(){
  pageScroll();
})

function pageScroll(){
  $('.detail>h4>ul>li').on('click',function(e){
    const href = $(this).attr('href');
    const scrollHeight = $(href).offset().top;
    $('html,body').animate({scrollTop: scrollHeight},500)
  });
}

