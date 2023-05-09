import newData from './new.json';

export function courseByDetail(courseDetail){
  return newData.find(({course}) => course === courseDetail);
}

const CartList_KEY = 'addedItem' ;
const addedItem = JSON.parse(sessionStorage.getItem(CartList_KEY) || '{}');

export function addToCart(courseDetail){
  // addedItem[courseDetail]
  sessionStorage.setItem(CartList_KEY,JSON.stringify(addedItem));
}

export function getCartList(){
  return newData.filter((data) => addedItem[data.course])
}


// 
//  selectedOption은 빈배열의 state,,

// export function addToOption(selectedOption,setSelectedOption,color,size){
//   let options = {
//     id : addToOption().length -1 ,
//     color : color,
//     size : size
//   };

//   const DuplicateContent = selectedOption.find(content => content.name !== options.name && content.size !== options.size);


//   if(DuplicateContent == true){
//     return setSelectedOption(selectedOption);
//   }else{
//     return setSelectedOption([...selectedOption,options]);
//   }
// }
