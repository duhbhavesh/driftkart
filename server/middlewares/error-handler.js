const errorHandler = (err, req, res, next) => {
   console.log(err.stack);
   return res.status(500).json({ success: false, message: err.message });
};

module.exports = { errorHandler };
