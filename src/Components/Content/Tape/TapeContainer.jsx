import { connect } from 'react-redux';
import { compose } from 'redux';
import withRedirectToLogin from '../../../hoc/withRedirectToLogin';
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
    withRedirectToLogin,
    connect(mapStateToProps, mapDispatchToProps))
    (Tape);
