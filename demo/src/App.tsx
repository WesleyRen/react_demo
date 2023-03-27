import React, {useState} from "react";
import MyComponent from "./MyComponent";
import {UseFetcherDemo} from "./hooks/HooksStuff";
import ReturnOfAListAndCallBackPropChildren from "./code-snippets/JsxDemo";
import Form from "./code-snippets/ForwardRef";
import PortalDemo from "./code-snippets/portal";
import { List } from './long-list/components/List';
import { useDictionary } from './long-list/hooks/useDictionary'
import { Workspace } from "./file-tree/Workspace/Workspace";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

function App() {
  const dictionary: string[] = useDictionary();
  const [str, setStr] = useState<string>("");
  const items = dictionary.filter(w => w.match(str));

  return (
      <div className="App">
        <Tabs defaultIndex={2}>
          <TabList>
            <Tab>Redux stuff</Tab>
            <Tab>long list with search</Tab>
            <Tab>File Tree</Tab>
          </TabList>
          
          <TabPanel tabIndex={0}>
            <MyComponent/>
            <UseFetcherDemo count={10}/>
            <ReturnOfAListAndCallBackPropChildren/>
            <Form/>
            <PortalDemo/>
          </TabPanel>
          
          <TabPanel>
            <input placeholder="type regex to search" value={str} onChange={(e) => {setStr(e.target.value)}}/>
            <List items={items} />
          </TabPanel>
          
          <TabPanel>
            <Workspace />
          </TabPanel>
         
        </Tabs>
      </div>
  );
    
}

export default App;