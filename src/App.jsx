import React from "react";
import Header from "./components/Header";
import { CreatePost, Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/dalle/" element={<Home />} />
        <Route path="/dalle/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
