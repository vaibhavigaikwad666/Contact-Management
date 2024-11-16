const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', contactRoutes);

module.exports = app;