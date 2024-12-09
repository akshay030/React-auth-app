// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
const App: React.FC = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
