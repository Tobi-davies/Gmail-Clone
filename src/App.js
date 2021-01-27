import "./App.css";
import { Route, Switch } from "react-router-dom";
import SideBar from "./components/sidebar/sidebar.component";
import Header from "./components/searchbar/searchbar.component";
import RightColumn from "./components/right-column/right-column.component";
import Starred from "./components/starred/starred.component";
import Sent from "./components/sent/sent.component";
import MessageBox from "./components/message-box/message-box.component";
import { useState } from "react";

function App() {
  const [messageBox, showMessageBox] = useState(true);

  return (
    <div className="App">
      <Header />
      <SideBar shouldMessageShow={showMessageBox} />
      <RightColumn />
      <MessageBox showMessage={messageBox} shouldMessageShow={showMessageBox} />

      <div className="middle">
        <Switch>
          <Route path="/starred" component={Starred} />
          <Route path="/sent" component={Sent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
