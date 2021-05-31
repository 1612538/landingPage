import "./App.css";
import NavBar from "./components/navBar";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import "@fontsource/roboto";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Carousel></Carousel>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
