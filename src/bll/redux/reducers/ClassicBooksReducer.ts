import {FETCH_CLASSICAL_BOOKS} from "../actions/ActionTypes";
import {PopularBooksType} from "./PopularBooksReducer";

let initialState:PopularBooksType = {}
let ClassicReducer = (state=initialState,action)=>{
    switch (action.type) {
        case  FETCH_CLASSICAL_BOOKS:{
            return{
                ...state,
                coverUrls:action.payload
            }
        }
        default:return state
    }
}

export default ClassicReducer