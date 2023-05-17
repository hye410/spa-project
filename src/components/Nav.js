import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import './css/Nav.css';
import { useEffect, useState } from "react";

function Nav(){
  // const [cartSum,setCartSum] = useState(0);
  const ItemsInTheCart = JSON.parse(sessionStorage.getItem('cart')) || [];
  const cartSum = JSON.parse(sessionStorage.getItem('cartSum')) || 0;
  // useEffect(()=>{
    
  // },[ItemsInTheCart])  

  
  return(
    <nav>
      <ul className="gnb">
        <li><Link to="/login">로그인</Link></li>
        <li><Link to="/">회원가입</Link></li>
        <li>
          <Link to="/cart">
            <BsBag />
          <span>
            {cartSum}
          </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;