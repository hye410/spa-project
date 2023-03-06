import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import './css/Nav.css';
import { useState } from "react";

function Nav(){

  return(
    <nav>
      <ul className="gnb">
        <li><Link to="/login">로그인</Link></li>
        <li><Link to="/">회원가입</Link></li>
        <li>
          <Link to="/cart">
            <BsBag />
          <span></span>
          </Link>
        </li>
      </ul>
      {/* <ul className="menu">
        <li><Link to="/new">NEW ARRIVALS</Link></li>
        <li><Link to="/best">BEST</Link></li>
        <li><Link to="/outer">Outer</Link></li>
        <li><Link to="/tops">Tops</Link></li>
        <li><Link to="/pants">Pants</Link></li>
        <li><Link to="/homewear">Home Wear</Link></li>
      </ul> */}
    </nav>
  )
}

export default Nav;