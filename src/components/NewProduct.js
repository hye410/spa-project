import { Link } from "react-router-dom";
import './css/NewProduct.css';

function NewProduct({newItem}){
  
  return(
    <figure>
      <Link to={`/new/${newItem.course}`}>
        <img src= {newItem.imgUrl} alt={newItem.name} />
      </Link>
      <figcaption>
        <dl>
          <Link to={`/new/${newItem.course}`}>
            <dt>{newItem.name}</dt>
          </Link>
          <dd>{newItem.price1.toLocaleString('ko-kr')}원</dd>
        </dl>
      </figcaption>
    </figure>
  )
}

export default NewProduct;