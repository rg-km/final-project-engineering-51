import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import ErrorPage from "./pages/ErrorPage";
import TestOpening from "./pages/TestOpening";
import TestComplete from "./pages/TestComplete";
import TestPage1 from "./pages/TestPage1";
import ResultPage from "./pages/ResultPage";
import TestPage2 from "./pages/TestPage2";
import TestPage3 from "./pages/TestPage3";
import TestPage4 from "./pages/TestPage4";
import TestPage5 from "./pages/TestPage5";
import TestPage6 from "./pages/TestPage6";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/test-opening" element={<TestOpening/>} />
            <Route path="/test-page-1" element={<TestPage1/>} />
            <Route path="/test-page-2" element={<TestPage2/>} />
            <Route path="/test-page-3" element={<TestPage3/>} />
            <Route path="/test-page-4" element={<TestPage4/>} />
            <Route path="/test-page-5" element={<TestPage5/>} />
            <Route path="/test-page-6" element={<TestPage6/>} />
            <Route path="/test-complete" element={<TestComplete/>} />
            <Route path="/result" element={<ResultPage/>} />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;