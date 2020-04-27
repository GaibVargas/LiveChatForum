const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async(req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const [scheme, token] = authHeader.split(' ');

  if(scheme !== 'Bearer') {
    return res.status(401).json({ message: 'Token malformatted' });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    return next();
  } catch(error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
