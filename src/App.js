import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListPage from './page/ListPage';
import HeaderLayout from './layouts/HeaderLayout';
import ProductPage from './page/ProductPage';
import NotFoundPage from './page/NotFoundPage';
import FilterLayout from './layouts/FilterLayout';
import BasketLayout from './layouts/BasketLayout';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route element={<BasketLayout/>}>
        <Route path='/' element={<FilterLayout />}>
            <Route index element={<ListPage />} />
        </Route>
        <Route path='/product/:id' element={<ProductPage />} />
        </Route>
        <Route path="/product*" element={<NotFoundPage/>} />
      </Route>
      <Route path="/*" element={<NotFoundPage/>} />
    </Routes>  
    </div>
  );
}

export default App;
