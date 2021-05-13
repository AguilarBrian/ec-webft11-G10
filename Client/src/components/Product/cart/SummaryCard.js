import "./SummaryCard.css"
import React, { useState } from "react"
import { useSelector } from 'react-redux';


import { useHistory } from "react-router-dom"
import swal from "sweetalert2";

const SummaryCard = () => {
    const history = useHistory()
    const total = useSelector(state => state.userReducer.total)
 

    return (
        <div className="--SummaryCard">
            <h1>Cart Summary</h1>
            <span className="--SummaryCard-span">Cart Details</span>

            <div className="--SummaryCard-sub">
                <span>subtotal</span>
                <span>${total}</span>
            </div>
            <div className="--SummaryCard-sub">
                <span>Discount</span>
                <span>$0</span>
            </div>
            <div className="--SummaryCard-tot">
                <span>Total</span>
                <span>${total}</span>
            </div>

            <button onClick={() => history.push("/checkout")} className="--SummaryCard-buttonout">Checkout</button>

        </div>
    )
}

export default SummaryCard;