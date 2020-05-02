import {createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
let state = createStore(combineReducers({
    Popular:
    Classic:
    Book:
    Cart:

}),composeWithDevTools(applyMiddleware(thunk)))