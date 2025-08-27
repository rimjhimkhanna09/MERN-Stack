import {useState} from 'react'

export default function Contact() {
  const[data, setData] = useState('') //string
  const [names , setName] = ([])
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(`you enterer ${data}`)
    //alert("Data")
    //set names
    setName([...names, data])

    setData('')
  }

  return (
    <> 
    <h2>This is Contact page </h2>

    <form onSubmit={handleSubmit}>
      <label>Name : <input type='text' 
      placeholder='Enter your name' 
      value={data}  
      onChange={ e => setData(e.target.value)}
      required />
       </label>
       <button type='submit'> Submit</button>
    </form>
    <h3>The names enteed are </h3>
    <ul>
      {names.map((hii)=>(
        <li> {hii} </li>
      ))}
    </ul>
    </>
  )
}
