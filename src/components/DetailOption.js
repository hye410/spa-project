import { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../api/api";

import MyOption from '../components/MyOption';

function DetailOption({course}){

  const [optImg,setOptImg] = useState(course.imgUrl);
  const [optSize,setOptSize] = useState([]);
  const [selectedColor,setSelectedColor] = useState('');
  const [myOptList,setMyOptList] = useState([]);
  
  function addOption(selectedColor,selectedSize){
    const myOpt = {
      id : myOptList.length,
      color : selectedColor,
      size : selectedSize,
      num : 1
    };
    setMyOptList([...myOptList,myOpt]);   
  };
    
  const myOptionList = myOptList.filter((option,index,arr)=>{
    return arr.findIndex(item=> (option.color === item.color) && (option.size === item.size)) === index;
   });

  
  //  console.log(myOptionList)
  const changeProImg = (value) => {
    setOptImg(course.imgByName[value]);
    setOptSize(course.sizes[value]);
  }

  return(
    <figure className="ProDetail">
      <img src= {optImg} alt={course.name} />
      <figcaption>
        <ul>
          <li>{course.name}</li>
          <li>
            <b>{course.price1.toLocaleString('KO-KR')}</b>원</li>
        </ul>
        <dl className="option">
          <dt>배송비</dt>
          <dd>20,000원 이상 무료배송</dd>
          <dt>색상</dt>
          <dd>
            <select name="color"
            onChange={(event)=>{
              changeProImg(event.target.value);
              setSelectedColor(event.target.value);
                              }}                        
            >                             
              {course.colors.map(color=>{
                return(
                  <>
                  <option
                  key={color}
                  value={color}
                  >
                    {color}
                  </option>
                  </>
                )
              })}
            </select>
      
          </dd>
          <dt>사이즈</dt>
          <dd>
            <select
            name="size"
            defaultValue="selected"
            onChange={
              (event)=>{
                addOption(selectedColor,event.target.value) ;}  
                }
                >
                  {/* 여기서 selectedSize를 setting한 후에 addOption을 하게되면 동시에 event가 진행되어서 원하는대로 optList가 출력되지않음 . (한박자 뒤에 출력됨)
                  그래서 여기서는 selectedSize를 받는 대신에 바로 매개변수값에 집어넣음 */}
              {
              optSize.map(size=> 
              <option
              value={size}
              key={size}       
              >          
                {size}
              </option>
            )} 
            </select>
          </dd>   
        </dl>

        <div className="decision">
          {/* 반복문 */}
          <MyOption
          myOptionList = {myOptionList}
          price = {course.price1}
          />
        </div>
        
        <p>
          <button
          type="button"
          onClick={()=>{
            alert('장바구니에 물건이 담겼습니다.');
            addToCart(myOptionList)
          }}
          >
            장바구니 담기
          </button>
          <button type="button" >
            <Link to="/login">바로 구매</Link>
          </button>
        </p>
      </figcaption>
    </figure>
  )
}

export default DetailOption;