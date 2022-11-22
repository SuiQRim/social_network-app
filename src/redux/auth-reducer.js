import { authApi } from "../api/api";

const SET_USER_DATA_AT = "SET_USER_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogin: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA_AT:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }

}


export const setUserData = (userId, email, login, isLogin) => (
    {
        type: SET_USER_DATA_AT,
        data: {
            userId,
            email,
            login,
            isLogin
        }
    })


export const signIn = () => async (dispatch) => {
    const data = await authApi.signIn();
    if (data.resultCode === 0) {
        let user = data.data;
        dispatch(setUserData(user.id, user.email, user.login, true));
    }
}


export const login = (email, password, rememberMe, setErrors) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                authApi.signIn().then(data => {
                    if (data.resultCode === 0) {
                        let user = data.data;
                        dispatch(setUserData(user.id, user.email, user.login, true))
                    }
                })
            }
            else if (data.resultCode === 1) {
                setErrors({ api: 'Почта или пароль введены не верно' });
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }

}
export default authReducer

