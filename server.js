const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

// Example certificate data
const validCertificates = ['UK05E0005325', '67890']; // Add your valid certificate numbers here

app.post('/verify', (req, res) => {
    const { certificateNumber } = req.body;
    if (validCertificates.includes(certificateNumber)) {
        // URL to your PDF file
        res.json({ success: true, pdfUrl: '/files/certificate.pdf' });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
