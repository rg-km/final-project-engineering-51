import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import ErrorPage from "./pages/ErrorPage";
import TestOpening from "./pages/TestOpening";
import TestComplete from "./pages/TestComplete";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/test-opening" element={<TestOpening/>} />
            <Route path="/test-complete" element={<TestComplete/>} />
            <Route path="/result" element={<ResultPage/>} />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
