import React, { useState } from 'react';
import './ColorBox.css';

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
    const [isCopied, setIsCopied] = useState(false);

    const handleBoxClick = () => {
        setColor(generateColor());
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 500);
    }

    return(
        <div className="ColorBox" style={{backgroundColor: color}} onClick={handleBoxClick}>
            <div className="ColorBox-ColorName">
                {color}
            </div>
        </div>
    )
};

export default ColorBox;