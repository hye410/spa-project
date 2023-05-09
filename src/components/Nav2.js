import { Link } from "react-router-dom";
import './css/Nav.css';

function Nav2(){
  return(
    <nav>
    <ul className="menu">
      <li><Link to="/new">NEW ARRIVALS</Link></li>
      <li><Link to="/best">BEST</Link></li>
      <li><Link to="/outer">Outer</Link></li>
      <li><Link to="/tops">Tops</Link></li>
      <li><Link to="/pants">Pants</Link></li>
      <li><Link to="/homewear">Home Wear</Link></li>
  </ul>
  </nav>
  )
}

export default Nav2;
