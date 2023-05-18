import { MdOutlineCancel } from "react-icons/md";
import './css/CartProduct.css';
import { useEffect, useState } from "react";

function CartProduct({setSumPrice}){
  const ItemsInTheCart = JSON.parse(sessionStorage.getItem('cart')) || [];
  
  const [cartList,setCartList] = useState(ItemsInTheCart);
  const [render,setRender] = useState(0);

  const RemoveFromCart = (target) => {
    const list = cartList.filter(item => item.id !== target);
    setCartList(list);
    sessionStorage.setItem('cart',JSON.stringify(list));
  }

  const sumPrice = () => {
    return cartList.reduce((sum,item) => sum = sum += (item.price*item.num),0)
  };
  
  useEffect(()=>{
    setSumPrice((sumPrice()));
  },[cartList])

  return(
    cartList.map((item,index) => 
    <ul key={index} className="addedItems">
      <li><input type="checkbox" name="check" /></li>
      <li>
        <p><img src={item.img} alt={item.name} /></p>
        <p>
          <span>{item.name}</span>
          <span>색상 : {item.color} / 사이즈 : {item.size}</span>
        </p>
      </li>
      <li>{item.price.toLocaleString('KO-KR')}원</li>
      <li>
        <span onClick={() => {
          item.num <= 1 ? item.num = 1 : item.num = item.num -1 ; 
          setRender(render-1);
          setSumPrice((sumPrice()));
          }}>
          -
        </span>
        {item.num}
        <span onClick={() => {
          item.num = item.num + 1 ; 
          setRender(render+1);
          setSumPrice((sumPrice()));
          }}>
          +
        </span>  
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