import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import { ShopingCart } from './features/shopingCart';
import Cart from './features/Cartt';
import Description from './features/DescriptionData';
import { Header } from './features/Header';
import { MenCloth } from './features/categories/MenCloth';
import WomenCloth from './features/categories/WomenCloth';
import Jewellery from './features/categories/Jewellery';
import Electronic from './features/categories/Electronic';

function App() {
  return (
    <>
<Router>
<Header/>
  <Routes>
    <Route exact path="/" element={<ShopingCart/>}>
    </Route>
    <Route exact path="/cart" element={<Cart/>}>

    </Route>
    <Route exact path="/description" element={<Description/>}>
      
    </Route>
    <Route exact path="/men-clothing" element={<MenCloth/>}>
      
      </Route>

     <Route exact path="/women-clothing" element={<WomenCloth/>}>
      
    </Route>

     <Route exact path="/jewellery" element={<Jewellery/>}>
      
    </Route>

     <Route exact path="/electronics" element={<Electronic/>}>
      
    </Route>
      
  </Routes>
</Router>
    </>
  );
}

export default App;
