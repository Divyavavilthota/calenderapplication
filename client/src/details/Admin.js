import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

const Admin = () => {
  const [companyData, setCompanyData] = useState({
    name: '',
    location: '',
    linkedInProfile: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Company added successfully!');
        setCompanyData({
          name: '',
          location: '',
          linkedInProfile: '',
          emails: '',
          phoneNumbers: '',
          comments: '',
          communicationPeriodicity: '',
        });
        navigate('/company-list'); // Navigate to the company list page after adding a company
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error adding company:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="add-company-form-container">
      <h3>Add Company</h3>
      <form onSubmit={handleSubmit} className="add-company-form">
        <div className="input-group">
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={companyData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter company name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={companyData.location}
            onChange={handleInputChange}
            required
            placeholder="Enter location"
          />
        </div>
        <div className="input-group">
          <label htmlFor="linkedInProfile">LinkedIn Profile</label>
          <input
            type="url"
            id="linkedInProfile"
            name="linkedInProfile"
            value={companyData.linkedInProfile}
            onChange={handleInputChange}
            required
            placeholder="Enter LinkedIn URL"
          />
        </div>
        <div className="input-group">
          <label htmlFor="emails">Emails</label>
          <input
            type="email"
            id="emails"
            name="emails"
            value={companyData.emails}
            onChange={handleInputChange}
            required
            placeholder="Enter emails"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumbers">Phone Numbers</label>
          <input
            type="text"
            id="phoneNumbers"
            name="phoneNumbers"
            value={companyData.phoneNumbers}
            onChange={handleInputChange}
            required
            placeholder="Enter phone numbers"
          />
        </div>
        <div className="input-group">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            value={companyData.comments}
            onChange={handleInputChange}
            rows="4"
            placeholder="Enter any comments"
          />
        </div>
        <div className="input-group">
          <label htmlFor="communicationPeriodicity">Communication Periodicity</label>
          <input
            type="text"
            id="communicationPeriodicity"
            name="communicationPeriodicity"
            value={companyData.communicationPeriodicity}
            onChange={handleInputChange}
            required
            placeholder="Enter communication periodicity"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
