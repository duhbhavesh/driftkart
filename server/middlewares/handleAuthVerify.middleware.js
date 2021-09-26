const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const handleAuthVerify = async (req, res, next) => {
   const token = req.headers.authorization;
   try {
      const decoded = jwt.verify(token, SECRET);
      req.userId = decoded.userId;
      next();
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'You do not have permissions to view this content',
         errMessage: error.message,
      });
   }
};

module.exports = { handleAuthVerify };
