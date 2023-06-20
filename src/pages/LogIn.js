import './css/LogIn.css';

function LogIn(){

  return(
    <>
    <article id="login">
    <h3>회원 로그인</h3>

    <form action="/" method="post">
      <label htmlFor="userId" className="hide">회원 로그인</label>
      <input type="text" id="userId" placeholder="아이디 입력" />
      <label htmlFor="userId" className="hide">회원 비밀번호</label>
      <input type="password" placeholder="비밀번호 입력" />      
    </form>
    <div className="find">
      <ul>
        <li>아이디 찾기 /&nbsp;</li>
        <li>비밀번호 찾기</li>
      </ul>
    </div>
    <p>
      <button type="submit" >로그인</button>
    </p>
    </article>
    </>
  )
}

export default LogIn;