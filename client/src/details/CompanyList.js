import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CompanyList.css';

const CompanyList = () => {
  const [company, setCompany] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/companies');
      if (response.ok) {
        const data = await response.json();
        setCompany(data); // Set the single company in state
      } else {
        console.error('Error fetching the most recent company');
      }
    } catch (error) {
      console.error('Error fetching the most recent company:', error);
    }
  };

  const handleEdit = () => {
    // Navigate to the edit page with the company ID
    navigate(`/edit-company/${company._id}`);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      try {
        const response = await fetch(`http://localhost:5001/api/companies/${company._id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setCompany(null); // Clear the company state
          alert('Company deleted successfully!');
        } else {
          console.error('Error deleting the company');
        }
      } catch (error) {
        console.error('Error deleting the company:', error);
      }
    }
  };

  return (
    <div className="company-list-container">
      <h3>Most Recent Company</h3>
      {company ? (
        <div className="company-box">
          <div className="company-details-container">
            <h4 className="name"><center>{company.name}</center></h4>
            <p><strong>Location:</strong> {company.location}</p>
            <p>
              <strong>LinkedIn Profile:</strong>
              <a href={company.linkedInProfile} target="_blank" rel="noopener noreferrer">
                {company.linkedInProfile}
              </a>
            </p>
            <p><strong>Emails:</strong> {company.emails}</p>
            <p><strong>Phone Numbers:</strong> {company.phoneNumbers}</p>
            <p><strong>Comments:</strong> {company.comments}</p>
            <p><strong>Communication Periodicity:</strong> {company.communicationPeriodicity}</p>
            <div className="button-container">
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      ) : (
        <p>No company found</p>
      )}
    </div>
  );
};

export default CompanyList;
