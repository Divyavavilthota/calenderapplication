import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Admin from './details/Admin.js';
import CompanyList from './details/CompanyList.js';
import EditCompany from './details/EditCompany.js';
import Dashboard from './details/Dashboard.js';
import Calendar from './details/Calendar.js';
import Chart from './details/Chart.js';
import Engagement from './details/Engagement.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar /> {/* Display Navbar on all pages */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/company-list" element={<CompanyList />} />
          <Route path="/edit-company/:id" element={<EditCompany />} />
          <Route path="/user" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />

          {/* Analytics Route */}
          <Route
            path="/analytics"
            element={
              <div className="analytics-container">
                <Chart />
                <Engagement />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
