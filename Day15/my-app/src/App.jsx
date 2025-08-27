import './App.css'
import Safe from './Safe'
import Danger from './Danger';
import Person from './Person';


function App() {
   const speed = 50;
  return(
    <>
    <Person name="Rimjhim" />
   

    {speed < 60 ? <Safe/> : <Danger/>}
    </>  
  )
}
export default App
