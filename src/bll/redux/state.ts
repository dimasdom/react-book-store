import {createStore,combineReducers,applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import PopularReducer from "./reducers/PopularBooksReducer";
import ClassicReducer from "./reducers/ClassicBooksReducer";
import BookReducer from "./reducers/BookReducer";
import CartReducer from "./reducers/CartReducer";
import thunk from "redux-thunk";
let state = createStore(combineReducers({
    Popular:PopularReducer,
    Classic:ClassicReducer,
    Book:BookReducer,
    Cart:CartReducer

}),composeWithDevTools(applyMiddleware(thunk)))

export default state