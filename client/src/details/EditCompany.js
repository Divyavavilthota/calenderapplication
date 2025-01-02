import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditCompany.css';  // Assuming the CSS file is named EditCompany.css

const EditCompany = () => {
  const { id } = useParams();  // Get the company ID from the URL
  const navigate = useNavigate();
  
  const [editFormData, setEditFormData] = useState({
    name: '',
    location: '',
    linkedInProfile: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: ''
  });

  useEffect(() => {
    fetchCompany();
  }, [id]);

  // Fetch the company data from the API
  const fetchCompany = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/companies/${id}`);
      if (response.ok) {
        const data = await response.json();
        setEditFormData(data);  // Fill the form with the fetched data
      } else {
        console.error('Error fetching company');
      }
    } catch (error) {
      console.error('Error fetching company:', error);
    }
  };

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5001/api/companies/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });

      if (response.ok) {
        navigate('/company-list');  // Redirect to the All Companies page after successful update
      } else {
        console.error('Error updating company');
      }
    } catch (error) {
      console.error('Error updating company:', error);
    }
  };

  return (
    <div className="edit-company-container">
      <h3>Edit Company</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={editFormData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={editFormData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>LinkedIn Profile</label>
          <input
            type="text"
            name="linkedInProfile"
            value={editFormData.linkedInProfile}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Emails</label>
          <input
            type="text"
            name="emails"
            value={editFormData.emails}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone Numbers</label>
          <input
            type="text"
            name="phoneNumbers"
            value={editFormData.phoneNumbers}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            name="comments"
            value={editFormData.comments}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Communication Periodicity</label>
          <input
            type="text"
            name="communicationPeriodicity"
            value={editFormData.communicationPeriodicity}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCompany;
