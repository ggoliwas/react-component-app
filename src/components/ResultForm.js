import React from "react";
import resultimg from "../images/illustration-thank-you.svg";

const ResultForm = ({ rating } ) => {
    return (
        <div className="cardForm text-center">
            <img src={resultimg} />
            <p className="cardForm__info">You selected { rating } out of 5</p>
            <h2 className="cardForm__title">Thank you</h2>
            <p className="cardForm__desc">We appreciate you taking the time to give a rating/ If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    )
}

export default ResultForm;