import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import './css/MyOption.css';



function MyOption({price,myOptList,count}){
  const [sumPrice,setSumPrice] = useState(0);

  const myOptionList = myOptList.filter((option,index,arr)=>{
    return arr.findIndex(item=> (option.color === item.color) && (option.size === item.size)) === index;
  });

  return(  
    <> 
    {myOptionList.map(option => {
      return(
        <dl>
          <dt>{option.color}  / {option.size}</dt>
          <dd id="count">
            <span
            onClick={()=>{(option.num >1 ? option.num = option.num -1 : option.num = 1);setSumPrice(sumPrice -= option.num*price)}}
            >-</span>
              {option.num}
            <span
            onClick={()=>{option.num = option.num + 1; setSumPrice(sumPrice += option.num * price)}}>
              
              +
            </span>
          </dd>
          <dd>{(option.num * price).toLocaleString('KO-kr')+'원'
          }</dd>
          <dd><MdOutlineCancel /></dd>
        </dl>
      )
    })}
            <ul className="priceSum">
          <li>총가격</li>
          <li>{sumPrice}</li>
        </ul>
    </>
  )
}

export default MyOption;