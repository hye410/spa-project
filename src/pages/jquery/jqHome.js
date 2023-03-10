import $ from 'jquery';

$(function(){
  btn();
  timer();
  // setInterval(timer,8000);
  swiper();
})

function swiper(){
  const liWidth = $('#box01>ul>li').width();

  $('#box01>ul>li:last').prependTo('#box01>ul');
  $('#box01>ul').css('margin-left','-'+liWidth+'px');

  $('#box01>p.prev').on('click',function(e){
    $('#box01>ul').animate({marginLeft:'-='+liWidth+'px'},
    function(){
      $('#box01>ul').css('margin-left','-'+liWidth+'px');
      $('#box01>ul>li:first').appendTo('#box01>ul');
    })
  });

  $('#box01>p.next').on('click',function(e){
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
  // const liHeihgt = ($('#box01>ul>li').height())/2;
  // console.log(liHeihgt)
  // $('.prev').css('top',liHeihgt+'px');
  // $('.next').css('top',liHeihgt+'px');

  $('#box01>ul').on('mouseleave',function(){
    // $('.prev').css('display','none');
    // $('.next').css('display','none');
  });

    $('#box01>ul').on('mouseenter',function(){
      // $('.prev').css('display','block');
      // $('.next').css('display','block');
    });
};

