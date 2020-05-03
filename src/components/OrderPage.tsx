import * as React from 'react'

let OrderPage:React.FC =()=>{
    return(<div>
        <div className="w-1/2">
            <div className="h-1/3"><p>Full name</p> <input/></div>
            <div className="h-1/3"><p>Phone</p><input/></div>
            <div className="h-1/3"><p>Address</p><input/></div> </div>
        <div className="w-1/2">
            <p>Pay</p>
            <div>
                <div className="flex-row"><input/></div>
                <div className="flex-row"><input type="text"/><input type="text"/></div>
            </div>
            <p>Total Price:{}</p>
            <button>Order</button>
        </div>
    </div>)
}