 /*global kakao*/ 
import React, { useEffect } from 'react'
function StoreMap ({id,lat,lng}) {



  useEffect(()=>{
    let container = document.getElementById(`location${id}`);

    let options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3
    };

    let map = new kakao.maps.Map(container, options);
    let markerPosition  = new kakao.maps.LatLng(lat, lng); 
    let marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
  })

  
  return (
    <div id={`location${id}`} style={{width:"1000px", height:"400px"}}></div>
  )
}

export default StoreMap;
