import { useState } from "react"
const Order = ({count, total}) => {
    let [show,setShow] = useState(false)
    let [showAddress, setShowAddress] = useState(false)

    return (
        <span>
            ORDER: {count} items / {total.totalAmount} {total.totalCurrency}
            <button onClick={()=>{
                setShow(true)
            }}>COMPLETE</button>

            { show &&
                <form>
                    <input placeholder="email" /><br/>
                    <input placeholder="phone" /><br/>

                    {/* 
                        HW*: add checkbox - that when it's checked opens the delivery address field 
                    */}
                    <label>
                        <input type="checkbox" onChange={(e) => setShowAddress(e.target.checked)} />
                        I want delivery
                    </label>

                    { showAddress &&
                        <div>
                            <input placeholder="address" /><br />
                        </div>
                    }

                    <button onClick={()=>{
                        alert()
                    }}>PAY</button>
                </form>
            }
        </span>
    
    )
}

export { Order } 