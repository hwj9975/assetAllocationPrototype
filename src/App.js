import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main";
import Backtest from "./Backtest";
import Contact from "./Contact";
import Strategy from "./Strategy";
import NotReady from "./NotReady";
import Result from "./Result";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Backtest" element={<Backtest />} />
          <Route path="/Strategy" element={<Strategy />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NotReady" element={<NotReady />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
