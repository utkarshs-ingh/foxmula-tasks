import React from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactStars from "react-rating-stars-component";

import "./Progresscircle.css"

const percentage = 90;

function ProgressBar() {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className="progresscircle">

            {/* Attendance */}
            <div className="progresscircle__attendance">
                <p className="progresscirlce__heading">Attendance</p>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                />
                <p className="progresscircle__info">Last absence <br />12th May, 12:00 PM</p>
            </div>

            <div className="progresscircle__tests">
                <p className="progresscircle__heading">Tests</p>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                />
                <p className="progresscircle__info">Last Test <br /> 100 %</p>
            </div>

            <div className="progresscircle__rating">
                <p className="progresscircle__heading">HW Rating</p>

                <div className="progresscircle__stars">
                    <ReactStars
                        value={4.1}
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        activeColor="#EFD75B"
                    />
                    <p className="progresscircle__rating">(4.1)</p>
                    <p className="progresscircle__info">Last Homework <br />4.5</p>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
