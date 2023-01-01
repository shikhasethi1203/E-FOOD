import "./App.css";
import Header from "./components/Header.js";
import Card from "./components/Cards.js";
import CardDetails from "./components/CardDetails.js";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Card/>}/>
      <Route path="/cart/:id" element={<CardDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
