import { connect } from 'react-redux';
import Tape from './Tape';

const mapStateToProps = (state) => {
    return {
        tape : state.tape
    }

}

const mapDispatchToProps = (dispatch) => {
    return {}
}

let TapeContainer = connect(mapStateToProps, mapDispatchToProps)(Tape);


export default TapeContainer;
