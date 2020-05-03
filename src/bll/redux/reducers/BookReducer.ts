import { FETCH_BOOK } from "../actions/ActionTypes"

export interface BookReducerType {
    id:number
    coverUrl:string
    name:string
    price:number
    about:string

}
export interface CurrentBookActionType {
    type:string
    payload:BookReducerType
}
let initialstate:BookReducerType|object = {}
let BookReducer = (state=initialstate,action:CurrentBookActionType) =>{
    switch (action.type) {
        case FETCH_BOOK:{
            return{
                ...state,
                id:action.payload.id,
                coverUrl:action.payload.coverUrl,
                name:action.payload.name,
                price:action.payload.price,
                about:action.payload.about
            }
        }
        default :return state
    }
}

export default BookReducer