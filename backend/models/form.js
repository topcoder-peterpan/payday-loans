const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const formSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'FirstName is required']
  },
  lastName: String,
  addressCity: String,
  state: String,
  zip: String,
  email: String,
  homePhone: String,
  workPhone: String,
  bestTimeToCall: String,
  ssn: String,
  birthDate: {
    type: Date,
    default: Date.now()
  },
  employerName: String,
  jobTitle: String,
  supervisorName: String,
  supervisorPhone: String,
  employerCity: String,
  driversLicenseNumber: String,
  driversLicenseState: String,
  requestedAmount: Number,
  incomeType: Number,
  payFrequency: Number,
  monthlyIncome: Number,
  bankName: String,
  bankPhone: String,
  bankABA: String,
  bankAccountNumber: String,
  bankAccountType: Number,
});

// Create the model class
const ModelClass = mongoose.model('form', formSchema);

// Export the model
module.exports = ModelClass;