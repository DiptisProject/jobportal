import React from 'react'
import '../styles/ViewApplicants.css'

const ViewApplicants = () => {
  const applicants = [
    { name: 'John Doe', email: 'john@example.com', resume: 'Resume Link' },
    { name: 'Jane Smith', email: 'jane@example.com', resume: 'Resume Link' }
  ]

  return (
    <div className="applicants-container">
      <h3>Applicants for the Job</h3>
      <ul>
        {applicants.map((applicant, index) => (
          <li key={index}>
            <p>Name: {applicant.name}</p>
            <p>Email: {applicant.email}</p>
            <p>Resume: <a href={applicant.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewApplicants
