import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AuthRouter from "./components/auth/AuthRouter";
import PagesRouter from "./components/pages/PagesRouter";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="auth/*" element={<AuthRouter/>} />
        <Route path="pages/*" element={<PagesRouter />} />
      </Routes>
    </div>
  );
}
