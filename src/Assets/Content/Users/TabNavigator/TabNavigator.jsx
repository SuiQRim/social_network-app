import Nav from './Nav/Nav';
import s from './TabNavigator.module.css'

function TabNavigator(props) {

    let pages = [];

    let max = props.pagesCount > props.diapasone ? props.diapasoneStart + props.diapasone - 1 : props.pagesCount;


    for (let i = props.diapasoneStart; i <= max; i++) {
        pages.push(
            <Nav key={i} onSelectChange={props.onPageChanged} number={i} isSelected={i === props.selectedPage} />
        );
    }

    return (
        <div>

            <Nav onSelectChange={props.onPageChanged} number={1} isSelected={1 === props.selectedPage} />
            
            <button className={s.but} onClick={() => props.onPageChanged(props.selectedPage - 1)}>◄</button>

            {pages}

            <button className={s.but} onClick={() => props.onPageChanged(props.selectedPage + 1)}>►</button>

            <Nav onSelectChange={props.onPageChanged} number={props.pagesCount} isSelected={props.pagesCount === props.selectedPage} />
        </div>
    );
}

export default TabNavigator;