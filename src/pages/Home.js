import { Link, useNavigate } from 'react-router-dom';
import Nav2 from '../components/Nav2';
import './css/Home.css';
import './jquery/Home-jq';
import { TfiAngleLeft,TfiAngleRight } from "react-icons/tfi";

function Home(){

  const navigate = useNavigate();
  return(
    <>
    <Nav2 />
    <div>
      {/* <Nav2 /> */}
    <div id="box01">
      <ul className="swiper">
        <li><img src="./images/home-main.jpg" alt="mainImage1" /></li>
        <li><img src="./images/home-main2.jpg" alt="mainImage2" /></li>
        <li><img src="./images/home-main3.jpg" alt="mainImage3" /></li>
        <li><img src="./images/home-main4.jpg" alt="mainImage4" /></li>
      </ul>
      <p className="prev"><TfiAngleLeft /></p>
      <p className="next"><TfiAngleRight /></p>
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
      <h3>Best 5</h3>
        <ul>
          <li><img src="/images/best/best1-1.jpg" alt="bestItem1"/></li>
          <li><img src="/images/best/best2-1.jpg" alt="bestItem2"/></li>
          <li><img src="/images/best/best2-3.jpg" alt="bestItem3"/></li>
          <li><img src="/images/best/best2-4.jpg" alt="bestItem4"/></li>
        </ul>
    </div>
    </div>
  </>
  )

}

export default Home;