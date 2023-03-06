import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Nav2 from '../components/Nav2';
import './css/Home.css';
import $ from 'jquery';
import ReactPlayer from 'react-player';

function Home(){

  // jquery

  const widthLi = $('#box01>ul>li').width();

$(function(){
  $('#box01>ul>li:last').prependTo('#box01>ul');
  $('#box01>ul').css('margin-left','-'+widthLi+'px');

})

const swiper = ()=>{
  $('#box01>ul').animate({marginLeft:'-='+widthLi+'px'},function(){
    $('#box01>ul').css('margin-left','-'+widthLi+'px');
    $('#box01>ul>li:first').appendTo('#box01>ul');
  })
}

  const navigate = useNavigate();
  return(
    <div>
      <Nav />
      <Nav2 />
    <div id="box01">
      <ul className="swiper-wrapper">
        <li>
          <ReactPlayer
            width="100%" height="100%"
            playing={true}
            muted={true}
            url="./videos/giordano23.MP4"/>
          </li>
        <li><Link to="/new"><img src="./images/spring.jpg" alt="newProducts" /></Link></li>
        <li><Link to="/best"><img src="./images/best.jpg" alt="bestProducts" /></Link></li>
        <li><Link to="/event01"><img src="./images/event1.jpg" alt="단체티이벤트" /></Link></li>
        <li><Link to="/event02"><img src="./images/event2.jpg" alt="모델명맞히기" /></Link></li>
      </ul>
      <p className="swiper-button-prev"></p>
      <p className="swiper-button-next"></p>
    </div>
    <div id="box02">
      <ul>
        <li><Link to="/outer"><img src="./images/home-outer.jpg" alt="outer" /></Link></li>
        <li><Link to="/tops"><img src="./images/home-tops.jpg" alt="tops" /></Link></li>
        <li><Link to="/pants"><img src="./images/home-pants.jpg" alt="pants" /></Link></li>
        <li><Link to="/homewear"><img src="./images/home-homewear.jpg" alt="homewear" /></Link></li>
      </ul>
    </div>
    <div id="box03">
      <figure>
        <img src="./images/home-new.jpg" alt="new" />
        <figcaption>
          <ul>
            <li>봄 햇살처럼 싱그러운</li>
            <li>23 SPRING COLLECTION</li>
            <li>with 한소희</li>
            <li>
              <button 
              type="button"
              onClick={()=>{navigate('/new')}}>
                SHOP NOW
              </button>
            </li>
          </ul>
        </figcaption>
      </figure>  
    </div>    
    <div id="box04">
      <h3>Best 20</h3>
      <ul>
        <li></li>
      </ul>
    </div>
    </div>
  
  )

}

export default Home;