import { useEffect, useState } from "react";

function Toy(){
  

  const [count,setCount] = useState(0);

  useEffect(()=>{
   console.log('useEffect')
  },[]);

  return(
    <div>
      <p>state : {count}</p>
      <button onClick={()=>setCount(count+ 1)}>count 증가</button>
    </div>
  )
}

export default Toy;