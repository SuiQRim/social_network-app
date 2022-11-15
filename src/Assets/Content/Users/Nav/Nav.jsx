import style from './Nav.module.css'

function Nav(props) {
    let number = props.number;
    let onSelectChange = () => {
        props.onSelectChange(number);
    }
    return (
        <button onClick={onSelectChange} className={props.isSelected ? style.selectedItem : style.simpleItem}>
            {number}
        </button>
    );
}

export default Nav;
