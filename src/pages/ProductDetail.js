import Nav from '../components/Nav';
import Nav2 from '../components/Nav2';
import DetailOption from '../components/DetailOption';
import Review from '../components/Review';
import './css/ProductDetail.css';
import { Link, useParams } from 'react-router-dom';
import { courseByDetail } from '../api/api';

function ProductDetail(){

  const {courseDetail} = useParams();
  const course = courseByDetail(courseDetail);
  // console.log(course)

  return(
    <>
    <Nav />
    <Nav2 />
    <article>
      <h3>
        <Link to="/">Home</Link>/
        {course.kind}/{course.name}
      </h3>
      <DetailOption
      key={course.id}     
      course = {course}/>
      <section className="detail">
        <h4>상품상세 / 배송 및 반품 / 상품리뷰</h4>
        <div><img /></div>      
      </section>

      <section className="review">
        <h4>Review(리뷰개수)</h4>
        <div>
          <p>
            <span>리뷰평점</span>
            <span>상품 리뷰 작성하기</span>
          </p>
        </div>
        <ul>
          <li>최신순</li>
          <li>별점순</li>
        </ul>
        <p>
          <select>별점</select>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </p>
        <Review />
      </section>
    </article>
    </>
  )
}

export default ProductDetail;