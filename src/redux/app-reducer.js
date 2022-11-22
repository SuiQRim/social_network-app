import { signIn } from "./auth-reducer";

const INITIALIZE_FINISH_AT = 'INITIALIZE_FINISH';


let initialState = {
    isInitialazeFinish: false
}

export const InitializeFinish = (isFinish) => {
    return {
        type: INITIALIZE_FINISH_AT,
        isFinish
    }
}


let appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZE_FINISH_AT:
            return {
                ...state,
                isInitialazeFinish: action.isFinish
            }

        default:
            return state;
    }
}


export const Initialize = () => (dispatch) => {

    let promise = dispatch(signIn());

    promise.then(() => {
            dispatch(InitializeFinish(true))
        })

}



export default appReducer