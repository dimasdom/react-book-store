import {FETCH_POPULAR_BOOKS} from "../actions/ActionTypes";
export interface PopularBooksType {
    coverUrls: string
    id: number
}
export interface BooksActionType{
    type:string
    payload:Array<PopularBooksType>
}
let initialState:Array<PopularBooksType> =[]
let PopularReducer = (state=initialState,action:BooksActionType)=>{
    switch (action.type) {
        case  FETCH_POPULAR_BOOKS:{
            return [...state,...action.payload]
        }
        default:return state
    }
}

export default PopularReducer