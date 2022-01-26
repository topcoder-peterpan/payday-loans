const Form = require("../models/form");
let _ = require("lodash");
var nodemailer = require("nodemailer");

exports.createForm = function (req, res, next) {
  const firstName = req.body.data["firstName"];
  const lastName = req.body.data["lastName"];
  const addressCity = req.body.data["addressCity"];
  const state = req.body.data["state"];
  const zipCode = req.body.data["zipCode"];
  const email = req.body.data["email"];
  const homePhone = req.body.data["homePhone"];
  const workPhone = req.body.data["workPhone"];
  const bestTimeToCall = req.body.data["bestTimeToCall"];
  const ssn = req.body.data["ssn"];
  const birthDate = req.body.data["birthDate"];
  const employerName = req.body.data["employerName"];
  const jobTitle = req.body.data["jobTitle"];
  const supervisorName = req.body.data["supervisorName"];
  const supervisorPhone = req.body.data["supervisorPhone"];
  const employerCity = req.body.data["employerCity"];
  const driversLicenseNumber = req.body.data["driversLicenseNumber"];
  const driversLicenseState = req.body.data["driversLicenseState"];
  const requestedAmount = req.body.data["requestedAmount"];
  const incomeType = req.body.data["incomeType"];
  const payFrequency = req.body.data["payFrequency"];
  const monthlyIncome = req.body.data["monthlyIncome"];
  const bankName = req.body.data["bankName"];
  const bankPhone = req.body.data["bankPhone"];
  const bankABA = req.body.data["bankABA"];
  const bankAccountNumber = req.body.data["bankAccountNumber"];
  const bankAccountType = req.body.data["bankAccountType"];

  // Create a new form
  const form = new Form({
    firstName: firstName,
    lastName: lastName,
    addressCity: addressCity,
    state: state,
    zipCode: zipCode,
    email: email,
    homePhone: homePhone,
    workPhone: workPhone,
    bestTimeToCall: bestTimeToCall,
    ssn: ssn,
    birthDate: birthDate,
    employerName: employerName,
    jobTitle: jobTitle,
    supervisorName: supervisorName,
    supervisorPhone: supervisorPhone,
    employerCity: employerCity,
    driversLicenseNumber: driversLicenseNumber,
    driversLicenseState: driversLicenseState,
    requestedAmount: requestedAmount,
    incomeType: incomeType,
    payFrequency: payFrequency,
    monthlyIncome: monthlyIncome,
    bankName: bankName,
    bankPhone: bankPhone,
    bankABA: bankABA,
    bankAccountNumber: bankAccountNumber,
    bankAccountType: bankAccountType,
  });

  // Save the form
  form.save(function (err, form) {
    // callback function
    if (err) {
      return next(err);
    }
    res.json("success");
    // mail sending
    // let FROM_ADDRESS = "foo@bar.com"; // site email
    // let TO_ADDRESS = "test@test.com"; // your email

    // let smtpTransport = nodemailer.createTransport("SMTP", {
    //   service: "Gmail",
    //   auth: {
    //     user: "bar@foo.com",
    //     pass: "PASSWORD",
    //   },
    // });

    // let sendMail = function (toAddress, subject, content, next) {
    //   let mailOptions = {
    //     from: "SENDERS NAME <" + FROM_ADDRESS + ">",
    //     to: toAddress,
    //     replyTo: fromAddress,
    //     subject: subject,
    //     html: content,
    //   };

    //   smtpTransport.sendMail(mailOptions, next);
    // };
  });
};
