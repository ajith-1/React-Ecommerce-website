import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import ProductDetials from './Pages/ProductDetials/ProductDetials';
import Login from './Components/Login/Login';
import CheckOut from './Pages/CheckOut/CheckOut';
import Cart from './Pages/Cart/Cart';
import FavoriteProduct from './Pages/FavoriteProduct/FavoriteProduct';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/productdetials/:category/:id' element={<ProductDetials/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/favorite' element={<FavoriteProduct/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
