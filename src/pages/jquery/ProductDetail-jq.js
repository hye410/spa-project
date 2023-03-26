import $ from 'jquery';

$(function(){
  pageScroll();
  // notice();
})

function pageScroll(){
  $('.detail>h4>ul>li').on('click',function(e){
    const href = $(this).attr('href');
    const scrollHeight = $(href).offset().top;
    $('html,body').animate({scrollTop: scrollHeight},500)
  });
}

// function notice(){
//   $('.ProDetail>figcaption>p>button:first-child').on('click',function(e){
//     alert('장바구니에 물건이 담겼습니다.');
//   })
// }