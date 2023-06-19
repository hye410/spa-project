import { useState } from 'react';
import './css/StoreList.css';
import StoreMap from './StoreMap';



function StoreList({stores}){

  const [lat,setLat] = useState(37.50918790905744);
  const [lng,setLng] = useState(127.06080442852581);
  const [mapToggle,setMapToggle] = useState(false);
  const [mapTarget,setMapTarget] = useState(1);

  return(
    stores.map(store => {
      return(
        <>
        <ul key = {store.id}>
          <li>{store.name}</li>
          <li>{store.address}</li>
          <li>
            <p><span>평일</span>{store.openTime}</p>
            <p><span>주말</span>{store.closeTime}</p></li>
          <li>{store.call}</li>
          <li onClick={(e) => {
            setLat(store.latitude); 
            setLng(store.longitude);
            setMapToggle(!mapToggle);
            setMapTarget(store.id);
          }}>
              +
          </li>
        </ul>
        <div key={store.id+1} className="map">
          {
           (mapTarget === store.id) && (mapToggle !== true) ?                       
            <StoreMap id={store.id} lat={lat} lng={lng} /> 
            : null
          }      
        </div>
        </>
      )
    }
    )
  )
}

export default StoreList;