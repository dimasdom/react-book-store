import * as React from 'react'
import { Link } from '@reach/router'


let Header:React.FC = () =>{
    return(
        <div className="flex">
            <Link className="justify-start" to={"/"}></Link>
            <Link className="justify-end" to={"/cart"}></Link>
        </div>
    )
}
export default Header