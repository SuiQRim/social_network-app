import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

function Header(props) {

    let name = props.name ? <div className={s.name}>{props.name}</div> : <div className={s.login}><NavLink to={'/login'}>Login</NavLink></div> ;
    return (
      <div className={s.header}>
        <div className={s.account}>
          {props.name && <div className={s.logout}><button onClick={props.logout}>Logout</button></div>}
          {name}
        </div>
      </div>
    );
  }
  
export default Header;
  