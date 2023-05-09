import { Link } from "react-router-dom";

function BestProduct(){
  return(
    <figure>
      <Link to="/best/courseDetail">
        <img src= "./images/home-tops.jpg" alt="상품이름" />
      </Link>
      <figcaption>
        <dl>
          <Link to="/best/courseDetail"><dt>상품명</dt></Link>
          <dd>설명</dd>
          <dd>가격<del>할이전가격</del></dd>
        </dl>
      </figcaption>
    </figure>
  )
}

export default BestProduct;