import React, { useEffect, useRef, useState } from 'react';
import './style.css';

function debounce(fn, ms) {
    let timer; 
    return () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => fn.apply(null, arguments), ms);
    }
}
export function LongList({numRows, rowHeight, renderRow}) {
    const [scrollTop, setScrollTop] = useState(0);
    const divRef = useRef(null);
    const [clientHeight, setClientHeight] = useState(null);
    // TODO: add a REST API for fetching by page number.
    // let longList = useFetchALongList();

    useEffect(() => {
        function handleResize() {
            setClientHeight(divRef.current && divRef.current.clientHeight);
        }

        handleResize(); // execution in first render.

        const debouncedHandleResize = debounce(handleResize, 300);
        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    }, []);

    const handleScroll = (event) => {
        setScrollTop(event.target.scrollTop);
    }

    const totalHeight = rowHeight * numRows;
    const startIndexForScrollTop = Math.floor(scrollTop / rowHeight);
    const rowsOnThePage = Math.ceil(clientHeight / rowHeight);
    const maxStartIndex = Math.max(0, numRows - rowsOnThePage);
    // Cap the start index and end index by number of rows, otherwise it'll keep scrolling,
    // and num of rows increases indefinitely, till it reaches max scroll top.
    const startIndex = Math.min(maxStartIndex, startIndexForScrollTop);
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
                    <ul>{items}</ul>
                </div>
            </div>
        </div>
    );
}