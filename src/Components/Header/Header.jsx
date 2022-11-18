import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

function Header(props) {
    let name = props.name ? props.name: <NavLink to={'/login'}>Login</NavLink>;
    return (
      <div className={s.header}>
        <div className={s.account}>
          <div className={s.name}>{name}</div>
        </div>
      </div>
    );
  }
  
export default Header;
  