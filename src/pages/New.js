import Nav from '../components/Nav';
import NewProduct from '../components/NewProduct';
import "./css/New.css";
import newData from '../api/new.json';
import { useState } from 'react';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

function New(){
  const [order,setOrder] = useState('date');
  const sortItems = newData.sort((a,b) => (order === 'price2') ? a[order] - b[order] : b[order]-a[order]);
  const [toggle,setToggle] = useState(false);


  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 9;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPost = sortItems.slice(indexOfFirst,indexOfLast);


  return(
    <>
    <Nav />
    <article id="new">
        <h3><Link to="/">Home</Link>/New ARRIVALS</h3>
      <section>
        <h4><img src="./images/new-logo.png" alt="newLogo" /></h4>      
        <div className="new">
          <p>{currentPost.length} Items</p>
          <div onClick={()=>setToggle(!toggle)}>
            정렬
            {
              toggle === true ? 
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
          <div className="productsList">
            {currentPost.map(newItem => {return(
             <NewProduct
            key={newItem.id}
             newItem = {newItem} />
          )})}
        </div>
      </section>
        <Pagination
        pages = {setCurrentPage}
        postsPerPage = {postsPerPage}
        totalPages = {newData.length}     
         />
    </article>
    </>
  )
}

export default New;