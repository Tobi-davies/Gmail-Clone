import "./App.css";
import SideBar from "./components/sidebar/sidebar.component";
import Header from "./components/searchbar/searchbar.component";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
    </div>
  );
}

export default App;
