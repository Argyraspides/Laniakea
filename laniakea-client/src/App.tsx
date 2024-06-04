import './App.css'
import Homepage from './Components/Pages/Homepage/Homepage'
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
