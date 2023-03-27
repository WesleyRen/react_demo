import React, {useState} from "react";
import MyComponent from "./MyComponent";
import {UseFetcherDemo} from "./hooks/HooksStuff";
import ReturnOfAListAndCallBackPropChildren from "./code-snippets/JsxDemo";
import Form from "./code-snippets/ForwardRef";
import PortalDemo from "./code-snippets/portal";
import { List } from './long-list/components/List';
import { useDictionary } from './long-list/hooks/useDictionary'

function App() {
  const dictionary: string[] = useDictionary();
  const [str, setStr] = useState<string>("");
  const items = dictionary.filter(w => w.match(str));

  return (
      <div className="App">
          <h2>Redux stuff</h2>
          <MyComponent/>
          <h2>Hooks stuff</h2>
          {/* TODO: there is a bug causes a rendering loop in UseFetcherDemo. Fix it.*/}
          <UseFetcherDemo count={10}/>
          <h2>Code Snippets</h2>
          <ReturnOfAListAndCallBackPropChildren/>
          <Form/>
          <PortalDemo/>
          <h2>long list with search</h2>
          <input placeholder="type regex to search" value={str} onChange={(e) => {setStr(e.target.value)}}/>
          <List items={items} />
      </div>
  );
    
}

export default App;