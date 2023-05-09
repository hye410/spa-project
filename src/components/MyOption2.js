import { MdOutlineCancel } from "react-icons/md";
import './css/MyOption.css';
import { useCallback, useEffect, useState } from "react";

function MyOption(){  


  const OptionList = JSON.parse(sessionStorage.getItem('option')) || [];

  const filterOption = OptionList.filter((opt,index) => OptionList.findIndex(item => item.color === opt.color && item.size === opt.size) === index);
  


  return(
    <>
    {
    OptionList !== [] ? 
    filterOption.map(option => 
      <dl key = {option.id}>
      <dt>{option.color} / {option.size}</dt>
      <dd>
      <span>-</span>
      {option.num}
      <span>+</span>
      </dd>
      <dd>
      {option.price}
      </dd>
      <dd>
      <MdOutlineCancel 
      />
      </dd>
      </dl>
      )
      : null
    }
    </>   
  )
}

export default MyOption;
