import {FETCH_CLASSICAL_BOOKS} from "../actions/ActionTypes";
import {BooksActionType, PopularBooksType} from "./PopularBooksReducer";

let initialState:Array<PopularBooksType> = []
let ClassicReducer = (state=initialState,action:BooksActionType)=>{
    switch (action.type) {
        case  FETCH_CLASSICAL_BOOKS:{
            return[...state,...action.payload]
        }
        default:return state
    }
}

export default ClassicReducer