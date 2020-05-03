import {BooksActionType, PopularBooksType} from "../reducers/PopularBooksReducer";
import {BookReducerType, CurrentBookActionType} from "../reducers/BookReducer";
import {CartReducerType, ReducerActionType} from "../reducers/CartReducer";

export const FETCH_POPULAR_BOOKS:string = "FETCH_POPULAR_BOOKS"
export const FETCH_CLASSICAL_BOOKS:string = "FETCH_CLASSICAL_BOOKS"
export const FETCH_BOOK:string = "FETCH_BOOKS"
export const ADD_TO_CART:string = "ADD_TO_CART"
export const DELETE_FROM_CART:string = "DELETE_FROM_CART"


export const fetchPopularBooks =(Books:Array<PopularBooksType>):BooksActionType=>({type:FETCH_POPULAR_BOOKS,payload:Books})
export const fetchClassicBooks =(Books:Array<PopularBooksType>):BooksActionType=>({type:FETCH_CLASSICAL_BOOKS,payload:Books})
export const fetchCurrentBook = (Book:BookReducerType):CurrentBookActionType=>({type:FETCH_BOOK,payload:Book})
export const addToCart =(Book:CartReducerType):ReducerActionType=>({type:ADD_TO_CART,payload:Book})
export const deleteFromCart =(Book:CartReducerType):ReducerActionType=>({type:DELETE_FROM_CART,payload:Book})