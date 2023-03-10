import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import {  } from '../api/api';
import './css/MyOption.css';

function MyOption({price,myOptList}){
  const [count,setCount] = useState(1);
//  console.log(myOptList[myOptList.length-1]);
//  console.log(myOptList[myOptList.length]);

  return(  
    <>  
    <dl>
    <dt> 상품명 / 선택한 사이즈</dt>
    <dd>
      <span onClick={()=>{count > 1 ? setCount(count - 1) : setCount(1)}}>-</span>
        {count}
      <span onClick={()=>setCount(count + 1)}>+</span>
    </dd>
   <dd>{(price*count).toLocaleString('KO-KR')}원</dd>
    <dd><MdOutlineCancel /></dd>
    </dl>
        <dl>
        <dt>선택한 상품명 / 선택한 사이즈</dt>
        <dd>
          <span onClick={()=>{count > 1 ? setCount(count - 1) : setCount(1)}}>-</span>
            {count}
          <span onClick={()=>setCount(count + 1)}>+</span>
        </dd>
       <dd>{(price*count).toLocaleString('KO-KR')}원</dd>
        <dd><MdOutlineCancel /></dd>
        </dl>
    </>
  )
}

export default MyOption;