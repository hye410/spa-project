import Nav from '../components/Nav';
import Nav2 from '../components/Nav2';
import NewProduct from '../components/NewProduct';
import "./css/New.css";
import newData from '../api/new.json';
import { useState } from 'react';
function New(){
  const [order,setOrder] = useState('date');
  const sortItems = newData.sort((a,b) => (order === 'price2') ? a[order] - b[order] : b[order]-a[order]);
  const [toggle,setToggle] = useState(false);

  return(
    <>
    <Nav />
    <Nav2 />
    <article>
        <h3>Home/New ARRIVALS</h3>
      <section>
        <h4><img src="./images/new-logo.png" alt="newLogo" /></h4>
        {/* 로고 다시 만들기 */}        
        <div>
          <p>{newData.length} Items</p>
          <div onClick={()=>setToggle(!toggle)}>
            정렬
            {
              toggle == true ? 
              <ul className="sort">
                <li onClick={()=>setOrder('popularity')}>인기순</li>
                <li onClick={()=>setOrder('recommendation')}>추천순</li>
                <li onClick={()=>setOrder('date')}>최신순</li>
                <li onClick={()=>setOrder('hits')}>조회순</li>
                <li onClick={()=>setOrder('price1')}>높은 가격순</li>
                <li onClick={()=>setOrder('price2')}>낮은 가격순</li>
              </ul>
              : null
            }
          </div>
          </div>
          <div className="newList">
            {sortItems.map(newItem => {return(
             <NewProduct
             key={newItem.id}
             newItem = {newItem} />
          )})}
        </div>
      </section>
    </article>
    </>
  )
}

export default New;