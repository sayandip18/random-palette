import React, {useEffect, useState} from 'react';
import PaletteBox from '../PaletteBox/PaletteBox';
import './Palette.css';

function Palette() {
    const [reRendered, setRendered] = useState(0);

    const handleNewPalette = () => {
        setRendered(reRendered+1);
    }


    return <div className="Palette">
        <h1>Random Palette Generator</h1>
        <PaletteBox />
        <button onClick={handleNewPalette} >Generate a random palette</button>
    </div>;
}

export default Palette;
