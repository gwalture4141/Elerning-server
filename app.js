const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/index');


const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Fix CORS issue
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change * to frontend URL in production
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Routes
app.use('/', routes);



mongoose.set("debug", true);
console.log("MongoDB URI:", process.env.MONGO_URI);

// Database Connection
mongoose.connect( process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Start Server
const PORT = process.env.PORT || 5400;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
