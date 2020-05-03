import  {useState} from 'react'
import { Link } from '@reach/router'
import * as React from "react";
interface BookType {
    book:string
    coverUrl:string
}
let Book:React.FC<BookType> = ({book,coverUrl})=>{
    return(<div>
        <Link to={`/book/${book.toLowerCase()}`}><img className={"rounded-lg"} src={coverUrl}/></Link>
    </div>)
}
let Type:React.FC = ()=>{
    let [Popular,SetPopular] = useState([])
    let [Classic,SetClassic] = useState([])
    return(<div>
        <p>Type</p><span>Search icon</span>
        <p>What popular now:</p>
        <div>
        {
         //   Popular!.map(pop=>{
           //         return(<Book book={pop.name} coverUrl={pop.coverUrl}/>)
            //})
        }
        </div>
        <p>Classic</p>
        <div>
            {
             //   Classic!.map(pop=>{
               //     return(<Book book={pop.name} coverUrl={pop.coverUrl}/>)
                //})
            }
        </div>
    </div>)
}

export default Type