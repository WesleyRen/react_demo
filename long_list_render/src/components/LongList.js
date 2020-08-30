import React, { useEffect, useRef, useState } from 'react';

export function LongList({numRows, rowHeight, renderRow}) {
    const [availableHeight, setAvailableHeight] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const divRef = useRef(null);
    // TODO: add a REST API for fetching by page number.
    // let longList = useFetchALongList();

    useEffect(() => {
        setAvailableHeight(divRef.current.clientHeight);
    });

    const handleScroll = (event) => {
        setScrollTop(event.target.scrollTop);
    }

    const totalHeight = rowHeight * numRows;

    const startIndex = Math.floor(scrollTop / rowHeight);
    const endIndex = startIndex + Math.ceil(availableHeight / rowHeight) + 1;

    const items = [];

    let index = startIndex;
    while (index < endIndex) {
        items.push(<li key={startIndex + index}>{renderRow(index)}</li>);
        index++;
    }
    console.log("totalHeight", totalHeight, "startIndex * rowHeight", startIndex * rowHeight);

    return (
        <div>
            Here's a long list:
            <div
                onScroll={handleScroll}
                style={{ height: "90vh", overflowY: "scroll", border: "solid" }}
                ref={divRef}
            >
                <div
                    style={{
                        height: totalHeight,
                        paddingTop: startIndex * rowHeight
                    }}
                >
                    <ul>{items}</ul>
                </div>
            </div>
        </div>
    );
}