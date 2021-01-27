import "./App.css";
import SideBar from "./components/sidebar/sidebar.component";
import Header from "./components/searchbar/searchbar.component";
import RightColumn from "./components/right-column/right-column.component";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <RightColumn />
    </div>
  );
}

export default App;
