

export function courseByDetail(data,courseDetail){
  return data.find(({course}) => course === courseDetail);
}



// 카트 담기
// options : 선택된 option들

export function addToCart(options) {
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
