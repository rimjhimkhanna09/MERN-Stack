import { useState } from 'react'
import './App.css'

export default function App() {
  const [task, setTask] = useState('')
  const [todo, setTodo] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleClick = () => {
    if(task.trim() === ""){
      alert("no blanks")
      return 
    }
    if(editIndex !== null){
      const updated = [...todo]
      updated[editIndex] = task
      setTodo(updated)
      setEditIndex(null)
    }else{
      setTodo([...todo,task])
    }
    //console.log("did you clicked?")
    setTask('')
  }
u7
    function theDelete(index){
    const newTodo = todo.filter((_,i) => i !== index)
    setTodo(newTodo)
    }


  return (
    <div>
      <h1>To Do List </h1>
      <input type='text'
      placeholder='enter task....'
      value={task}
      onChange={e => setTask(e.target.value)}/>
      <button onClick={handleClick}>
        {editIndex !==null ? 'Update':'ADD' } </button>
      <ol>
        {todo.map((work,index)=>(
          <li key={index}>{work}
          <button onClick={() =>{setTask(todo[index]);
            setEditIndex(index)
          }}>
           Edit </button>
          <button onClick={() => theDelete(index)}> Delete </button>
          </li>
        ))}
      </ol>

    </div>
  )
}
