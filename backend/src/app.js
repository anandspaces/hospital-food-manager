const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const dietChartRoutes = require('./routes/dietChartRoutes');
const pantryRoutes = require('./routes/pantryRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', patientRoutes);
app.use('/api', dietChartRoutes);
app.use('/api', pantryRoutes);
app.use('/api', deliveryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
