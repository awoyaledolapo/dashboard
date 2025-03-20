import React from 'react'
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div>
      <p>this is the Products</p>
      <Link className='underline' to="/" >go to Dashboard</Link>
    </div>
  )
}

export default Products