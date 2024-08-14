
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Onepagedata from './components/Onepagedata'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/rigister' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />}>
            <Route path='./Onepagedata' element={<Onepagedata />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
