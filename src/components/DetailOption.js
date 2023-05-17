import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import MyOption from './MyOption';
import { addToCart2 } from '../api/api';
function DetailOption({course}){
  const [selectedColor,setSelectedColor] = useState(course.colors[0]);
  const [selectedOption,setSelectedOption] = useState([]);
  const [myOption,setMyOption] = useState([]);

  const ItemsInTheCart = JSON.parse(sessionStorage.getItem('cart')) || [];

  function addToOption(color,size,name){
    let options = {
      id :  ItemsInTheCart.length===0 ? selectedOption.length : ItemsInTheCart.length + selectedOption.length,
      name : name,
      color : color,
      size : size,
      num : 1,
      price : course.price1,
      img : course.imgByColor[color]
    };
    setSelectedOption([...selectedOption,options]);
  }

   useEffect(()=>{
    let filterOption = selectedOption.filter((opt,index) => selectedOption.findIndex(item => item.color === opt.color && item.size === opt.size) === index);
    setMyOption(filterOption);
  },[selectedOption]);

  const notice = () => {
    myOption.length === 0 ? alert('장바구니에 담을 물건이 없습니다.') : alert('장바구니에 담겼습니다.');
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
            <select name="color" onChange={(e)=>{setSelectedColor(e.target.value)}}>
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
            <select onChange={(e) => {addToOption(selectedColor,e.target.value,course.name);}}>
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
          <MyOption 
          myOption={myOption} 
          price={course.price1} 
          setSelectedOption={setSelectedOption} 
          selectedOption={selectedOption}
          />
       </div>
        
        <p>
          <button
          type="button"
          onClick={()=>{
            addToCart2(myOption);
            setSelectedOption([]);
            notice();
          }}
          >
            장바구니 담기
          </button>
          <button type="button">
            <Link to="/login">바로 구매</Link>
          </button>
        </p>
      </figcaption>
    </figure>
  )
}


export default DetailOption;