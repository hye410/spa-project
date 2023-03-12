import { useState } from "react";
import MyOption from '../components/MyOption';
// import { addToOption } from '../api/api';

function DetailOption({course}){

  const [optImg,setOptImg] = useState(course.imgUrl);
  const [optSize,setOptSize] = useState([]);
  const [selectedColor,setSelectedColor] = useState('');
  const [selectedSize,setSelectedSize] = useState('');

  // const clear = {
  //   // id: 0,
  //   color : "",
  //   size : ""
    
  // };

  // const [myOptList,setMyOptList] = useState([clear]);

  const [myOptList,setMyOptList] = useState([]);


  function addOption(selectedColor,selectedSize){
    const myOpt = {
      // id : myOptList.length,
      color : selectedColor,
      size : selectedSize,
      num : 1
    };
    setMyOptList([...myOptList,myOpt]);
  };
    



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
            onChange={(event)=>{changeProImg(event.target.value);
              setSelectedColor(event.target.value);
                              }}                        
            defaultValue="selected">                             
              {course.colors.map((color,index)=>{
                return(
                  <>
                  {/* <option key="color" value="selected" disabled hidden>색상</option>                              */}
                  <option
                  key={index}
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
                addOption(selectedColor,event.target.value);
                }}
                >
                  {/* 여기서 selectedSize를 setting한 후에 addOption을 하게되면 동시에 event가 진행되어서 원하는대로 optList가 출력되지않음 . (한박자 뒤에 출력됨)
                  그래서 여기서는 selectedSize를 받는 대신에 바로 매개변수값에 집어넣음 */}
              {/* <option key="size" value="selected" disabled hidden>사이즈</option> */}
              {
              optSize.map((size,index) => 
              <option
              value={size}
              key={index}       
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
          myOptList = {myOptList}
          price = {course.price1}
          num = {course.num}
          />
        </div>
        
        {/* <ul className="priceSum">
          <li>총가격</li>
          <li>총금액</li>
        </ul> */}
        <p>
          <button type="button">
            장바구니 담기
          </button>
          <button type="button" >
            바로 구매
          </button>
        </p>
      </figcaption>
    </figure>
  )
}

export default DetailOption;