import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductInfo from './pages/productInfo';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductInfo />} />
      </Routes>
    </>
  );
};

export default App;