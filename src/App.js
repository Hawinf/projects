import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Product from './page/product/product';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/products' element={<Product />} />
    </Routes>
  );
}

export default App;
