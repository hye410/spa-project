import { MdOutlineCancel } from "react-icons/md";
import './css/CartProduct.css';
import { useState } from "react";

function CartProduct({setSumPrice}){
  const ItemsInTheCart = JSON.parse(sessionStorage.getItem('cart')) || [];

  const [cartList,setCartList] = useState(ItemsInTheCart);
  
  const RemoveFromCart = (target) => {
    setCartList(cartList.filter(item => item.id !== target));
  }

  
  return(
    cartList.map((item,index) => 
    <ul key={index} className="addedItems">
      <li><input type="checkbox" /></li>
      <li>
        <p><img src={item.img} alt={item.name} /></p>
        <p>
          <span>{item.name}</span>
          <span>색상 : {item.color} / 사이즈 : {item.size}</span>
        </p>
      </li>
      <li>{item.price.toLocaleString('KO-KR')}원</li>
      <li>
        <button type="button">-</button>  
        {item.num}
        <button type="button">+</button>  
      </li>
      <li>{(item.num * item.price).toLocaleString('KO-KR')}원</li>
      <li onClick={() => {RemoveFromCart(item.id)}}>
        <MdOutlineCancel />
      </li>
    </ul>
    )
  )
}

export default CartProduct;