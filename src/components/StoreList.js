import { useEffect } from "react";
const {kakao} = window;

function StoreList({selectedStore}){
  // useEffect(()=>{
  //   const container = document.getElementById('#map');
  //   const options = {
  //     center : new kakao.maps.Lating(33.450701,126.570667),
  //     level : 3
  //   };
  //   const map = new kakao.maps.Map(container,options);
  // },[])



    return(
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li id="map" style={{width:'500px',height:'500px'}}>

        </li>
      </ul>
    )

    }


export default StoreList;