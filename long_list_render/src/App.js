import React from 'react';
import { LongList } from "./components/LongList";
import { RowAtIndex, rowHeight } from "./components/RowAtIndex";

export default function App() {
    return <LongList {...{numRows: 5000, rowHeight, renderRow: RowAtIndex}} />
}
