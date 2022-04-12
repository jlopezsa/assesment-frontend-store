import { NavLink } from 'react-router-dom';
import {
  ROUTE_HOME,
  ROUTE_ABOUT,
} from '../../routes/routes';
import './NavBar.scss';

function NavBar() {
  return (
    <div className="contNavBar">
      <nav className="horizontalBar">
        <ul className="horizontalBar__list">
          <NavLink className="horizontalBar__list--link" to={ROUTE_HOME}> Home </NavLink>
          <NavLink className="horizontalBar__list--link" to={ROUTE_ABOUT}> About </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
