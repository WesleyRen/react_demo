import React, {useState} from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


import MyComponent from "./MyComponent";
import {UseFetcherDemo} from "./hooks/HooksStuff";
import ReturnOfAListAndCallBackPropChildren from "./code-snippets/JsxDemo";
import Form from "./code-snippets/ForwardRef";
import PortalDemo from "./code-snippets/portal";
import { List } from './long-list-by-boxing/components/List';
import { useDictionary } from './long-list-by-boxing/hooks/useDictionary'
import { Workspace } from "./file-tree/Workspace/Workspace";
import Todo from "./todo/Todo";
import { LongList } from "./long-list-by-padding/components/LongList";
import { RowAtIndex, rowHeight } from "./long-list-by-padding/components/RowAtIndex";

function App() {
  const dictionary: string[] = useDictionary();
  const [str, setStr] = useState<string>("");
  const items = dictionary.filter(w => w.match(str));

  return (
      <div className="App">
        <Tabs defaultIndex={2}>
          <TabList>
            <Tab>Snippets</Tab>
            <Tab>windowing by boxing</Tab>
            <Tab>windowing by padding</Tab>
            <Tab>File Tree</Tab>
            <Tab>Todo</Tab>
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
            {/* 
              Interesting, it seems browser (Chrome) has a scroll top limit around 30,503,022.
              That causes anything > 1016801 here not able to show.
            */}
            <LongList {...{numRows: 200000, rowHeight, renderRow: RowAtIndex}} />
          </TabPanel>
          
          <TabPanel>
            <Workspace />
          </TabPanel>

          <TabPanel>
            <Todo/>
          </TabPanel>
         
        </Tabs>
      </div>
  );
    
}

export default App;