// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Profile from './components/Profile/Profile';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';

function App() {
  const[cart,setcart]=useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const updatedcart=[...cart]
  const handleAddToCart = (product,quantity,setQuantity) => {
  const existingItemIndex = updatedcart.findIndex(item => item.id === product.id);
  if (existingItemIndex !== -1) {
        updatedcart[existingItemIndex].quantity += quantity;
        toast.success('Item already in Cart!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } 
else {
        updatedcart.push({ id:product.id,name:product.name, price:product.price,img:product.img,quantity });
        toast.success('Added to Cart!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }
    setcart(updatedcart)
    console.log(updatedcart)
    console.log(`Added ${quantity} of ${product.name} to cart.`);
    setTimeout(()=>setIsModalOpen(false),2000); // Close the modal after adding to cart
    setTimeout(()=>setQuantity(1),2000);//once the product added to cart quantity gets reinitialized to 1
  };
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<ShoppingCart cart={updatedcart} setcart={setcart}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element = {
            <>
              <Hero />
              <Products  handleAddToCart={handleAddToCart} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
              <Slider />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
