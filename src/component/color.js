import React, { useState } from "react";

export function Color(props) {
    
    const colors = props?.colors;

    const [selectedColor, setSelectedColor] = useState('');

    const getColor = (color) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h1>Выберите цвет</h1>
            <div>
                {colors.map((color, index) => (
                    <button
                        key={index}
                        style={{ backgroundColor: color, height: '30px', width: '30px'}}
                        onClick={() => getColor(color)}
                    ></button>
                ))}
            </div>
            {selectedColor && (
                <p>Выбран цвет: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
            )}
        </div>
    );
}
