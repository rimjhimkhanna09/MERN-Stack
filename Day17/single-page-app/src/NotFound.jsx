import React from 'react'
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <> 
    <div>NotFound</div>
    <h2>404, error</h2>
    <Link to={"/"}>
    <button> Back to home</button>
     </Link>


    </>
  )
}
