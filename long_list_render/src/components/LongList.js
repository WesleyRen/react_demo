import React, { useEffect, useRef, useState } from 'react';

export function LongList(numRows, rowHeight, renderRow) {
    const [availableHeight, setAvailableHeight] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const node = useRef(null);
    // TODO: adding a REST API for fetching by page number.
    // let longList = useFetchALongList();

    useEffect(() => {
        setAvailableHeight(node.clientHeight);
    }, [node]);

    const handleScroll = (event) => {
        setScrollTop(event.target.scrollTop);
    }

    const totalHeight = rowHeight * numRows;

    const startIndex = Math.floor(scrollTop / rowHeight);
    const endIndex = startIndex + Math.ceil(availableHeight / rowHeight) + 1;

    const items = [];

    let index = startIndex;
    while (index < endIndex) {
        items.push(<li key={index}>{renderRow(index)}</li>);
        index++;
    }

    return (
        <div
            onScroll={handleScroll}
            style={{ height: "100vh", overflowY: "scroll" }}
            ref={node}
        >
            <div
                style={{
                    height: totalHeight,
                    paddingTop: startIndex * rowHeight
                }}
            >
                <ol>{items}</ol>
            </div>
        </div>
    );
}