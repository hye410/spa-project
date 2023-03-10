import { CiSearch } from "react-icons/ci";
import StoreList from "../components/StoreList";
import './css/Store.css';
import store from '../api/store2-2.json';
import { useState } from "react";



function Stores(){
  const [stores,setStores] = useState(store);
  const [sub,setSub] = useState(0);
  console.log(sub)
  const [district,setDistrict] = useState('');

  function subArea(){
    // console.log(stores[sub].district)
    console.log(store)
  }

  return(
    <article id="store">
      <h3>매장안내</h3>
      <div className="search">

        <select name="area" onChange={(event)=>{setSub(event.target.value);
        subArea()
        }}>

        </select>
        <select name="district">
          {
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