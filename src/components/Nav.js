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
          <span>
          </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;