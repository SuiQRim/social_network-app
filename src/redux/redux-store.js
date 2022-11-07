import {combineReducers, legacy_createStore as createStore} from "redux"; 
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import tapeReducer from "./tape-reducer";

let reducers = combineReducers(
    {
        profile : profileReducer,
        messenger : messagesReducer,
        tape: tapeReducer
    }
);

let store = createStore(reducers);

export default store;