import React from 'react'

let BookPage:React.FC = ()=>{
    return(<div>
        <p className="text-center">{}</p>
        <div className="w-1/2">
            <img/>
        </div>
        <div className="w-1/2">
            <p>Price:{}</p>
            <p>About:</p>
            <p>{}</p>
            <button>Add to cart</button>
        </div>
    </div>)
}

export default BookPage