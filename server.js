const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config(); 

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Database connection error:', err));

const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
