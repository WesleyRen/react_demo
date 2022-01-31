import React, { useEffect, useRef, useState } from 'react';

export function LongList({numRows, rowHeight, renderRow}) {
    const [availableHeight, setAvailableHeight] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const divRef = useRef(null);
    // TODO: add a REST API for fetching by page number.
    // let longList = useFetchALongList();

    const clientHeight = divRef.current && divRef.current.clientHeight;

    useEffect(() => {
        setAvailableHeight(clientHeight);
    }, [clientHeight]);

    const handleScroll = (event) => {
        setScrollTop(event.target.scrollTop);
    }

    const totalHeight = rowHeight * numRows;
    const startIndexForScrollTop = Math.floor(scrollTop / rowHeight);
    const rowsOnThePage = Math.ceil(availableHeight / rowHeight);
    const startIndexForNumRows = Math.max(0, numRows - rowsOnThePage);
    // Cap the start index and end index by number of rows, otherwise it'll keep scrolling,
    // and num of rows increases indefinitely, till it reaches max scroll top.
    const startIndex = Math.min(startIndexForNumRows, startIndexForScrollTop);
    const endIndex = Math.min(numRows, startIndex + rowsOnThePage + 1);

    const items = [];

    let index = startIndex;
    while (index < endIndex) {
        items.push(<li key={index}>{renderRow(index)}</li>);
        index++;
    }
    console.log("scrollTop", scrollTop, "totalHeight", totalHeight, "startIndex * rowHeight", startIndex * rowHeight);

    return (
        <div>
            Here's a long list:
            <div
              onScroll={handleScroll}
              style={{ height: "90vh", overflowY: "scroll", border: 'solid' }}
              ref={divRef}
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
        </div>
    );
}