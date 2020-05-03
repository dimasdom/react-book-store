import {ADD_TO_CART, DELETE_FROM_CART} from "../actions/ActionTypes";

export interface CartReducerType {
    id:number
    coverUrl:string
    name:string
    price:number
    count:number

}
export interface ReducerActionType{
    type:string
    payload:CartReducerType
}
let initialState:Array<CartReducerType>=[]
let CartReducer = (state= initialState,action:ReducerActionType)=>{
    switch (action.type) {
        case ADD_TO_CART :{
            return [...state,action.payload]
        }
        case DELETE_FROM_CART :{
            return state.filter(book=>book.id !== action.payload.id)
        }
        default:return state
    }
}

export default CartReducer