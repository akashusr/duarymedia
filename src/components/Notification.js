/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import '../App.css'
import image from '../image/COns-Plate.png'
function Notification() {
    return (
        <div className="App container mt-4 justify-content-center align-items-center">
            <div className="alert alert-danger mx-auto w-75" role="alert">
                <marquee behavior="" direction="">
                    Duary Media website now under development.
                </marquee>
            </div>
            <img className="img-fluid w-full" src={image} alt="" />
        </div>
    )
}

export default Notification