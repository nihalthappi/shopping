
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import ProductList from './page/ProductList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/productlist" element={<ProductList />}/>
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  );
}

export default App;
