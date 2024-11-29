// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationComponent from "./NavigationComponent";
import Home from "./Home";
import Profile from "./Profile";
import Tasks from "./Tasks";
import ResponsiveForm from "./ResponsiveForm";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      {/* Navigation Bar */}
      <NavigationComponent
        isAuthenticated={isAuthenticated}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/responsiveForm" element={<ResponsiveForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
