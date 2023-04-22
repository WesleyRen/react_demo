import React from "react";
import {withCounter} from "./withCounterHoc";

function ClickChild({counter, incrementCounter}) {
    return <p onClick={incrementCounter}>click counter: {counter}</p>
}

export const Click = withCounter(ClickChild);