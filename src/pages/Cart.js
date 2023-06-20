import './css/Cart.css';
import CartProduct from '../components/CartProduct';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsCartX } from "react-icons/bs";

function Cart(){

  const ItemsInTheCart = JSON.parse(sessionStorage.getItem('cart')) || [];
  
  const [cartList,setCartList] = useState(ItemsInTheCart);
  const [sumPrice,setSumPrice] = useState(0);
  const [checkedItems,setCheckedItems] = useState([]);

  const selectAll = (checked) => {
    if(checked){
      const idArray = [];
      cartList.forEach((item) => idArray.push(item.id));
      setCheckedItems(idArray);
    }else{
      setCheckedItems([]);
    }
  }

  const removeAllItems = () => {
    const warning = window.confirm('장바구니를 비우시겠습니까?');
    if(warning === true){
      sessionStorage.removeItem('cart');
      setCartList([]);
    }
  }

  const checkedId = checkedItems.map(id => id);

  const removeSelectedItems = (id) => {
    if(id.length !== 0){
      let removeItems;
      id.forEach( item => removeItems = cartList.filter(({id}) => id !== item));
      id.forEach( item => removeItems = removeItems.filter(({id}) => id !== item));
      setCartList(removeItems);
    }else{
      alert('선택된 상품이 없습니다.')
    }
  }



  useEffect(()=>{    
    sessionStorage.setItem('cart',JSON.stringify(cartList));
  },[cartList])

  return(
    <>
    <article id="cart">
      <h3><Link to="/">Home</Link>/장바구니</h3>
      {
      cartList.length !== 0 ?
      <>
      <section>
        <h4>장바구니</h4>
        <div className="cartList">
          <ul>         
            <li>
              <input 
              type="checkbox"
              name="selectAll"
              onChange={(e) => selectAll(e.target.checked)}
              checked={checkedItems.length === cartList.length ? true : false}
              />
            </li>
            <li>상품명</li>
            <li>가격</li>
            <li>수량</li>
            <li>총금액</li>
            <li>삭제</li>
          </ul>
            <CartProduct 
            setSumPrice={setSumPrice}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            cartList={cartList}
            setCartList={setCartList}
            />
        </div>
        <p>
          <button 
          type="button"
          onClick={()=>removeSelectedItems(checkedId)}
          >
            선택삭제
          </button>
          <button 
          type="button"
          onClick={() => removeAllItems()}
          >
            전체삭제
          </button>
        </p>
      </section>
      <ul className="sum">
        <li>
          <p>총 주문 금액</p>
          {sumPrice.toLocaleString('ko-kr')}원
        </li>
        <li>+</li>
        <li>
          <p>배송비</p>
          {
           (sumPrice >= 20000 ? 0 : 2000).toLocaleString('ko-kr')
          }원
        </li>
        <li>=</li>
        <li>
          <p>총 결제 금액</p>
          {
            (sumPrice >= 20000 ? sumPrice : (sumPrice + 2000)).toLocaleString('ko-kr')
          }원
        </li>
      </ul>
      <p>
        <button type="button"><Link to="/">계속 쇼핑하기</Link></button>
        <button type="button"><Link to="/login">선택상품 주문하기</Link></button>
        <button type="button"><Link to="/login">전체상품 주문하기</Link></button>
      </p>
      </>
      :
      <div className="empty">
        <p>
          <BsCartX />
        </p>
        <p>
          장바구니가 비었습니다.
        </p>        
      </div>
      }
    </article>
    </>
  )
}

export default Cart;