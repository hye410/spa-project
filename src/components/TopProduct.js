import { Link } from "react-router-dom";
import './css/NewProduct.css';

function TopProduct({topItem}){

  return(
    <figure>
      <Link to={`/top/${topItem.course}`}>
        <img src= {topItem.imgUrl} alt={topItem.name} />
      </Link>
      <figcaption>
        <dl>
          <Link to={`/top/${topItem.course}`}><dt>{topItem.name}</dt></Link>
          <dd>{topItem.price1.toLocaleString('ko-kr')}원</dd>
        </dl>
      </figcaption>
    </figure>
  )
}

export default TopProduct;