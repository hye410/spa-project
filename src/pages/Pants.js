import Nav from '../components/Nav';
import PantsProduct from '../components/PantsProduct';
import "./css/common.css";
import pantsData from '../api/pants.json';
import { useState } from 'react';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

function Pants(){
  const [order,setOrder] = useState('date');
  const sortItems = pantsData.sort((a,b) => (order === 'price2') ? a[order] - b[order] : b[order]-a[order]);
  const [toggle,setToggle] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 9;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPost = sortItems.slice(indexOfFirst,indexOfLast);


  return(
    <>
    <Nav />
    <article id="products">
        <h3><Link to="/">Home</Link>/Pants</h3>
      <section>
        <h4><img src="./images/best-logo.jpg" alt="bestLogo" /></h4>      
        <div className="pro">
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
            {currentPost.map(pantsItem => 
             <PantsProduct
             key={pantsItem.id}
             pantsItem = {pantsItem} />
          )}
        </div>
      </section>
        <Pagination
        pages = {setCurrentPage}
        postsPerPage = {postsPerPage}
        totalPages = {pantsData.length}     
         />
    </article>
    </>
  )
}

export default Pants;