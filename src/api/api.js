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


// 카트 담기
// options : 선택된 option들

export function addToCart2(options) {
	const list = JSON.parse(sessionStorage.getItem('cart')) || [];

	if(list.length === 0) {
		for(let i of options) {
			list.push(i);
		}
		sessionStorage.setItem('cart', JSON.stringify(list));
		return;
	} else {
		for(let option of options) {
			let boolean = false;

			for(let item of list) {
				if(item.name === option.name && item.size === option.size && item.color === option.color){
					item.num = option.num + item.num;
					boolean = true;
					break;
				}
			}

			if(boolean === false) {
				list.push(option);
			}
		}
		sessionStorage.setItem('cart', JSON.stringify(list));
		return;
	}
}

