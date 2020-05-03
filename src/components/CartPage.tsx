import * as React from 'react'

interface BookRowType{
    coverUrl:string
    name:string
    count:number
    price:number
}

let BookRow:React.FC<BookRowType> =({coverUrl,name,count,price})=>{
    return(<div className="flex-row">
        <img src={coverUrl}/>
        <p>{name}</p>
        <p>{count}</p>
        <p>Price{count*price}</p>
    </div>)
}

let CartPage:React.FC = ()=>{
    //let Cart:Array<any> = []
    return(<div>
        <p>

        </p>
        <div className="flex-row">
            <p>Total Price:{}</p>
            <button>Make Order</button>
        </div>
    </div>)
}

export default  CartPage