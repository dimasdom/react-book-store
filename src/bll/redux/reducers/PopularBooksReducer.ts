import {FETCH_POPULAR_BOOKS} from "../actions/ActionTypes";
export interface PopularBooksType{
    coverUrls:Array<string>
}
let initialState:PopularBooksType ={coverUrls:[]}
let PopularReducer = (state=initialState,action)=>{
    switch (action.type) {
        case  FETCH_POPULAR_BOOKS:{
            return{
                ...state,
                coverUrls:action.payload
            }
        }
        default:return state
    }
}

export default PopularReducer