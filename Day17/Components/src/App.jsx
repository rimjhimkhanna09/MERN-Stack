import './App.css';
import {Cards} from './components/Cards';
//import {Cards} from './src/components/Cards';
import bowler from './assets/download.jpeg';
import batsman from './assets/download.jpeg';
import hitman from './assets/download.jpeg';


function App() {

  return (
    <>
    <h1> Welcome to components </h1>
    <Cards pic = {bowler} title="Indian team" desc="A"/>
    <Cards pic = {batsman} title="Indian team" desc="A" />
    <Cards pic = {hitman} title="Indian team" desc="A" />
    <Cards/>
    </>
      
  )
}

export default App
