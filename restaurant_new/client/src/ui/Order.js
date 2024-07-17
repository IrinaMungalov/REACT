import { useState } from "react"
const Order = ({ count, total }) => {
    let [show, setShow] = useState(false)
    // let [showAddress, setShowAddress] = useState(false)

    return (
        <span>
            ORDER: {count} items / {total.totalAmount} {total.totalCurrency}
            <button onClick={() => {
                setShow(true)
            }}>COMPLETE</button>

            {show &&
                <form>
                    <input placeholder="email" /><br />
                    <input placeholder="phone" /><br />

                    {/* 
                        HW*: add checkbox - that when it's checked opens the delivery address field 
                    
                    <label>
                        <input type="checkbox" onChange={(e) => setShowAddress(e.target.checked)} />
                        I want delivery
                    </label>

                    {showAddress &&
                        <div>
                            <input placeholder="address" /><br />
                        </div>
                    }*/}

                    <button onClick={(e) => {
                        e.preventDefault()
                        let form = e.target.parentElement
                        let orderId = localStorage.getItem('orderId')
                        let client = {
                            email: form.querySelector('[placeholder = "email"]').value,
                            phone: form.querySelector('[placeholder = "phone"]').value,
                        }

                        fetch(`http://localhost:3001/api/pay/${orderId}`,{
                            method: 'POST',
                            body: JSON.stringify(client)
                        })
                            .then((response) => response.json())
                            .then(data=>{console.log('pay response',data)
                                // redirect the user to the payment link
                            })

                    }}>PAY</button>
                </form>
            }
        </span>

    )
}

export { Order } 