// // server/helpers/authMiddleware.js

// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// exports.authMiddleware = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const { userId } = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// };
// server/src/helpers/authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('config');

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ message: 'Missing Authorization header' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Invalid Authorization header' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
