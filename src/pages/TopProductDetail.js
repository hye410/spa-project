import Nav2 from '../components/Nav2';
import DetailOption from '../components/DetailOption';
import Review from '../components/Review';
import './css/ProductDetail.css';
import './jquery/ProductDetail-jq.js';
import { Link, useParams } from 'react-router-dom';
import { courseByDetail } from '../api/api';
import { useState } from 'react';
import topData from '../api/top.json';

function TopProductDetail(){
  const[toggle,setToggle] = useState(false);
  const {courseDetail} = useParams();
  const course = courseByDetail(topData,courseDetail);
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
    <Nav2 />
    <article id="DetailPRO">
      <h3>
        <Link to="/">Home</Link>/
        <Link to ={`/${course.kind}`}>{course.kind}</Link>/
        {course.name}
      </h3>
      <DetailOption
      key={course.id}     
      course = {course}
      />
      <section className="detail">
        <h4>
          <ul>
            <li><a href="#proDetail">상품상세&nbsp;</a></li>/
            <li><a href="#delivery">&nbsp;배송 및 반품&nbsp;</a></li>/
            <li><a href="#review">&nbsp;상품리뷰</a></li>
          </ul>
        </h4>
        <div id="proDetail"><img src={course.detailImg} alt={course.name}/></div>      
      </section>

      <section id="delivery">
        <h4><img src="/images/delivery.png" alt="delivery" /></h4>
      </section>

      <section className="review">
        <h4 id="review">Review<b>({course.review.length})</b></h4>
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
          reviewList.map((review,index) => <Review key={index} review={review}/>)
        }     
      </section>
    </article>
    </>
  )
}

export default TopProductDetail;