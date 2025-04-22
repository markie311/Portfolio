const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to another service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// API endpoint for handling contact form submissions
app.post('/api/contact', async (req, res) => {

    console.log("Synced")
  const { name, email, message } = req.body;
  
  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields' });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
  }

  try {
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'markiebeloy@example.com', // Your email address
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});