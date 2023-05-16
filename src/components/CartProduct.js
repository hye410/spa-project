import { MdOutlineCancel } from "react-icons/md";
import './css/CartProduct.css';

function CartProduct(){

  const ItemsInTheCart = JSON.parse(sessionStorage.getItem('cart')) || [];


  return(
    ItemsInTheCart.map((item,index) => 
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
      <li>삭제</li>
    </ul>
    )
  )
}

export default CartProduct;