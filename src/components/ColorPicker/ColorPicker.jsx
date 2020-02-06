import React from 'react';

const ColorPicker = ({ colors, setColorIdx }) => (
    <div>
        {colors.map(color =>
            <button key={color}>{color}</button>
        )}
    </div>
);

export default ColorPicker;