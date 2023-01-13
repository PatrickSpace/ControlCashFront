import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPC from "../containers/LayoutPC";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
const App = () => {
  return (
    <BrowserRouter>
      <LayoutPC>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LayoutPC>
    </BrowserRouter>
  );
};
export default App;
