function Pagination({pages,postsPerPage,totalPages}){

  const pageNum = [];
  for(let i = 1; i <= Math.ceil(totalPages/postsPerPage); i++){
    pageNum.push(i)
  }

  return(
    <ul className="page">
      {
        pageNum.map(num => 
        <li key={num} onClick={()=>pages(num)}>
          {num}
        </li>
        )
      }
    </ul>
  )
}

export default Pagination;