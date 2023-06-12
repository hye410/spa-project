import Nav2 from '../components/Nav2';
import BestProduct from '../components/BestProduct';
import "./css/common.css";
import bestData from '../api/best.json';
import { useState } from 'react';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

function Best(){
  const [order,setOrder] = useState('date');
  const sortItems = bestData.sort((a,b) => (order === 'price2') ? a[order] - b[order] : b[order]-a[order]);
  const [toggle,setToggle] = useState(false);


  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 9;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPost = bestData.slice(indexOfFirst,indexOfLast);


  return(
    <>
    <Nav2 />
    <article id="products">
        <h3><Link to="/">Home</Link>/Best</h3>
      <section>
        <h4><img src="./images/best-logo.jpg" alt="bestLogo" /></h4>      
        <div className="pro">
          <p>{currentPost.length} Items</p>
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
          <div className="productsList">
            {currentPost.map(bestItem => 
             <BestProduct
             key={bestItem.id}
             bestItem = {bestItem} />
          )}
        </div>
      </section>
        <Pagination
        pages = {setCurrentPage}
        postsPerPage = {postsPerPage}
        totalPages = {bestData.length}     
         />
    </article>
    </>
  )
}

export default Best;