import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import {
  ROUTE_HOME,
} from './routes';

function MainRouter() {
  <Routes>
    <Route path={ROUTE_HOME} element={<HomePage />} />
  </Routes>;
}

export default MainRouter;
