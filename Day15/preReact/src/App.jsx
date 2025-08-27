import './App.css';
import Kids from "./Kids"
import Adults from "./Adults";
import Greet from './Greet';

function App() {
  const favcolor = "pink";
  const age = 22;
  return(

  <> 
  <Greet/>
  <Greet name = "Rimjhim"/>
  <h1>i like react</h1>
  <h3> React iss tricky </h3>
  <h2> {5*8} </h2>
  <h3> My favoursite color is {favcolor} </h3>
  <h2> {age < 18 ?   <Kids/> : <Adults/> }</h2>
  </>
  )
}

export default App
