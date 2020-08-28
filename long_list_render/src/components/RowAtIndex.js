import React from "react";

export const numColors = 100;

export const rowHeight = 30;

export function RowAtIndex(index) {
    return (
        <div
            style={{
                height: rowHeight,
                color: getRandomColor(),
                padding: "5px 10px",
                fontSize: 24
            }}
        >
            Here it is. You're looking at row {index + 1}.
        </div>
    );
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
