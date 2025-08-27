import { useState } from 'react'

export default function About() {
  const [count, setcount] = useState(45)

  function add() {
    setcount(count + 1)
  }
  function less() {
    setcount(count - 1)
  }
  function reset() {
    setcount(0)
  }
  return (
    <> 

    <h2>This is About page </h2> 
    <h3> Counter value :  {count} </h3>
    <button onClick={add}> + </button> &nbsp;
     <button onClick={reset}> reset </button>
    <button onClick={less} disabled={count===0}> - </button>
    </>
  )
}
