import { MdOutlineCancel } from "react-icons/md";
import './css/CartProduct.css';

function CartProduct({addedItem}){
  console.log()
  // console.log(addedList);
  return(
    <div className="addedItem">
        <ul className="added1">
          <li><input type="checkbox" /></li>
          <li><img src={addedItem.imgUrl} alt={addedItem.name} /></li>
          <li>
            <p>{addedItem.name}</p>
            <p>상품옵션</p>
          </li>
        </ul>
        <ul className="added2">
          <li>{addedItem.price1.toLocaleString('ko-kr')}원</li>
          <li>
            <button type="button">-</button>
            12
            <button type="button">+</button>
          </li>
          <li>2341234원</li>
          <li><MdOutlineCancel /></li>
      </ul>
    </div>
  )
}

export default CartProduct;