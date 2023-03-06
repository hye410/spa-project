import Nav from '../components/Nav';
import './css/Cart.css';
import CartProduct from '../components/CartProduct';
import { getCartList } from '../api/api';
import { useEffect, useState } from 'react';

function Cart(){

  const [addedList,setAddedList] = useState([]);

  useEffect(()=>{
    const NextList = getCartList();
    setAddedList(NextList);
  },[]);
  return(
    <>
    <Nav />
    <article id="cart">
      <h3>Home/장바구니</h3>
      <section>
        <h4>장바구니</h4>
        <div className="cartList">
          <ul>         
            <li><input type="checkbox" /></li>
            <li>상품명</li>
          </ul>
          <ul>
            <li>가격</li>
            <li>수량</li>
            <li>총금액</li>
            <li>삭제</li>
          </ul>
        </div>
        {
        addedList.map((item,index) => <CartProduct key={index} addedItem={item} />)
        }
        <p>
          <button type="button">선택삭제</button>
          <button type="button">전체삭제</button>
        </p>
      </section>
      <ul className="sum">
        <li>
          <p>총 주문 금액</p>
          가격
        </li>
        <li>+</li>
        <li>
          <p>배송비</p>
          가격
        </li>
        <li>=</li>
        <li>
          <p>총 결제 금액</p>
          가격
        </li>
      </ul>
      <p>
        <button type="button">계속 쇼핑하기</button>
        <button type="button">선택상품 주문하기</button>
        <button type="button">전체상품 주문하기</button>
      </p>
    </article>
    </>
  )
}

export default Cart;