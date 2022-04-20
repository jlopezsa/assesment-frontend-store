import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import AboutPage from '../pages/AboutPage';
import {
  ROUTE_HOME,
  ROUTE_PRODUCT_DETAIL,
  ROUTE_ABOUT,
} from './routes';

function MainRouter() {
  const [productDetails, setProductDetail] = useState({});
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage onHandleChange={setProductDetail} />} />
      <Route
        path={ROUTE_PRODUCT_DETAIL}
        element={<ProductDetailPage productDetails={productDetails} />}
      />
      <Route path={ROUTE_ABOUT} element={<AboutPage />} />
    </Routes>
  );
}

export default MainRouter;
