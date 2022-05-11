import React from "react";
import iconStar from "../images/icon-star.svg"

const RateForm = ({ setClicked, rating, setRating }) => {

    const ratingScale = [1, 2, 3, 4, 5];

    return (
        <div className="cardForm">
            <img src={ iconStar }/>
            <h2 className="cardForm__title">How did we do?</h2>
            <p className="cardForm__desc">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <ul className="rating__list">

            {ratingScale.map(number => (     
                <li onClick={() => setRating(number)} className={`rating__item ${rating == number ? "rating__item--active" : ""}`}>{ number }</li>
            ))}
                
            </ul>
            <button onClick={() => setClicked(true)} className="button button--submit">Submit</button>
        </div>
    )
}

export default RateForm;