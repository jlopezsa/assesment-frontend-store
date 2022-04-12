import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage';
import AboutPage from '../pages/AboutPage';
import {
  ROUTE_HOME,
  ROUTE_PRODUCT_DETAIL,
  ROUTE_ABOUT,
} from './routes';

function MainRouter() {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
      <Route path={ROUTE_PRODUCT_DETAIL} element={<ProductDetailPage />} />
      <Route path={ROUTE_ABOUT} element={<AboutPage />} />
    </Routes>
  );
}

export default MainRouter;
