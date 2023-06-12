import { Link } from "react-router-dom";
import './css/NewProduct.css';

function PantsProduct({pantsItem}){

  return(
    <figure>
      <Link to={`/pants/${pantsItem.course}`}>
        <img src= {pantsItem.imgUrl} alt={pantsItem.name} />
      </Link>
      <figcaption>
        <dl>
          <Link to={`/pants/${pantsItem.course}`}><dt>{pantsItem.name}</dt></Link>
          <dd>{pantsItem.price1.toLocaleString('ko-kr')}원</dd>
        </dl>
      </figcaption>
    </figure>
  )
}

export default PantsProduct;