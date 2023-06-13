import { CiSearch } from "react-icons/ci";
import StoreList from "../components/StoreList";
import './css/Store.css';
import store from '../api/store.json';
import { useState } from "react";


function Stores(){
  const [stores,setStores] = useState(store);
  const [area,setArea] = useState(1);

  const sub = stores.regions.find(item => item.id === Number(area))
                    .subArea.forEach(item => console.log(item))
                    



  return(
    <article id="store">
      <h3>매장안내</h3>
      <div className="search">

        <select name="area" onChange={(event)=>setArea(event.target.value)}>
          {
           stores.regions.map(item => <option key={item.id} value={item.id}>{item.area}</option>)
          }
        </select>
        <select name="district">
          {
            stores.regions.find(item => item.id === Number(area))
            .subArea.map((item,index) => <option key={index}>{item}</option>)
            
          }
        </select>
        <p>
          <input type="text" placeholder="원하시는 매장명을 검색하세요."/>
          <CiSearch />
        </p>
      </div>
      <section className="stores">        
        <h4>매장검색결과(매장개수)</h4>
          <StoreList />
      </section>
    </article>
  )
}

export default Stores;