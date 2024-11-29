import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import PostJobForm from "./components/PostJobForm";
import ViewApplicants from "./components/ViewApplicants";
import PostQuery from "./components/PostQuery";
import "./styles/App.css";
import JobCard from "./components/JobCard";


function App() {
  return (
    <Router>
      <div className="app-container">
        <NavigationBar />

        <div className="content">
          <Routes>
            
            <Route path="/post-job" element={<PostJobForm />} />
            <Route path="/view-applicants" element={<ViewApplicants />} />
            <Route path="/post-query" element={<PostQuery />} />
            <Route path="/job-card" element={<JobCard />} />
          
          </Routes>
        </div>
        <div />
      </div>
    </Router>
  );
}

export default App;
