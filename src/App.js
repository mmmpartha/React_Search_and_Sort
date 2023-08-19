import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Display from "./display";
import Searchbar from './searchbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Searchbar />} />
        <Route exact path="/display/:name" element={<Display />} />
      </Routes>
    </Router>

  );
}

export default App;
