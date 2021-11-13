import "./styles/output.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginHome, LogoutHome } from "./components/Auth/index";
import React, { useState } from "react";

function App() {
  const [logined, setlogined] = useState(false);

  const AuthPage = () => {
    return (
      <div className="text-2xl font-mono font-bold flex flex-col justify-end items-center pt-64 gap-9">
        <h1>Code -Sta</h1>
        <LoginHome login={() => setlogined} />
        <LogoutHome />
      </div>
    );
  };

  if (!logined) return <AuthPage />;

  return (
    <div className="App">
      <BrowserRouter>
        <div className="inner">
          <Routes>
            <Route path="/" element={<AuthPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
