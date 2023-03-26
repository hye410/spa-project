import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import './css/MyOption.css';



function MyOption({price,myOptionList,list}){  

  const [sumCount,setSumCount] = useState(0);

  const hap = myOptionList.length;
  

  return(  
    <> 
    {myOptionList.map((option,index) => {      
      return(
        <dl key={index}>
          <dt>{option.color}  / {option.size}</dt>
          <dd>
            <span
            onClick={function(){
              if(option.num>1){
                option.num = option.num -= 1;
                setSumCount(sumCount - 1);
              }else{
                option.num = 1;
                setSumCount(sumCount);
              }
            }}>
              -</span>
              {option.num}
            <span          
            onClick={()=>{option.num = option.num += 1; setSumCount(sumCount + 1);}}          
            >              
              +
            </span>
          </dd>
          <dd>{(price*option.num).toLocaleString('KO-kr')+'원'}</dd>
          <dd>
            <MdOutlineCancel  
          />
          </dd>
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