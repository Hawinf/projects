import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Product from './page/product/product';
import Rice from './page/product/rice/Rice';
import Powder from './page/product/powder/Powder';
import Sugar from './page/product/sugar/Sugar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/products' element={<Product />} />
      <Route path='/rice' element={<Rice />} />
      <Route path='/sugar' element={<Sugar />} />
      <Route path='/powder' element={<Powder />} />
    </Routes>
  );
}

export default App;
