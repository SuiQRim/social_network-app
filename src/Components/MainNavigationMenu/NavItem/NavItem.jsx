import NavItemStyle from "./NavItem.module.css"

function NavItem(props) {
    return (
      <div className={NavItemStyle.navItem}>
        <button>{props.title}</button>
      </div>
    );
  }
  
  export default NavItem;