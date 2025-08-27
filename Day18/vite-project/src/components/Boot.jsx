import React from 'react'

export const Boot = () => {
  return (
    <div>
<button type="button" className="btn btn-primary">Add</button>
<button type="button" className="btn btn-danger">Close</button> <br /> <br />

<label htmlFor="inputPassword5" className="form-label">Password</label>
<input type="password" placeholder='Enter password'
 className="form-control" />
<button type="button" className="btn btn-primary">Add</button>

<hr/> <hr/>
<table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
</table>



</div>
  )
}
