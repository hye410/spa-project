import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import MyOption from './MyOption';
import { addedOption } from "../api/api";
function DetailOption({course}){

  const [selectedColor,setSelectedColor] = useState(course.colors[0]);
  const [rendering,setRendering] = useState(0);

  function addedOption(color,size){
    const optionList = JSON.parse(sessionStorage.getItem('option')) || [];

    let myOption = {
      id : optionList.length,
      name : course.name,
      color : '',
      size : '',
      price : course.price1,
      num : course.num
    };
    myOption.color = myOption.color.replace('',color);
    myOption.size = myOption.size.replace('',size);

    optionList.push(myOption);
    return sessionStorage.setItem('option',JSON.stringify(optionList));
  }


  return(
    <figure className="ProDetail">
      <img src= {course.imgByColor[selectedColor]} alt={course.name} />
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
            <select name="color" onChange={(e)=>setSelectedColor(e.target.value)}>
              {
              course.colors.map((color,index) => 
              <option key={index}>
                {color}
              </option>
              )
              }
            </select>      
          </dd>
          <dt>사이즈</dt>
          <dd>
            <select onChange={(e) => {addedOption(selectedColor,e.target.value); setRendering(rendering + 1);}}>
              {
                course.sizes[selectedColor].map((size,index) => 
                <option key={index}>
                  {size}
                </option>
                )
              }
            </select>
          </dd>   
        </dl>

        <div className="decision">
          <MyOption />
        </div>
        
        <p>
          <button
          type="button"
          onClick={()=>{
            alert('장바구니에 물건이 담겼습니다.');
            
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