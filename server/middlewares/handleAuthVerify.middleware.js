const jwt = require('jsonwebtoken');
const SECRET = 'okokok';

const handleAuthVerify = async (req, res, next) => {
   const token = req.headers.authorization;
   try {
      console.log(token);
      const decoded = jwt.verify(token, SECRET);
      req.userID = decoded.userID;
      next();
   } catch (error) {
      console.log(error);
      res.status(401).json({
         message: 'You do not have permissions to view this content',
         errMessage: error.message,
      });
   }
};

module.exports = { handleAuthVerify };
