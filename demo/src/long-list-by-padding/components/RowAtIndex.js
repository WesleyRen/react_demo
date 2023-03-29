import React from "react";

export const rowHeight = 30;

export function RowAtIndex(index) {
    return (
        <div
            style={{
                height: rowHeight,
                color: computeHSLRainbowColor(index, 100),
                fontSize: 24
            }}
        >
            Here it is. You're looking at row {index + 1}.
        </div>
    );
}

function computeHSLRainbowColor(n, period) {
  return `hsl(${Math.round(n / period * 360)},100%,${(n % period) / period * 100}%)`;
}