import { CiSearch } from "react-icons/ci";
import StoreList from "../components/StoreList";
import './css/Store.css';
import store from '../api/store2.json';
import { useState } from "react";



function Stores(){
  const [Districts,setDistricts] = useState([]);  
  const [selectedArea,setSelectedArea] = useState([]);
  const [selectedDistrict,setSelectedDistrict] = useState('');

  function data(selected){
    setDistricts(store[selected].districts);
    setSelectedArea(store[selected].storeInfo);
  }
  // console.log(selectedArea[selectedDistrict])
  // console.log(selectedDistrict)
  // selectedArea.map(item => console.log(item.))

  const selectedStore = selectedArea[selectedDistrict];
  // const aa = store.map(({storeInfo}) => storeInfo[])

  return(
    <article id="store">
      <h3>매장안내</h3>
      <div className="search">
        <select name="area" onChange={(event)=>{data(event.target.value)}}>
        {
          store.map((stores,index) => <option key={index} value={stores.id-1}>{stores.area}</option>)
        }
        </select>
        <select name="district" onChange={(event)=>setSelectedDistrict(event.target.value)}>
          {Districts.map((district,index) => <option key={index} value={district}>{district}</option>)}
        </select>
        <p>
          <input type="text" placeholder="원하시는 매장명을 검색하세요."/>
          <CiSearch />
        </p>
      </div>
      <section className="stores">        
        <h4>매장검색결과(매장개수)</h4>
   

      </section>
    </article>
  )
}

export default Stores;