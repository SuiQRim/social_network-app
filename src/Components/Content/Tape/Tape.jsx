import tStyle from './Tape.module.css'
import TapeItem from './TapeItem/TapeItem';

function Tape(props) {

    let posts = props.tape.map(p => <TapeItem key={p.id} post={p}/>)

    return (
        <div className={tStyle.header}>
            {posts}
        
        </div>
    );
}

export default Tape;
