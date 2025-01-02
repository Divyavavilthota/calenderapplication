const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
const port = 5001;

// Middleware
app.use(cors(
  {
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST","GET"],
    credentials: true
  }
));
app.use(bodyParser.json());
MONGO_URI="mongodb://localhost:27017/companiesDB"
PORT=5001

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Define Company Schema with timestamps
const companySchema = new mongoose.Schema({
  name: String,
  location: String,
  linkedInProfile: String,
  emails: String,
  phoneNumbers: String,
  comments: String,
  communicationPeriodicity: String,
}, { timestamps: true });  // Automatically add createdAt and updatedAt fields

// Create Company model
const Company = mongoose.model('Company', companySchema);

app.get('/api/companies', async (req, res) => {
  try {
    const company = await Company.find().sort({ createdAt: -1 }).limit(1);  // Sort by creation date and limit to the most recent company
    if (company.length > 0) {
      res.json(company[0]);  // Send only the most recent company
    } else {
      res.status(404).json({ message: 'No companies found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching company' });
  }
});


// Create a new company
app.post('/api/companies', async (req, res) => {
  const { name, location, linkedInProfile, emails, phoneNumbers, comments, communicationPeriodicity } = req.body;
  const newCompany = new Company({
    name,
    location,
    linkedInProfile,
    emails,
    phoneNumbers,
    comments,
    communicationPeriodicity,
  });

  try {
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company' });
  }
});

// Update a company (Edit functionality)
app.put('/api/companies/:id', async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );

    if (updatedCompany) {
      res.json(updatedCompany);
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating company' });
  }
});

// Delete a company
app.delete('/api/companies/:id', async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);

    if (deletedCompany) {
      res.json({ message: 'Company deleted successfully' });
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting company' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
