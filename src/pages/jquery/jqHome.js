import $ from 'jquery';

$(function(){
  timer();
  setInterval(timer,8000);
  swiper();
  btn();
  fade();
  // swiper2();
  // setInterval(swiper2,3000);
})

function swiper(){
  const liWidth = $('#box01>ul>li').width();

  $('#box01>ul>li:last').prependTo('#box01>ul');
  $('#box01>ul').css('margin-left','-'+liWidth+'px');

  $('#box01>p.swiper-button-prev').on('click',function(e){
    $('#box01>ul').animate({marginLeft:'-='+liWidth+'px'},
    function(){
      $('#box01>ul').css('margin-left','-'+liWidth+'px');
      $('#box01>ul>li:first').appendTo('#box01>ul');
    })
  });

  $('#box01>p.swiper-button-next').on('click',function(e){
    $('#box01>ul').animate({marginLeft:'+='+liWidth+'px'},function(){
      $('#box01>ul>li:last').prependTo('#box01>ul');
      $('#box01>ul').css('margin-left','-'+liWidth+'px');
    })
  })
};

function timer(){
  const liWidth = $('#box01>ul>li').width();
    $('#box01>ul').animate({marginLeft:'+='+liWidth+'px'},function(){
      $('#box01>ul>li:last').prependTo('#box01>ul');
      $('#box01>ul').css('margin-left','-'+liWidth+'px');
  });
};

function btn(){
  const liHeihgt = $('#box01>ul>li').height()/2;
  $('#box01>ul').on('mouseleave',function(){
    $('.swiper-button-prev').css('display','none');
    $('.swiper-button-next').css('display','none');
  });

    $('#box01>ul').on('mouseenter',function(){
      $('.swiper-button-prev').css('display','block');
      $('.swiper-button-next').css('display','block');
    });

    $('.swiper-button-prev').css('top',liHeihgt+'px');
    $('.swiper-button-next').css('top',liHeihgt+'px');
};

function fade(){
  $('#box02>ul>li').on('mouseenter',function(){
    $('.ff').animate({display:'block'})
  });
  $('#box02>ul>li').on('mouseleave',function(){
    $('.ff').animate({display:'none'})
  })
};

// function swiper2(){
//   const ulWidth = $('div.swiper2 ul').width();
//   $('div.swiper2 ul:last').prependTo('.swiper2');
//   $('div.swiper2').css('margin-left','-'+ulWidth+'px');
//   $('div.swiper2').animate({marginLeft:'-='+ulWidth+'px'},function(){
//     $('.swiper2 ul:first').appendTo('.swiper2');
//     $('.swiper2').css('margin-left','-'+ulWidth+'px');
//   })
// }

