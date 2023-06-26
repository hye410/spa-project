import './css/Review.css';

function Review({review}){


  function date(d){
    const day = new Date(d);
    return `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`
  }
  

  return(
    <dl>
      <dl>
        <dt>작성자</dt>
        <dd>{review.name}</dd>
      </dl>
      <dl>
        <dt>작성일</dt>
        <dd>{date(review.date)}</dd>
      </dl>
      <dl>
        <dt>평점</dt>
        <dd>{review.rating1}</dd>
      </dl>
      <dl>
        <dt>내용</dt>
        <dd>{review.text}</dd>
      </dl>
    </dl>
  )
}

export default Review;