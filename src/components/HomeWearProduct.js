import { Link } from "react-router-dom";
import './css/NewProduct.css';

function HomeWearProduct({homewearItem}){

  return(
    <figure>
      <Link to={`/homewear/${homewearItem.course}`}>
        <img src= {homewearItem.imgUrl} alt={homewearItem.name} />
      </Link>
      <figcaption>
        <dl>
          <Link to={`/homewear/${homewearItem.course}`}><dt>{homewearItem.name}</dt></Link>
          <dd>{homewearItem.price1.toLocaleString('ko-kr')}원</dd>
        </dl>
      </figcaption>
    </figure>
  )
}

export default HomeWearProduct;