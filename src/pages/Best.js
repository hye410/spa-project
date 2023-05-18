import BestProduct from '../components/BestProduct';
import "./css/Best.css";

function Best(){

  return(
    <>
    <article>
        <h3>Home/title</h3>
      <section>
        <h4><img src="./images/best-logo.jpg" alt="bestLogo" /></h4>
        <div>
          <p>55 Items</p>
          <ul>
            <li>
              <label htmlFor="color">컬러</label>
              <ul className="color">
                <li>all</li>
              </ul>
            </li>
            <li>
              <label htmlFor="sort">정렬</label>
              <ul className="sort">
                <li>all</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bestList">
          <BestProduct />
        </div>
      </section>
    </article>
    </>
  )
}

export default Best;