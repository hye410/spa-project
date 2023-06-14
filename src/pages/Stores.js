import { CiSearch } from "react-icons/ci";
import StoreList from "../components/StoreList";
import './css/Store.css';
import storeData from '../api/store.json';
import { useEffect, useState } from "react";



function Stores(){
  const [area,setArea] = useState('서울');
  const [subArea,setSubArea] = useState('강남구');
  // console.log(storeData)
  
  const initialStore = storeData.stores.filter(store => store.district === subArea);
  const [stores,setStores] = useState(initialStore);
  const [searchingStore,setSearchingStore] = useState('');


  useEffect(() => {
    setSubArea(storeData.stores.find(store => store.city === area).district);
  } ,[area])

  useEffect(() => {
    setStores(storeData.stores.filter(store => store.district === subArea));
  },[subArea])
  
  return(
    <article id="store">
      <h3>매장안내</h3>
      <div className="search">
        <select name="area" 
        onChange={
          (event) => {
            setArea(event.target.value);
          }
        }>
          {
           storeData.regions.map(area => <option key={area.id}>{area.area}</option>)
          }
        </select>
        <select name="district" key = {subArea} defaultValue ={subArea} 
        onChange = {
          (event) => {
            setSubArea(event.target.value);
          }
        }>
          {
            storeData.regions.find(item => item.area === area)
            .subArea.map((item,index)=> <option key={index}>{item}</option>)            
          }
        </select>
        <p>
          <input 
          type="text" 
          placeholder="원하시는 매장명을 검색하세요."
          onChange = {
            (e) => {
             setSearchingStore(e.target.value);
            }
          }
          />
          <span onClick={() => {
            setStores(
              storeData.stores.filter(
                store => store.name.toLowerCase().includes(searchingStore.toLowerCase())
              )
            );
          }}>
            <CiSearch />
          </span>          
        </p>
      </div>
      <section className="stores">        
        <h4>매장검색결과 ({stores.length})</h4>
          <StoreList
          stores = {stores}
          />
      </section>
    </article>
  )
}

export default Stores;