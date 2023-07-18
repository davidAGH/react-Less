


import React from 'react';

export function Button({ color, backgroundColor, padding }) {
    const style = {
        color: color,
        backgroundColor: backgroundColor,
        padding: padding
    };

    return (
        <div>
            <button style={style}>Button</button>
        </div>
    );
}

