require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const clientsRouter = require('./routes/clients');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/clients', clientsRouter);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/smart_solar';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error:', err);
    process.exit(1);
  });
