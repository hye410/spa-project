import './css/Footer.css';
import logo from '../assets/logo.svg';
import { FaFacebookF,FaYoutube,FaInstagram } from "react-icons/fa";
function Footer(){
  return(
    <footer>
      <div id="footer">
        <p><img src={logo} alt="giordano"/></p>
        <dl>
          <dt>&#40;주&#41;지오다노</dt>
          <dd>서울특별시 서초구 강남대로65길 1&#40;서초동&#41; 효봉빌딩</dd>
          <dt>FAX</dt>
          <dd>02-534-2994</dd>
          <dt>대표자</dt>
          <dd>한준석</dd>
          <dt>개인정보보호책임자</dt>
          <dd>김명희</dd>
          <dd>support&#64;giordano.co.kr</dd>
          </dl>
          <dl className='info'>          
          <dt>사업자등록번호</dt>
          <dd>116-81-47798</dd>
          <dt>통신판매업신고</dt>
          <dd>2004-서울서초-04585</dd>
        </dl>
        <div>
          <dl className="call">
            <dt>고객만족센터</dt>
            <dd>080-934-3000</dd>
          </dl>
          <ul className="sns">
            <li><FaInstagram /></li>
            <li><FaFacebookF /></li>
            <li><FaYoutube /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;