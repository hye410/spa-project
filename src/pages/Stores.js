import { CiSearch } from "react-icons/ci";
import StoreList from "../components/StoreList";
import './css/Store.css';
import store from '../api/store2-5.json';
import { useState } from "react";



function Stores(){
  const [storeList,setStoreList] = useState(store);
  const [subArea,setSubArea] = useState('');

  const sub = storeList.map(({area})=> area[subArea]);


  return(
    <article id="store">
      <h3>매장안내</h3>
      <div className="search">
        <select name="area" onChange={(event)=>setSubArea(event.target.value)} >
          <option value="서울">서울</option>
          <option value="경기">경기</option>
          <option value="인천">인천</option>
        </select>
        <select name="district">
          {
            sub.map(sub => <option>{sub}</option>)
          }
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