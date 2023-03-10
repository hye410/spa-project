import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Nav2 from '../components/Nav2';
import './css/Home.css';
import ReactPlayer from 'react-player';
import './jquery/jqHome';

function Home(){

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
        <li>
          <Link to="/outer">
            <span>Outer</span>
            <img src="./images/home-outer.jpg" alt="outer" />
          </Link>
        </li>
        <li>
          <Link to="/tops">
            <span>Tops</span>
            <img src="./images/home-tops.jpg" alt="tops" />
          </Link>
        </li>
        <li>
          <Link to="/pants">
            <span>Pants</span>
            <img src="./images/home-pants.jpg" alt="pants" />
          </Link>
        </li>
        <li>
          <Link to="/homewear">
            <span>HomeWear</span>
            <img src="./images/home-homewear.jpg" alt="homewear" />
          </Link>
        </li>
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
      <div className='swiper2'>
        <ul>
          <li><img src="./images/best/best1.jpg" alt="bestItem1"/></li>
          <li><img src="./images/best/best2.jpg" alt="bestItem2"/></li>
          <li><img src="./images/best/best3.jpg" alt="bestItem3"/></li>
          <li><img src="./images/best/best4.jpg" alt="bestItem4"/></li>
        </ul>
        <ul>
          <li><img src="./images/best/best5.jpg" alt="bestItem5"/></li>
          <li><img src="./images/best/best6.jpg" alt="bestItem6"/></li>
          <li><img src="./images/best/best7.jpg" alt="bestItem7"/></li>
          <li><img src="./images/best/best8.jpg" alt="bestItem8"/></li>
        </ul>
        <ul>
          <li><img src="./images/best/best9.jpg" alt="bestItem9"/></li>
          <li><img src="./images/best/best10.jpg" alt="bestItem10"/></li>
          <li><img src="./images/best/best11.jpg" alt="bestItem11"/></li>
          <li><img src="./images/best/best12.jpg" alt="bestItem12"/></li>
        </ul>
      </div>
    </div>
    </div>
  
  )

}

export default Home;