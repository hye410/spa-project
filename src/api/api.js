import newData from './new.json';

export function courseByDetail(courseDetail){
  return newData.find(({course}) => course === courseDetail);
}

const CartList_KEY = 'addedItem' ;
const addedItem = JSON.parse(sessionStorage.getItem(CartList_KEY) || '{}');

export function addToCart(courseDetail){
  addedItem[courseDetail] = true;
  sessionStorage.setItem(CartList_KEY,JSON.stringify(addedItem));
}

export function getCartList(){
  return newData.filter((data) => addedItem[data.course])
}

