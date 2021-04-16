import React from "react"

function pg(users) {
  let res = [];
  for (let i = 0; i < users.length; i += 5) {
    res = [...res,
    <li key={i} className="page-item">{(i / 5)+1}</li>
    ]
  }
  return res;
}

const Pagination = ({ users }) => {
  console.log(pg(users));
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">Previous</li>
        {pg(users)}
        <li className="page-item">Next</li>
      </ul>
    </nav>
  )
}

export default Pagination