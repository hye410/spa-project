import { Link } from "react-router-dom";
import './css/Header.css';
import logo from '../assets/logo.svg';
import { BsBag } from "react-icons/bs";

function Header(){
  const getCartNum = JSON.parse(sessionStorage.getItem('cart')) || 0 ;

  return(
    <header>
      <div id="header">
        <h1><Link to="/"><img src={logo} alt="giordano"/></Link></h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/stores">Store</Link></li>
          <li><Link to="/login">LogIn</Link></li>
          <li>
            <Link to="/cart">
              <BsBag />
              <span>
                {getCartNum.length}
              </span>  
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;