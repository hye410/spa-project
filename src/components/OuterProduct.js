import { Link } from "react-router-dom";
import './css/NewProduct.css';

function OuterProduct({outerItem}){

  return(
    <figure>
      <Link to={`/outer/${outerItem.course}`}>
        <img src= {outerItem.imgUrl} alt={outerItem.name} />
      </Link>
      <figcaption>
        <dl>
          <Link to={`/outer/${outerItem.course}`}><dt>{outerItem.name}</dt></Link>
          <dd>{outerItem.price1.toLocaleString('ko-kr')}원</dd>
        </dl>
      </figcaption>
    </figure>
  )
}

export default OuterProduct;