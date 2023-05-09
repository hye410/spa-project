import Nav from '../components/Nav';
// import Nav2 from '../components/Nav2';
import './css/About.css';

function About(){
  return(
    <>
    <Nav />
    <article id="about">
      <h3>브랜드소개</h3>
      <section id="about1">
        <h4>Brand story</h4>
        <ul>
          <li>VALUE</li>
          <li>+</li>
          <li>SERVICE</li>
          <li>+</li>
          <li>SPEED</li>
          <li>+</li>
          <li>SIMPLICITY</li>
        </ul>
        <div>
          가성비, 서비스, 스피드, 단순화 라는 4가지 비즈니스 철학을 바탕으로 한국에서 1994년 첫 선을 보인 지오다노는 국내 의류 업계의 신화로 일컬어지며 캐주얼패션 유통 소매 산업의 선두주자로 지속적인 성장을 보이고 있습니다.
        </div>
        <figure>
          <img src="/images/about-main.jpg" alt="about" />
          <figcaption>
            <dl>
              <dt>
                <span>1.</span>
                <span>SYSTEM</span>
              </dt>
              <dd>
              지오다노는 단순 패션업체가 아니라
              시스템에 기초한 의류 유통 판매업체이며,
              패션 뿐 아니라 기획, 물류, 판매 시스템 운영의
              강점을 두고 있습니다. 또한 데이터 베이스
              시스템 경영으로 국내에서 가장 우수한
              재고 효율을 유지하고 있습니다.
              </dd>
            </dl>
            <dl>
              <dt>
                <span>2.</span>
                <span>PRODUCT</span>
              </dt>
              <dd>
              지오다노는 강력한 글로벌 소싱 인프라를
              통해 뛰어난 퀄리티와 경쟁력 있는
              가격을 제공하며, 오랜 기간 축적된 브랜드
              운영의 노하우를 바탕으로 트렌드를 반영한
              매력적인 상품 포트폴리오를
              유지하고 있습니다.
              </dd>
            </dl>
            <dl>
              <dt>
                <span>3.</span>
                <span>Giordano Makes you feel good&look great</span>
              </dt>
              <dd>
              지오다노는 브랜드가 지향하는 밝고
              건강하고 깨끗하면서도 세련된 이미지를
              고객과 만나는 모든 접점에서 구현하기 위해
              노력합니다. 이를 위해 제품의 디자인과 퀄리티는
              물론, 매장 디스플레이, 서비스 그리고
              마케팅까지통합 솔루션을 개발,제공하고 있습니다.
              </dd>
            </dl>
          </figcaption>
        </figure>
      </section>
      <section id="about2">
        <h4>Brand history</h4>
        <div>
          <ul>
            <li>1994</li>
            <li>1999</li>
            <li>2001</li>
            <li>2011</li>
            <li>현재</li>
          </ul>
          <ul>
            <li><span></span><span></span><span></span></li>
            <li><span></span><span></span><span></span></li>
            <li><span></span><span></span><span></span></li>
            <li><span></span><span></span><span></span></li>
            <li><span></span><span></span><span></span></li>
          </ul>
          <ul>
            <li>(주)지오다노 설립</li>
            <li>백화점 바이어가 뽑은<br />최고 브랜드선정</li>
            <li>단일 브랜드 최고 매출액 달성</li>
            <li>
              브랜드 'CONCEPTS 1ONE' 런칭
              <span>
                한국 경제매거진, 대한민국<br /> BEST 패션 브랜드 선정
              </span>
            </li>
            <li>23년 연속 흑자경영</li>
          </ul>
        </div>
      </section>
    </article>
    </>
  )
}

export default About;