import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/JobCard.css";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    setJobs(storedJobs);
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
    setSelectedJob(null);
  };

  return (
    <div className="job-card-container">
      <h3 className="text-center my-4">Posted Jobs</h3>
      {jobs.length === 0 ? (
        <p className="text-center">No jobs posted yet.</p>
      ) : (
        <div className="job-cards">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h4 className="job-title">{job.jobTitle}</h4>
              <p>
                <strong>Company:</strong> {job.companyName}
              </p>
              <p>
                <strong>Location:</strong> {job.jobLocation}
              </p>
              <p>
                <strong>Description:</strong> {job.jobDescription}
              </p>
              <p>
                <strong>Package:</strong> {job.jobPackage} LPA
              </p>
              <p>
                <strong>Type:</strong> {job.jobType}
              </p>
              <Button variant="primary"  className="apply-btn" onClick={() => handleApplyClick(job)}> Apply</Button>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Job Application Form */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {selectedJob?.jobTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name*</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" required />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" required />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group controlId="resume">
              <Form.Label>Resume/CV*</Form.Label>
              <Form.Control type="file" accept=".pdf,.doc,.docx,.txt,.rtf" required />
              <Form.Text className="text-muted">
                Accepted file types: pdf, doc, docx, txt, rtf
              </Form.Text>
            </Form.Group>

            <h5>Education</h5>
            <Form.Group controlId="school">
              <Form.Label>School</Form.Label>
              <Form.Control as="select">
                <option>Select...</option>
                {/* Add other school options here */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="degree">
              <Form.Label>Degree</Form.Label>
              <Form.Control as="select">
                <option>Select...</option>
                {/* Add degree options here */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="discipline">
              <Form.Label>Discipline</Form.Label>
              <Form.Control as="select">
                <option>Select...</option>
                {/* Add discipline options here */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="startDateMonth">
              <Form.Label>Start Date (Month)</Form.Label>
              <Form.Control as="select">
                <option>Select...</option>
                {/* Add month options here */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="startDateYear">
              <Form.Label>Start Date (Year)</Form.Label>
              <Form.Control as="select">
                <option>Select...</option>
                {/* Add year options here */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="endDateYear">
              <Form.Label>End Date (Year)</Form.Label>
              <Form.Control as="select">
                <option>Select...</option>
                {/* Add end year options here */}
              </Form.Control>
            </Form.Group>

            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JobCard;
