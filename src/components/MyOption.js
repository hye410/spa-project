import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import './css/MyOption.css';



function MyOption({price,myOptList,num}){


  let myOptionList = myOptList.filter((option,index,arr)=>{
    return arr.findIndex(item=> (option.color === item.color) && (option.size === item.size)) === index;
  });

  const hap = myOptionList.length;
  const [sumCount,setSumCount] = useState(0);

  function minus(num){
    if(num > 1){
      num = num -1;
      setSumCount(sumCount - 1);
    }else{
      num = 1;
      setSumCount(price);
    }
  }

  return(  
    <> 
    {myOptionList.map((option,index) => {

      return(
        <dl key={index}>
          <dt>{option.color}  / {option.size}</dt>
          <dd id="count">
            <span
            // onClick={()=>{(option.num > 1 ? (option.num = option.num -1) : option.num = option.num = 1); 
            //   setSumCount(sumCount - 1)}}
            onClick={()=>{minus(option.num)}}
            >-</span>
              {option.num}
            <span
            onClick={()=>{option.num = option.num += 1; setSumCount(sumCount + 1)}}
            >              
              +
            </span>
          </dd>
          <dd>{(price*option.num).toLocaleString('KO-kr')+'원'}</dd>
          <dd><MdOutlineCancel /></dd>
        </dl>
      )
    })}
            <ul className="priceSum">
          <li>총가격</li>
          <li>{((hap + sumCount)*price).toLocaleString('KO-kr')+'원'}</li>
        </ul>
    </>
  )
}

export default MyOption;