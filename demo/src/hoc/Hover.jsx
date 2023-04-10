import React from "react";
import {withCounter} from "./withCounter";

function HoverkChild({counter, incrementCounter}) {
    return <p onMouseEnter={incrementCounter}>Hover counter: {counter}</p>
}

export const Hover = withCounter(HoverkChild);