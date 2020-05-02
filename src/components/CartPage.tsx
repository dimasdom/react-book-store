import React from 'react'

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
    return(<div>
        {Cart!.map(elem=>{
            return(<BookRow coverUrl={elem.url} name={elem.name} count={elem.count} price={elem.price}/>)
        })}
        <div className="flex-row">
            <p>Total Price:{}</p>
            <button>Make Order</button>
        </div>
    </div>)
}