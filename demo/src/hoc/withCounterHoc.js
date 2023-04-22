import React, {useState} from "react";

export const withCounter = (OriginalComponent)  => props => {
    const [counter, setCounter] = useState(0); //create a Hook
    return (
      <OriginalComponent
        counter={counter} //export our counter Hook
        //now create an 'incrementSize' function
        incrementCounter={() => setCounter((counter) => counter + 1)}
      />
    );
  }