import "./App.css";
import { Route, Switch } from "react-router-dom";
import SideBar from "./components/sidebar/sidebar.component";
import Header from "./components/searchbar/searchbar.component";
import RightColumn from "./components/right-column/right-column.component";
import Starred from "./components/starred/starred.component";
import Sent from "./components/sent/sent.component";
import MessageBox from "./components/message-box/message-box.component";
import { useState } from "react";
import TopLine from "./components/top-line/top-line.component";
import InboxContent from "./components/inbox-content/inbox-content.component";
import MobileNav from "./components/mobile-nav/mobile-nav.component";
import MobileSearchbar from "./components/mobile-searchbar/mobile-searchbar.component";

function App() {
  const [messageBox, showMessageBox] = useState(true);

  // const [socialVisible, setSocialVisible] = useState(true);
  // const [promoVisible, setPromoVisible] = useState(true);
  const [mobileNav, showMobileNav] = useState(false);

  return (
    <div className="App">
      <Header />
      <SideBar shouldMessageShow={showMessageBox} />
      <RightColumn />
      <MessageBox showMessage={messageBox} shouldMessageShow={showMessageBox} />
      <MobileNav mobileNav={mobileNav} showMobileNav={showMobileNav} />
      <MobileSearchbar showMobileNav={showMobileNav} />
      <div className="middle">
        <TopLine />

        <Switch>
          {/* <Route exact path="/" component={InboxContent} /> */}

          <Route exact path="/">
            <InboxContent
            // socialVisible={socialVisible}
            // setSocialVisible={setSocialVisible}
            // promoVisible={promoVisible}
            // setPromoVisible={setPromoVisible}
            />
          </Route>
          <Route path="/starred" component={Starred} />
          <Route path="/sent" component={Sent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
