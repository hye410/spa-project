import { MdOutlineCancel } from "react-icons/md";
import './css/CartProduct.css';

function CartProduct(){

  const ItemsInTheCart = JSON.parse(sessionStorage.getItem('cart')) || [];
  console.log(ItemsInTheCart);

  return(
    <div className="addedItem">
      {
        ItemsInTheCart.map((item,index) => 
        <>
        <ul className="added1" key={index}>
          <li><input type="checkbox" /></li>
          <li><img src={item.img} alt={item.name} /></li>
          <li>
            <p>{item.color}/{item.size}</p>
            <p>상품옵션</p>
          </li>
        </ul>
      <ul className="added2" key={index*2}>
        <li>{item.price}원</li>
        <li>
          <button type="button">-</button>
          {item.num}
          <button type="button">+</button>
        </li>
        <li>{item.num * item.price}원</li>
        <li><MdOutlineCancel /></li>
      </ul>
      </>
        )
      }

    </div>
  )
}

export default CartProduct;