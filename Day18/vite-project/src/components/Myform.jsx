import { useState } from "react"

export const Myform = () => {
    const [users,setUsers] = useState(
        { username: "",
          useremail : ""}
        )
        const [list,setList] = useState([])

        const handleSubmit=(e)=>{
            e.preventDefault()
           console.log(`The name is ${users.username} and email is ${users.useremail}`)
           setList([...list,users])
           setUsers({
             username: "",  
             useremail : ""  
           })
        }

      
    return (
        <>
        <div className="main">
            <div className='title'>Demo of form handling</div>
            <form onSubmit={handleSubmit}>
            Name : <input
            type='text'
            placeholder='enter name'
            value={users.username}
            onChange={e => setUsers({...users,username: e.target.value}) }
            required /> <br /> <br />
            Email : <input
            type='email'
            value={users.useremail}
            onChange={e => setUsers({...users,useremail: e.target.value})}
            placeholder='enter email'
            required /> <br /> <br />
            <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
        <h2> The Users details are </h2>
        {/* <ol>
        {list.map((u,index)=>(
            <li key={index}> {u} </li>
        ))}
        </ol> */}

        <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {list.map((person,index) =>(
    <tr key={person.index}>
      <th scope="row">{index + 1}</th>
      <td>{person.username}</td>
      <td>{person.useremail}</td>
    </tr>
    ))}
   
  </tbody>
</table>
        </>
    )
}
