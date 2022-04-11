import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import {
  ROUTE_HOME,
} from './routes';

function MainRouter() {
  <BrowserRouter>
    <Routes>
      <Route path={ROUTE_HOME} element={<HomePage />} />
    </Routes>
  </BrowserRouter>;
}

export default MainRouter;
