const handleError = (err, res) => {
   console.log(err.stack);
   return res.status(500).json({ success: false, message: err.message });
};

module.exports = { handleError };
