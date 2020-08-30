import React from "react";

export const rowHeight = 30;

const paddingTop = 5;

export function RowAtIndex(index) {
    return (
        <div
            style={{
                height: rowHeight - (2 * paddingTop),
                color: toColor(index),
                padding: paddingTop + "px 10px",
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

function toColor(num) {
    const d1 = num % 10;
    const d2 = Math.floor(num / 10) % 10;
    const d3 = Math.floor(num / 100) % 10;
    let result = "rgb(" + [d1 * 25, d2 * 25, d3 * 25].join(",") + ")";
    return result;
}
