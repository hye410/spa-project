import Nav from '../components/Nav';
import Nav2 from '../components/Nav2';
import DetailOption from '../components/DetailOption';
import Review from '../components/Review';
import './css/ProductDetail.css';
import { Link, useParams } from 'react-router-dom';
import { courseByDetail } from '../api/api';
import { useState } from 'react';

function ProductDetail(){
  const[toggle,setToggle] = useState(false);
  const {courseDetail} = useParams();
  const course = courseByDetail(courseDetail);
  const [sortBy,setSortBy] = useState('date');

const sumRating = course.review.reduce((acc,{rating1})=>{
  return acc = acc+= rating1
},0)

const averageRating = (sumRating / (course.review.length)).toFixed(1);

const reviewList = course.review.sort((a,b) => {return(
  sortBy === 'rating1' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
)});


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
        <div><img src={course.detailImg} alt={course.name}/></div>      
      </section>

      <section className="review">
        <h4>Review<b>({course.review.length})</b></h4>
        <p>
         <span>리뷰 평점</span>
         <span>{averageRating}점<i>/5점</i></span>
        </p>     
        <div onClick={()=>setToggle(!toggle)}>
          <p>정렬</p>
          <ul>
              {
                toggle !== false ?
                <>
                <li onClick={()=>setSortBy('date')}>최신순</li>
                <li onClick={()=>setSortBy('rating2')}>평점 높은순</li>
                <li onClick={()=>setSortBy('rating1')}>평점 낮은순</li>
                </>
                : null
              }
          </ul>
        </div>

        {
          reviewList.map(review => <Review review={review}/>)
        }     
      </section>
    </article>
    </>
  )
}

export default ProductDetail;