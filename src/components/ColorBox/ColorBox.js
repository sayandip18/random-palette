import React, { Component, useState } from 'react';

const generateRandomRGB = () => {
    return Math.floor(Math.random() * 256);
}

const generateColor = () => {
    let r = generateRandomRGB();
    let g = generateRandomRGB();
    let b = generateRandomRGB();
    return `rgb(${r}, ${g}, ${b})`;
}

const ColorBox = () => {
    const [color, setColor] = useState(generateColor());
    return(
        <div className="ColorBox" style={{backgroundColor: color}}>
            <div className="ColorBox-ColorName">
                {color}
            </div>
        </div>
    )
}

export default ColorBox;