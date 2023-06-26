import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'
import FloatingWhatsAppIcon from './Components/FloatingWhatsAppIcon';
import { Navbar } from './Components/Navbar';
import { ShopContextProvider } from './Context/shop-context';
import { Cart } from './Pages/Cart/Cart';
import { Shop } from './Pages/Shop/Shop';

const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>

        </Routes>
      </Router>
      </ShopContextProvider>
      <FloatingWhatsAppIcon/>
    </div>
  );
}

export default App;
