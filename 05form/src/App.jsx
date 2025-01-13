import Signup from "./components/Signup"
import './App.css';
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
    <>
    
<Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
</Router>

  </>
  )
}

export default App
