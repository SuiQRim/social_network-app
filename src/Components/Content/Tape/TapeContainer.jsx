import { connect } from 'react-redux';
import { compose } from 'redux';
import Tape from './Tape';

const mapStateToProps = (state) => {
    return {
        tape : state.tape
    }

}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps))
    (Tape);
