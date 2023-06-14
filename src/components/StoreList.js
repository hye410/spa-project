import './css/StoreList.css';

function StoreList({stores}){
  return(
    stores.map(store => 
      <ul key = {store.id}>
        <li>{store.name}</li>
        <li>{store.address}</li>
        <li>
          <p><span>평일</span>{store.openTime}</p>
          <p><span>주말</span>{store.closeTime}</p></li>
        <li>{store.call}</li>
        <li>+</li>
      </ul>
    )
  )
}

export default StoreList;