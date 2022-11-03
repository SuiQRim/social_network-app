import { NavLink } from 'react-router-dom';
import nav from './Navigation.module.css'
import NavItem from './NavItem/NavItem';

function Navigation() {
  return (
    <div className={nav.panel}>

      <NavLink className={nav.link} to='/profile'><NavItem title="Профиль"/></NavLink>
      <NavLink className={nav.link} to='/tape'><NavItem title="Лента"/></NavLink>
      <NavLink className={nav.link} to='/messenger'><NavItem title="Мессенджер"/></NavLink>
    </div>
  );
}

export default Navigation;
