const express = require('express');
const cors = require('cors');
const summaryRoutes = require('./routes/summaryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', summaryRoutes);

module.exports = app;
