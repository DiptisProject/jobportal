import React from "react";
import { Link, Routes, Route ,useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUsers, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import img1 from '../assets/re.png';
import "../styles/NavigationBar.css";


const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Recruiter Dashboard</h2>
      </div>
      <ul className="navbar-menu">
        <Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link>
        <Link to="/post-job"><FontAwesomeIcon icon={faBriefcase} />Post Job</Link>
        <Link to="/job-card"><FontAwesomeIcon icon={faUsers} />Jobs</Link>
        <Link to="/view-applicants"><FontAwesomeIcon icon={faUsers} />View Applicants</Link>
        <Link to="/post-query"><FontAwesomeIcon icon={faQuestionCircle} />Post Query</Link>
        <Link to="/logout"><FontAwesomeIcon icon={faHome} />Logout</Link>
      </ul>
    </nav>
  );
};

const Home = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate("/post-job"); 
  };

  return (
    <div className="home-container">
  <div className="home-description">
    <h1>Welcome to the Recruiter Dashboard</h1>
    <p>
      Recruitment dashboards help recruiters, hiring managers, and HR teams
      understand every aspect of the hiring process. These include tracking
      employer brand metrics which show the overall interest job seekers have
      in working for the company; to understanding how many candidates are
      moving through the hiring process. Recruiters can also use recruitment
      dashboards to focus the team’s attention on progress toward goals.
    </p>
    <button className="cta-button" onClick={handleGetStarted}>
      Get Started
    </button>
  </div>

  <div className="home-image">
    <img src={img1} alt="Recruitment Dashboard" className="dashboard-image"
    />
  </div>
</div>
  );
};

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-job" element={<div></div>} />
        <Route path="/view-applicants" element={<div></div>} />
        <Route path="/post-query" element={<div></div>} />
      </Routes>
    </>
  );
};

export default App;
