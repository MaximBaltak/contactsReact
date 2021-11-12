import {combineReducers, createStore} from "redux";
import contactsReducer from "./reducers/contactsReducer";

let reducers = combineReducers({
    contacts: contactsReducer
})
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store


