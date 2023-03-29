import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import './css/MyOption.css';



function MyOption({price,myOptList,count,setCount}){  


  const [sumCount,setSumCount] = useState(1);
  console.log(count)

  const selectedItems = myOptList.filter(
    (option,index,arr) => {return arr.findIndex(item=> (option.color === item.color) && (option.size === item.size)) === index});
          
            count === 0 ? price = 0 : price = price
          
  return(  
    <> 
    {selectedItems.map((option,index) => {
      return(
        <dl key={index}> 
          <dt>{option.color}  / {option.size}</dt>
          <dd>
            <span
            onClick={function(){ 
              if(option.num>1){
                option.num = option.num -= 1;
                setCount(count - 1);
              }else{
                option.num = 1;
                setCount(count);
              }
            }}> 
              -</span>
              {option.num}
            <span          
            onClick={()=>{option.num = option.num += 1; setCount(count + 1);}}          
            >              
              +
            </span>
          </dd>
          <dd>{(option.price * option.num).toLocaleString('KO-kr')+'원'}</dd>
          <dd>
            <MdOutlineCancel
          />
          </dd>
        </dl>
      )
    })}
        <ul className="priceSum">
          <li>총가격</li>
          <li>{(price * count).toLocaleString('KO-kr')}원</li>
        </ul>
    </>
  )
}

export default MyOption;