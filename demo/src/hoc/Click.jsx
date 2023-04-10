import React from "react";
import {withCounter} from "./withCounter";

function ClickChild({counter, incrementCounter}) {
    return <p onClick={incrementCounter}>click counter: {counter}</p>
}

export const Click = withCounter(ClickChild);