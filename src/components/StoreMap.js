 /*global kakao*/ 
import React, { useEffect, useState } from 'react'
function StoreMap ({id,lat,lng}) {



  useEffect(()=>{
    let container = document.getElementById(`location${id}`);

    var options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(lat, lng); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
  }, [])

  
  return (
    <div id={`location${id}`} style={{width:"500px", height:"400px"}}></div>
  )
}

export default StoreMap;
