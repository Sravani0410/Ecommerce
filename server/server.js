// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes');
const { authMiddleware } = require('./src/helpers/authMiddleware');
const connectDB =require("./src/config/db")
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// //   useCreateIndex: true,
// //   useFindAndModify: false,
// });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.use(authMiddleware); // Add auth middleware for protected routes

app.get('/api/user', (req, res) => {
  res.json({ user: req.user });
});

app.listen(port, async () => {
    try{
        await connectDB
        console.log(`Server running on port ${port}`);
    }
    catch(err){
      console.log(err)
    }
});
