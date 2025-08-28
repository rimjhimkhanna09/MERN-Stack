import List from './Components/List'
import Create from './Components/Create'
import Update from './Components/Update'
import './App.css'
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'

export default function App(){
  return(
    <Router>
    <div className='container mt-4'> 
      <h1 className='text-center mb-b'>Book Manager</h1>
      <nav className='mb-4'>
        <Link to="/" className='btn btn-primary me-2'>Book List</Link>
        <Link to="/create" className='btn btn-success'>Add Book </Link>
      </nav>

      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>

    </div>
    </Router>
  )
}
