import React from "react";
import MyComponent from "./MyComponent";
import {UseFetcherDemo} from "./hooks/HooksStuff";
import ReturnOfAListAndCallBackPropChildren from "./code-snippets/JsxDemo";
import Form from "./code-snippets/ForwardRef";
import PortalDemo from "./code-snippets/portal";
import { List } from './long-list/components/List';
import { useDictionary } from './long-list/hooks/useDictionary'

function App() {
  const dictionary = useDictionary();

  return (
      <div className="App">
          <h2>Redux stuff</h2>
          <MyComponent/>
          <h2>Hooks stuff</h2>
          {/* <UseFetcherDemo count={10}/> */}
          <h2>Code Snippets</h2>
          <ReturnOfAListAndCallBackPropChildren/>
          <Form/>
          <PortalDemo/>
          <List items={dictionary} />
      </div>
  );
    
}

export default App;