import $ from 'jquery';

$(function(){
  timer();
  btn();  
  setInterval(timer,3000);
  swiper();
  
})

function btn(){
  const liHeight = $('#box01>ul>li').height()/2;
  // console.log(liHeight)
  const btnTop = liHeight + ($('p.prev').height()/2);
  $('p.prev>svg').css('top',btnTop);
  $('p.next>svg').css('top',btnTop);
  $('#box01>ul').on('mouseleave',function(e){
    $('p.prev>svg').css('display','none');
    $('p.next>svg').css('display','none');
  });
  $('#box01>ul').on('mouseenter',function(e){
    $('p.prev>svg').css('display','block');
    $('p.next>svg').css('display','block');
  });

  $('#box01 p').on('mouseenter',function(e){
    $('p.prev>svg').css('display','block');
    $('p.next>svg').css('display','block');
  })
}

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


