import {combineReducers, legacy_createStore as createStore} from "redux"; 
import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import tapeReducer from "./tape-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers(
    {
        profile : profileReducer,
        messenger : messagesReducer,
        tape: tapeReducer,
        users : usersReducer,
        auth : authReducer
    }
);

let store = createStore(reducers);


window.store = store;
export default store;