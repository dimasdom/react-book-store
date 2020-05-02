import React, {useState} from 'react'
import {Link, RouteComponentProps} from '@reach/router'
interface genretype {
    genre:string
    type:string
}
let Genre:React.FC<genretype> = ({genre,type})=>{
    return(
        <div>
            <Link to={`${type}/${genre}`}>
            <span></span>
            <p>{genre}</p>
            </Link>
        </div>
    )
}

let Main:React.FC<RouteComponentProps> = () =>{
    let Genres:Array<string> = []
    return(
        <div>
            <div className="w-1/2 FictionBack">
                <p>Fiction</p>
                <p>Fiction</p>
                <div>
                {
                    Genres!.map(genre=> {
                        return (<Genre genre={genre} type={"fiction"}/>)
                    })
                }
                </div>
            </div>
            <div className="w-1/2 NFictionBack">
                <p>NON</p>
                <p>Fiction</p>
                <div>
                {
                    Genres!.map(genre=> {
                        return (<Genre genre={genre} type={"nonfiction"}/>)
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Main