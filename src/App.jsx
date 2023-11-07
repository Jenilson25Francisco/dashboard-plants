import "./App.css";
import { Body } from "./components/body/body";
import { SideBar } from "./components/sidebar";

function App() {
  return (
    <div className="container">
      <SideBar />
      <Body />
    </div>
  );
}

export default App;
