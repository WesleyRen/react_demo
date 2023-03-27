import React from "react";

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    // A React component can also return an array of elements.
    // No need to wrap list items in an extra element!
    return items;
}

function ReturnOfAListAndCallBackPropChildren() {
    return (
        <>
            <h2>Return Of A List And Call Back Prop Children</h2>
            <Repeat numTimes={10}>
                {(index) => <div key={index}>This is item {index} in the list</div>}
            </Repeat>
        </>
    );
}

export default ReturnOfAListAndCallBackPropChildren;
