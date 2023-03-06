import Nav from '../components/Nav';
import './css/LogIn.css';
import $ from 'jquery';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

function LogIn(){

  const [userId,setUserId] = useState(''); //쿠키에 저장하여 사용할 값
  const [cookies, setCookie, removeCookie] =useCookies(['rememberUserId']); //쿠키 이름
  const [isRemember, setIsRemember] = useState(false); //아이디 저장 체크박스 체크 유무

  useEffect(()=>{
    //저장된 쿠키값이 있으면 체크박스 true 및 user id에 값 셋팅
    if(cookies.rememberUserId !== undefined){
      setUserId(cookies.rememberUserId);
      setIsRemember(true);
    }
  },[]);

  const handleOnChange = (e) => {
    setIsRemember(e.target.checked);
    if(!e.target.checked){
      removeCookie('rememberUserId');
    }
  }
  

  return(
    <>
    <Nav />
    <article id="login">
    <h3>회원 로그인</h3>

    <form action="/" method="post">
      <label for="userId" className="hide">회원 로그인</label>
      <input type="text" id="userId" defaultValue={userId} onChange={(e) => setUserId(e.target.value)} placeholder="아이디 입력" />
      <label for="userId" className="hide">회원 비밀번호</label>
      <input type="password" placeholder="비밀번호 입력" />      
    </form>
    <div className="find">
      <p>
        <input type="checkbox" className="saveId" onChange={(e)=>handleOnChange(e)} checked={isRemember} id="saveId" name="saveId" />
        <label for="checkId">아이디 저장</label>
      </p>
      <ul>
        <li>아이디 찾기 /&nbsp;</li>
        <li>비밀번호 찾기</li>
      </ul>
    </div>
    <p>
      <button type="submit">로그인</button>
    </p>
    </article>
    </>
  )
}

export default LogIn;