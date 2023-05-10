import { MdOutlineCancel } from "react-icons/md";
import './css/MyOption.css';
import { useState } from "react";

function MyOption({myOption,price,selectedOption,setSelectedOption}){ 
  
  const[render,setRender] = useState(0);

  const count = myOption.reduce((sum,{num}) => sum = sum + num ,0);

  const deleteItem = (id) => {
    return setSelectedOption(selectedOption.filter(opt => opt.id !== id));
  }


  return(
    <>
    {myOption.map(option => 
      <dl key = {option.id}>
      <dt>{option.color} / {option.size}</dt>
      <dd>
      <span 
      onClick={()=>{    
        option.num <= 1 ? option.num = 1 : option.num = option.num -1 ;
        setRender(render - 1); 
      }}>
        -
      </span>
      {option.num}
      <span onClick={()=>{option.num ++ ; setRender(render + 1);}}>+</span>
      </dd>
      <dd>
      {(option.price * option.num).toLocaleString('KO-kr')}원
      </dd>
      <dd>
      <MdOutlineCancel
      onClick={()=>{deleteItem(option.id)}}
      />
      </dd>
      </dl>
      )}
      <ul className="priceSum">
        <li>총가격</li>  
        <li>{(count * price).toLocaleString('Ko-kr')}원</li>
      </ul>
    </>   
  )
}

export default MyOption;
