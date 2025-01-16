import Signup from "./components/Signup"
import './App.css';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from "./components/Products";
import Order from "./components/Order";
function App() {

  return (
    <>
<Navbar/>
<Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/order" element={<Order/>} />
        {/* <Route path="/add-product" element={<Addproduct/>} /> */}
      </Routes>
</Router>

 
 </>
  )
}

export default App
