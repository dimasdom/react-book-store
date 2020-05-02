import { FETCH_BOOK } from "../actions/ActionTypes"

interface BookReducerType {
    coverUrl:string
    name:string
    price:number
    about:string

}
let initialstate:BookReducerType|object = {}
let BookReducer = (state=initialstate,action) =>{
    switch (action.type) {
        case FETCH_BOOK:{
            return{
                ...state,
                coverUrl:action.cover,
                name:action.name,
                price:action.price,
                about:action.price

            }
        }
        default :return state
    }
}