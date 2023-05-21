import { useState } from "react";

function Toy(){
  const data = [
    {id : 0, title:'선택1'},
    {id : 1, title:'선택2'},
    {id : 2, title:'선택3'},
    {id : 3, title:'선택4'},
  ];

  const [checkItems,setCheckItems] = useState([]);


  const handleSingleCheck = (checked,id) => {
    if(checked){
      setCheckItems(prev => [...prev, id]);
    }else{
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  }

  const handleAllCheck = (checked) => {
    if(checked){
      const idArray =[];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }else{
      setCheckItems([]);
    }
  }
  return(
    <>
    <thead>
    <tr>
      <th>
        <input type='checkbox' name='select-all'
          onChange={(e) => handleAllCheck(e.target.checked)}
          // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
          checked={checkItems.length === data.length ? true : false} />
      </th>
      <th className='second-row'>목록</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((data, key) => (
      <tr key={key}>
        <td>
          <input type='checkbox' name={`select-${data.id}`}
            onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
            checked={checkItems.includes(data.id) ? true : false} />
        </td>
        <td className='second-row'>{data.title}</td>
      </tr>
    ))}
  </tbody>
  </>
  )
}

export default Toy;