import React, { useState } from "react";
import './Dashboard.css'; // For styling

const Dashboard = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [communicationData, setCommunicationData] = useState({
    notes: "",
  });

  const companies = [
    {
      name: "ZOHO",
      lastCommunications: [
        { type: "Email", date: "5th September", notes: "Quarterly report sent" },
        { type: "LinkedIn Post", date: "10th September", notes: "New product announcement" },
        { type: "Call", date: "20th September", notes: "Discussed feedback" },
        { type: "Meeting", date: "25th September", notes: "Planning session" },
        { type: "Email", date: "30th September", notes: "Follow-up on goals" },
      ],
      nextCommunication: { type: "LinkedIn Post", date: "15th December" },
      status: "Overdue",
    },
    {
      name: "AMAZON",
      lastCommunications: [
        { type: "Follow-up Call", date: "2nd September", notes: "Pricing discussion" },
        { type: "Email", date: "15th September", notes: "Shared project proposal" },
        { type: "Email", date: "18th September", notes: "Contract negotiation" },
        { type: "Call", date: "22nd January", notes: "Final review" },
        { type: "Meeting", date: "09th November", notes: "Agreement signed" },
      ],
      nextCommunication: { type: "Email", date: "28th December" },
      status: "Due Today",
    },
    {
      name: "GOOGLE",
      lastCommunications: [
        { type: "Follow-up Call", date: "2nd September", notes: "Pricing discussion" },
        { type: "Email", date: "11th September", notes: "Shared project proposal" },
        { type: "Email", date: "30th September", notes: "Contract negotiation" },
        { type: "Call", date: "9th September", notes: "Final review" },
        { type: "Meeting", date: "31st October", notes: "Agreement signed" },
      ],
      nextCommunication: { type: "Call", date: "9th December" },
      status: "Overdue",
    },
    {
      name: "WAYFAIR",
      lastCommunications: [
        { type: "Follow-up Call", date: "7th September", notes: "Pricing discussion" },
        { type: "Email", date: "15th September", notes: "Shared project proposal" },
        { type: "Email", date: "18th September", notes: "Contract negotiation" },
        { type: "Call", date: "22nd September", notes: "Final review" },
        { type: "Meeting", date: "25th September", notes: "Agreement signed" },
      ],
      nextCommunication: { type: "Call", date: "31st December" },
      status: "Due Today",
    },
  ];

  const handleCompanySelection = (companyName) => {
    setSelectedCompanies((prevSelected) =>
      prevSelected.includes(companyName)
        ? prevSelected.filter((name) => name !== companyName)
        : [...prevSelected, companyName]
    );
  };

  const handleWriteNotes = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmitNotes = () => {
    console.log("Adding notes for: ", selectedCompanies);
    console.log("Notes: ", communicationData.notes);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setCommunicationData({
      ...communicationData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="dashboard-container">
      <h1 className="title">Company Dashboard</h1>
      <div className="notification-section">
        <span className="badge overdue">
          Overdue: {companies.filter((c) => c.status === "Overdue").length}
        </span>
        <span className="badge due-today">
          Due Today: {companies.filter((c) => c.status === "Due Today").length}
        </span>
      </div>
      <table className="company-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCompanySelection(company.name)}
                  checked={selectedCompanies.includes(company.name)}
                />
                {company.name}
              </td>
              <td>
                {company.lastCommunications && company.lastCommunications.length > 0 ? (
                  company.lastCommunications.map((comm, idx) => (
                    <div key={idx} className="communication-tooltip" title={comm.notes}>
                      {comm.type} - {comm.date}
                    </div>
                  ))
                ) : (
                  <span>No communications available</span>
                )}
              </td>
              <td>
                {company.nextCommunication ? (
                  `${company.nextCommunication.type} - ${company.nextCommunication.date}`
                ) : (
                  <span>No scheduled communication</span>
                )}
              </td>
              <td className={`status ${company.status === "Overdue" ? "overdue" : "due-today"}`}>
                {company.status}
              </td>
              <td>
                <button className="action-btn" onClick={handleWriteNotes}>
                  Write Notes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Write Notes</h2>
            <form>
              <label htmlFor="notes">Notes</label>
              <textarea
                name="notes"
                value={communicationData.notes}
                onChange={handleInputChange}
                rows="5"
                placeholder="Write your notes here"
              />
              <button type="button" onClick={handleSubmitNotes}>
                Save Notes
              </button>
              <button type="button" onClick={handleModalClose}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
