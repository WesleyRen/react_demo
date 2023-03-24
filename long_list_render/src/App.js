import React from 'react';
import { LongList } from "./components/LongList";
import { RowAtIndex, rowHeight } from "./components/RowAtIndex";

export default function App() {
    // Interesting, it seems browser (Chrome) has a scroll top limit around 30,503,022.
    // That causes anything > 1016801 here not able to show.
    return <LongList {...{numRows: 1016801, rowHeight, renderRow: RowAtIndex}} />
}
