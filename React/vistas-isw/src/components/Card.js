import React, { useState } from 'react';
import './Card.css'

function Card({ name, surname, age, email, phone, address }) {



    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src="data:image/jpeg;base64,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" alt=" " height="100px" width="100px" />
                </div>
            </div>
            <div className="lower-container">
                <h2> {name} {surname} </h2>
                <h4> {age} </h4>
                <h4> {email} </h4>
                <h4> {phone} </h4>
                <h4> {address} </h4>
                <button>Modificar informacón</button>
            </div>
        </div>
    );
}

export default Card
