import React from "react";
import Header from "./pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewNotes from "./pages/ViewNotes";

const App = () => {
  return (
    <Router>
        <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/viewNotes" element={<ViewNotes></ViewNotes>} ></Route>
      </Routes>
    </Router>
  );
};

export default App;
