import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './PaletteBox.css';

function PaletteBox() {
    const randomKey = () => {
        return '_' + Math.random().toString(36).substring(2, 9);
    }
    return <div className="PaletteBox">
        {
            [...Array(5)].map(
                () => <ColorBox key={randomKey()} />
            )
        }
    </div>;
}

export default PaletteBox;
