import {Link, RouteComponentProps} from '@reach/router'
import * as React from "react";
import styled from "styled-components";
interface genretype {
    genre:string
    type:string
}

let FullHeightDiv = styled.div`
height:${(props:{height:number|null})=>props.height}px;
`
let Genre:React.FC<genretype> = ({genre,type})=>{
    return(
        <div>
            <Link className="flex m-10 " to={`${type}/${genre}`}>
                <span><img className={"h-12"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png"}/></span><p className={"text-4xl"} >{genre}</p>
            </Link>
        </div>
    )
}
let Main:React.FC<RouteComponentProps> = () =>{
    let GenresF:Array<string> = ["Crime","Fantasy","Romance","Science fiction","Western","Horror"]
    let GenresN:Array<string> = ["History","Memoirs","Philosophy","Self-help","Academic","Guides"]
    return(
        <FullHeightDiv height={window.innerHeight} className="flex" >
            <div  className="w-1/2 FictionBack m-0">
                <p>Fiction</p>
                <p>Fiction</p>
                <div className="text-center">
                    {
                        GenresF!.map(genre=> {
                            return (<Genre genre={genre} type={"fiction"}/>)
                        })
                    }
                </div>
            </div>
            <div  className="w-1/2 NFictionBack m-0">
                <p>NON</p>
                <p>Fiction</p>
                <div>
                    {
                        GenresN!.map(genre=> {
                            return (<Genre genre={genre} type={"nonfiction"}/>)
                        })
                    }
                </div>
            </div>
        </FullHeightDiv>
    )

}

export default Main