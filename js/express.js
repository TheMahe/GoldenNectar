// File: js/express.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST endpoint for form submission
app.post('/submit-form', (req, res) => {
    // Extracting form data from the request body
    const { fullName, email, selectWhere } = req.body;

    // Here, you would handle the form data, e.g., store it in a database or send an email

    // Sending a response back to the client
    res.json({ message: `Form received from ${fullName} with email ${email}, heard from us through ${selectWhere}` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});git push -u origin main