import { Link } from "react-router-dom";
import './css/NewProduct.css';

function BestProduct({bestItem}){

  return(
    <figure>
      <Link to={`/best/${bestItem.course}`}>
        <img src= {bestItem.imgUrl} alt={bestItem.name} />
      </Link>
      <figcaption>
        <dl>
          <Link to={`/best/${bestItem.course}`}><dt>{bestItem.name}</dt></Link>
          <dd>{bestItem.price1.toLocaleString('ko-kr')}원</dd>
        </dl>
      </figcaption>
    </figure>
  )
}

export default BestProduct;