import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import AboutPage from '../pages/AboutPage';
import {
  ROUTE_HOME,
  ROUTE_PRODUCT_DETAIL,
  ROUTE_ABOUT,
} from './routes';

const productDetails = {
  name: 'camisa',
  value: 1200,
};

function MainRouter() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
      <Route
        path={ROUTE_PRODUCT_DETAIL}
        element={<ProductDetailPage productDetails={productDetails} />}
      />
      <Route path={ROUTE_ABOUT} element={<AboutPage />} />
    </Routes>
  );
}

export default MainRouter;
