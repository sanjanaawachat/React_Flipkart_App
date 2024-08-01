
import './App.css';
import './style.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/Product';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import GoToTopButton from './Components/GotoTopbtn';
// import Header from './Components/Header';


function App() {





  return (
<>
<Navbar/>

    <Routes>
  
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route exact path="/products/:id" element={<Product/>} />
      <Route exact path="/pricing" element={<Pricing/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/cart" element={<Cart/>} />

    </Routes>
    <Footer/>
    <GoToTopButton/>
      {/* <Home/> */}
  </>
  );
}

export default App;
