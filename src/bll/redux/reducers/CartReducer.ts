import {ADD_TO_CART} from "../actions/ActionTypes";

interface CartReducerType {
    coverUrl:string
    name:string
    price:number
    count:number

}
let initialState:Array<CartReducerType>=[]
let CartReducer = (state= initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART :{
            return{
                ...state,
                coverUrl:action.cover,
                name:action.name,
                price:action.price,
                count:action.count

            }
        }
        default:return state
    }
}